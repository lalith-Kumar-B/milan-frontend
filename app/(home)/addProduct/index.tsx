import React, { useState, useEffect } from 'react';
import { View, TextInput, Pressable, Alert, Image, ScrollView, ActivityIndicator } from 'react-native';
import tw from 'twrnc';
import ColoredText from '@/components/ColoredText';
import { Svg,Path } from 'react-native-svg';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import axios from 'axios';
import { productsPostRoute } from '@/constants/ApiRoutes';
import { productsAtom } from '@/state/atoms';
import { useSetRecoilState } from 'recoil';

interface ProductInterface {
  name: string;
  mrp: number;
  rate: number;
  stock: number;
  qtyt: string;
}

const AddProduct = () => {
  const [product, setProduct] = useState<ProductInterface>({
    name: '',
    mrp: 0,
    rate: 0,
    stock: 0,
    qtyt: '',
  });
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const setProducts = useSetRecoilState(productsAtom);

  useEffect(() => {
    (async () => {
      if (Constants && Constants.platform && (Constants.platform.ios || Constants.platform.android)) {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Required', 'Please grant permission to access the photo library.');
        }
      }
    })();
  }, []);

  const handleInputChange = (key: keyof ProductInterface, value: string | number) => {
    setProduct(prevProduct => ({
      ...prevProduct,
      [key]: value,
    }));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImages(prevImages => [...prevImages, result.assets[0].uri]);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleFormSubmit = async () => {
    setLoading(true);
    const apiUrl = productsPostRoute;

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('mrp', String(product.mrp));
    formData.append('rate', String(product.rate));
    formData.append('stock', String(product.stock));
    formData.append('qtyt', product.qtyt);

    images.forEach((image, index) => {
      const filename = `image-${index}.jpg`;

      fetch(image)
        .then(response => response.blob())
        .then(blob => {
          formData.append('images', blob, filename);
        })
        .catch(error => {
          console.error('Error fetching image blob:', error);
          Alert.alert('Error', 'Failed to process image. Please try again.');
        });
    });

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setProducts((prev)=>{ return [...prev,response.data.serverRes]});
        Alert.alert('Product Created', 'Product has been successfully created.');
      } else {
        Alert.alert('Error', 'Failed to create product. Please try again later.');
      }
    } catch (error : any) {
      console.error('Error:', error);
      if (error.response && error.response.data) {
        Alert.alert('Error', error.response.data.serverRes || 'Failed to create product. Please try again later.');
      } else {
        Alert.alert('Error', 'Failed to create product. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tw`bg-[#000f02] w-full h-full border-t-2 border-gray-600 p-4`}>
      <ColoredText style={tw`bg-gray-700 py-1 text-[#b5b3ae] rounded-md text-3xl font-semibold text-center`}>Fill the Form</ColoredText>
      
      <TextInput
        style={tw`bg-gray-700 text-green-500 text-lg p-2 mt-2 rounded-md font-semibold`}
        placeholder="Product Name"
        placeholderTextColor={'#b5b3ae'}
        value={product.name}
        onChangeText={text => handleInputChange('name', text)}
      />
      
      <TextInput
        style={tw`bg-gray-700 text-green-500 text-lg p-2 mt-2 rounded-md font-semibold`}
        placeholder="MRP"
        placeholderTextColor={'#b5b3ae'}
        keyboardType="numeric"
        value={product.mrp ? String(product.mrp) : ''}
        onChangeText={text => handleInputChange('mrp', parseFloat(text))}
      />
      
      <TextInput
        style={tw`bg-gray-700 text-green-500 text-lg p-2 mt-2 rounded-md font-semibold`}
        placeholder="Rate"
        placeholderTextColor={'#b5b3ae'}
        keyboardType="numeric"
        value={product.rate ? String(product.rate) : ''}
        onChangeText={text => handleInputChange('rate', parseFloat(text))}
      />

      <TextInput
        style={tw`bg-gray-700 text-green-500 text-lg p-2 mt-2 rounded-md font-semibold`}
        placeholder="Stock"
        placeholderTextColor={'#b5b3ae'}
        keyboardType="numeric"
        value={product.stock ? String(product.stock) : ''}
        onChangeText={text => handleInputChange('stock', parseInt(text))}
      />

      <TextInput
        style={tw`bg-gray-700 text-green-500 text-lg p-2 mt-2 rounded-md font-semibold`}
        placeholder="Quantity Type"
        placeholderTextColor={'#b5b3ae'}
        value={product.qtyt}
        onChangeText={text => handleInputChange('qtyt', text)}
      />
      
      <Pressable onPress={pickImage} style={tw`flex flex-row items-center gap-2 bg-blue-700 p-2 mt-2 rounded-md`}>
        <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <Path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/>
        </Svg>
        <ColoredText style={tw`text-white text-base text-[#e8eaed] text-center uppercase`}>
        Pick Image {` [Optional]`}
        </ColoredText>
      </Pressable>


      <ScrollView horizontal style={tw`flex flex-row rounded-lg mt-2`}>
        {images.map((image, index) => (
          <View key={index} style={tw`mr-2 `}>
            <Image source={{ uri: image }} style={tw`w-24 h-24 border border-[#b5b3ae] rounded-t-md m-0.5`} />
            <Pressable onPress={() => removeImage(index)} > 
              <ColoredText style={tw`bg-rose-700 text-white rounded-b-md p-1 text-center text-sm m-0.5 `}>
               Remove
              </ColoredText>
            </Pressable>
          </View>
        )) }
      </ScrollView>
      
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <Pressable onPress={handleFormSubmit} style={tw`flex flex-row items-center content-center justify-center gap-2 bg-green-700 py-2 mt-2 mx-24  rounded-md`}>
          <ColoredText style={tw`text-white text-base font-bold text-[#e8eaed] text-center uppercase`}>
            Create
          </ColoredText>
      </Pressable>
      )}
    </View>
  );
};

export default AddProduct;
