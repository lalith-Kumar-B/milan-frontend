import React from 'react';
import tw from 'twrnc';
import { View,Pressable } from 'react-native';
import ColoredText from '../ColoredText';
import SearchIcon from '../SearchIcon';

interface HeaderPressableProps {
  handleView : () => void;
}

const HeaderPressable : React.FC<HeaderPressableProps> = ({handleView}) => {
  return (
    <View>
        <View id='header-meta-data' style={tw`w-full flex flex-row justify-between px-4`}>
            <ColoredText style={tw`font-semibold text-2xl`}>
              MilanSales
            </ColoredText>
            <ColoredText style={tw`font-semibold text-2xl`}>
            🌟
            </ColoredText>
            <ColoredText style={tw`font-semibold text-2xl`}>
            🚀
            </ColoredText>
        </View>
        <View id='search-pressable' style={tw`h-14 mt-4 mx-2 border-2 rounded-full bg-gray-700 justify-center`}>
            <Pressable onPress={handleView} style={tw`h-14 rounded-full flex justify-center items-start px-4`}>
              <SearchIcon color='#D3D3D3'/>
            </Pressable>
        </View>
    </View>
  )
}

export default HeaderPressable;