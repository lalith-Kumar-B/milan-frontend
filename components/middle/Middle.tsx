import React from 'react';
import { View} from 'react-native';
import tw from 'twrnc';
import ColoredText from '../ColoredText';
import { InStockIcon,OutOfStockIcon } from './StockIcons';
import Products from './Products';
function Middle() {
  return (
    <View style={tw`px-4 mt-1 h-full`}>
        <View id='middle-page-tabs' style={tw`mt-1 flex flex-row w-full justify-between`}>
            <InStockIcon/>
            <OutOfStockIcon/>
        </View>
        <Products/>
    </View>
  )
}

export default Middle