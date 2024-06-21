import React from 'react'
import { View } from 'react-native';
import HeaderPressable from "./HeaderPressable";
import SearchBox from "./SearchBox";
import { useState } from 'react';


function Header() {
    const [view, setView] = useState(true);
    const handleView = ()=>{
        return view ? setView(false) : setView(true);
    };
    return (
    <View>
        {view && <HeaderPressable handleView={handleView}/>}
        {!view && <SearchBox handleView={handleView}/>}
    </View>
  )
}

export default Header