import { View, Pressable} from 'react-native'
import { count_atom } from '@/state/atoms';
import {products_sel} from '@/state/selectors';
import { useRecoilState, useRecoilValue } from 'recoil';
import tw from 'twrnc';
import Wrapper1 from '@/components/Wrapper1';
import ColoredText  from '@/components/ColoredText';
import SearchIcon from '@/components/SearchIcon';

function Index (){
    return (
      <Wrapper1>
        <View id='index-page'>
          <View id='header-box' style={tw`w-full flex flex-row justify-between px-4`}>
            <ColoredText style={tw`font-semibold text-2xl`}>
              MilanSales
            </ColoredText>
            <ColoredText style={tw`font-semibold text-2xl`}>
            🌟
            </ColoredText>
            <ColoredText style={tw`font-semibold text-2xl`}>
            🚀
            </ColoredText>
          </View>
          <View id='search-box' style={tw`h-14 mt-4 mx-2 border-2 rounded-full bg-gray-800 justify-center`}>
            <Pressable style={tw`h-14 rounded-full flex justify-center items-start px-4`}>
              <SearchIcon color='gray'/>
            </Pressable>
          </View>
        </View>
      </Wrapper1>
    )
  }

export default Index;