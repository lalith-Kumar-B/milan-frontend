import React from 'react'
import { ScrollView, View } from 'react-native';
import tw from 'twrnc';
import ProductListCard from './ProductListCard';
import { useRecoilValue } from 'recoil';
// import { products_sel } from '@/state/selectors';
import { productsAtom } from '@/state/atoms';

type ProductType = {
  id:string,
  name : string,
  mrp:number,
  rate:number,
  stock:number,
  qtyt:string
}

function Products() {
  const Products = useRecoilValue(productsAtom);
  return (
    <ScrollView style={tw`mt-2 mb-14`}>
      <View> 
      {Products.map((product : ProductType)=>{return <ProductListCard
        key={product.id}
        id={product.id}
        name={product.name} 
        mrp={product.mrp} 
        rate={product.rate} 
        stock={product.stock}
        qtyt={product.qtyt}/>})}
      </View>
    </ScrollView>
  )
}

export default Products;