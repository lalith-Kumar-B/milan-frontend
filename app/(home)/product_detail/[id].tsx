import React from 'react'
import { View } from 'react-native';
import tw from 'twrnc';
import { useLocalSearchParams } from 'expo-router';
import Wrapper1 from '@/components/Wrapper1';
import ColoredText from '@/components/ColoredText';
function ProductPage() {
    const {id} = useLocalSearchParams();
  return (
        <View style={tw`bg-[#000f02] w-full h-full border-t-2 border-gray-600`}>
          <View style={tw`mt-2 px-2 mb-14`}>
            <ColoredText>
            Details for page with id {id}
            </ColoredText>
          </View>
        </View>
  )
}

export default ProductPage;