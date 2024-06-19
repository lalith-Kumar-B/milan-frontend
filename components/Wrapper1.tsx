import React,{ReactNode, useEffect } from "react";
import {View,StatusBar} from "react-native";
import tw from "twrnc";
interface Wrapper1Template{
    children:ReactNode;
}

const Wrapper1:React.FC<Wrapper1Template> = ({children})=>{
    useEffect(()=>{
        StatusBar.setBarStyle('light-content');
    })
    return(
        <View style={{...tw`w-full h-full`,backgroundColor:'#000f02'}}>
            <View style={tw`pt-8`}>
                {children}
            </View>
        </View>
    )
}

export default Wrapper1;