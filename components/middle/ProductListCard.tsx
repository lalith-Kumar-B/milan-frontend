import React from 'react'
import { View, Image} from 'react-native';
import tw from 'twrnc';
import ColoredText from '../ColoredText';
interface ProductInterface{
    name:string;
    mrp:number;
    rate:number;
    stock:number;
    qtyt:string;
}
const ProductListCard : React.FC<ProductInterface> = ({name,mrp,rate,stock,qtyt}) => {
  return (
    <View style={tw`flex flex-row gap-5 h-15 m-1  content-center border-t-2 border-gray-800 rounded bg-gray-800`}> 
        <View style={tw`border border-purple-400 rounded-lg w-12 h-12 ml-1 mt-1`}>
        <Image source={require('../../assets/images/adaptive-icon.png')} style={tw` border-2 rounded-lg w-12 h-12`}/>
        </View>
        <View style={tw`flex flex-col justify-center mb-1`}>
          <ColoredText style={tw`rounded-lg px-1 text-sm font-semibold capitalize `}>{name}</ColoredText>
          <View style={tw`flex flex-row gap-1 justify-between mt-1`}>
            <ColoredText style={tw` px-1 text-xs font-semibold capitalize text-gray-400`}>{`mrp : ${mrp}/-`}</ColoredText>
            <ColoredText style={tw` px-1 text-xs font-semibold capitalize text-gray-400`}>{`rate : ${rate}/-`}</ColoredText>
            <ColoredText style={tw` px-1 text-xs font-semibold capitalize text-gray-400`}>{`stock : ${stock} ${qtyt}`}</ColoredText>
          </View>
        </View>

    </View>
  )
}

export default ProductListCard