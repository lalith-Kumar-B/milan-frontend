import React, {useRef, useEffect, useState} from 'react';
import tw from 'twrnc';
import { View, Pressable, TextInput } from 'react-native'; 
import BackArrowWithTail from '../BackArrowWithTail';

interface SearchBoxProps {
  handleView : () => void;
}

const SearchBox : React.FC<SearchBoxProps> = ({handleView}) => {

  //onMount focus on search box
  const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  //search box text
  const [Text, setText] = useState<string>('');
  const [TimeOutId, setTimeOutId] = useState<NodeJS.Timeout | null>(null); 

  const handleInputChange = (input: string) => {
    setText(input);
    if (TimeOutId) {
      clearTimeout(TimeOutId);
    }
    let nextTimeOutId = setTimeout(() => {
      setText('searching'); //change this to search for the results ...
    }, 500);

    setTimeOutId(nextTimeOutId)

  };
  return (
  <View style={tw`bg-gray-700 h-40 rounded-b-lg  `}>
    <View style={tw`h-14 mt-4 mx-2 border-2 rounded-full bg-gray-800 flex flex-row border-gray-700`}>
        <Pressable onPress={handleView} style={tw`pl-2 w-12 rounded-full `}>
          <BackArrowWithTail  Acolor="#D3D3D3" Aheight={50} Awidth={30}/>
        </Pressable>
        <TextInput 
          style={tw` w-73 rounded-r-full text-xl text-white`}
          placeholder='Search Product' 
          placeholderTextColor={'#D3D3D3'} 
          ref={inputRef}
          value={Text||''}
          onChangeText={handleInputChange}/>
    </View>

  </View>
  )
}

export default SearchBox