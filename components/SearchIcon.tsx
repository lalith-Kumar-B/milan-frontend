import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path,Circle } from 'react-native-svg';
import tw from 'twrnc';
import ColoredText from './ColoredText';

const SearchIcon = ({ size = 24, color = 'black' }) => {
  return (
    <View style={[styles.container, { width: 150, height: size }]}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M21 21l-5.2-5.2" />
        <Circle cx="10" cy="10" r="7" />
      </Svg>
      <ColoredText style={{...tw`pl-4 text-base `,color:'#D3D3D3'}}>Search Product</ColoredText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchIcon;
