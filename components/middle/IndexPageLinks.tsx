import React from 'react';
import tw, { style } from 'twrnc';
import { View } from 'react-native';
import { Link } from 'expo-router';
import ColoredText from '../ColoredText';
import Svg, { Rect, Path } from 'react-native-svg';
const InStockIcon = ()=>{
    return(
        <Link href={"djf"} style={tw`flex flex-row items-center border-2 border-blue-800 bg-blue-800 rounded-md shrink pt-1 px-0.5 `}>
        <View style={tw`flex flex-row items-center bg-blue-800 gap-1 `}>
        <Svg  height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
            <Path d="M120-40v-880h80v80h560v-80h80v880h-80v-80H200v80h-80Zm80-480h80v-160h240v160h240v-240H200v240Zm0 320h240v-160h240v160h80v-240H200v240Zm160-320h80v-80h-80v80Zm160 320h80v-80h-80v80ZM360-520h80-80Zm160 320h80-80Z"/>
        </Svg>
        <ColoredText style={tw`font-bold  text-xs uppercase`}>
        InStock
        </ColoredText>
        </View>
        </Link>
    )
}

const OutOfStockIcon = ()=>{
    return(
        <Link href={"djf"} style={tw`flex flex-row  items-center border-2 border-rose-800 bg-rose-800 rounded-md shrink pt-1 px-0.5`}>
        <View style={tw`flex flex-row items-center gap-1 `}>
        <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
            <Rect x="150" y="-800" width="650" height="80" rx="10" fill="#fff" />
            <Rect x="150" y="-500" width="650" height="80" rx="10" fill="#fff" />
            <Rect x="150" y="-200" width="650" height="80" rx="10" fill="#fff" />
            <Rect x="100" y="-900" width="80" height="850" rx="10" fill="#fff" />
            <Rect x="750" y="-900" width="80" height="850" rx="10" fill="#fff" />
        </Svg>
        <ColoredText style={tw`font-bold  text-xs uppercase`}>
        OutOfStock
        </ColoredText>
        </View>
        </Link>
    )
}

const AddProductButton = () => {
    return (
        <Link href={'addProduct'} style={tw`flex flex-row  items-center border-2 border-green-800 bg-green-800 rounded-md shrink pt-1 px-0.5`}>
        <View style={tw`flex flex-row  items-center gap-1 `}>
        <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <Path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
        </Svg>
        <ColoredText style={tw`font-bold text-xs uppercase`}>
        AddItem
        </ColoredText>
        </View>
        </Link>
    )
  }

export {InStockIcon,OutOfStockIcon,AddProductButton};
