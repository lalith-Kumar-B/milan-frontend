import React from 'react';
import { View} from 'react-native';
import tw from 'twrnc';
import { InStockIcon,OutOfStockIcon,AddProductButton } from './IndexPageLinks';
import Products from './Products';
function Middle() {
  return (
    <View style={tw`px-4 mt-1 h-full`}>
        <View id='middle-page-tabs' style={tw`mt-1 flex flex-row w-full justify-between gap-1 `}>
            <InStockIcon/>
            <OutOfStockIcon/>
            <AddProductButton/>
        </View>
        <Products/>
    </View>
  )
}

export default Middle