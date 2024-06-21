import React from 'react';
import { View} from 'react-native';
import tw from 'twrnc';
import ColoredText from '../ColoredText';

function Middle() {
  return (
    <View style={tw`px-4 mt-1 border-2 border-red-900 h-full`}>
        <View id='middle-page-tabs' style={tw`mt-1 flex flex-row w-full justify-between border-2 border-yellow-500`}>
            <ColoredText>Instock</ColoredText>
            <ColoredText>OutOfStock</ColoredText>
        </View>
    </View>
  )
}

export default Middle