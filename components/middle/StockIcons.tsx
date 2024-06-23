import React from 'react';
import tw from 'twrnc';
import { Pressable} from 'react-native';
import ColoredText from '../ColoredText';
import Svg, { Rect, Path } from 'react-native-svg';
const InStockIcon = ()=>{
    return(
        <Pressable style={tw`flex flex-row  border-2 border-blue-800 bg-blue-800 rounded-lg p-1 gap-2 `}>
        <Svg  height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
            <Path d="M120-40v-880h80v80h560v-80h80v880h-80v-80H200v80h-80Zm80-480h80v-160h240v160h240v-240H200v240Zm0 320h240v-160h240v160h80v-240H200v240Zm160-320h80v-80h-80v80Zm160 320h80v-80h-80v80ZM360-520h80-80Zm160 320h80-80Z"/>
        </Svg>
        <ColoredText style={tw`font-bold  pt-0.5`}>
        InStock
        </ColoredText>
        </Pressable>
    )
}

const OutOfStockIcon = ()=>{
    return(
        <Pressable style={tw`flex flex-row border-2 border-red-800 bg-red-800 rounded-lg p-1 gap-2`}>
        <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
            <Rect x="150" y="-800" width="650" height="80" rx="10" fill="#fff" />
            <Rect x="150" y="-500" width="650" height="80" rx="10" fill="#fff" />
            <Rect x="150" y="-200" width="650" height="80" rx="10" fill="#fff" />
            <Rect x="100" y="-900" width="80" height="850" rx="10" fill="#fff" />
            <Rect x="750" y="-900" width="80" height="850" rx="10" fill="#fff" />
        </Svg>
        <ColoredText style={tw`font-bold  pt-0.5`}>
        OutOfStock
        </ColoredText>
        </Pressable>
    )
}

export {InStockIcon,OutOfStockIcon};
