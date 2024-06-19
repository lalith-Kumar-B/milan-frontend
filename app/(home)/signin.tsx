import { Text, View, Button, TouchableOpacity} from 'react-native'
import { Dimensions } from 'react-native';
import tw from 'twrnc';
import { count_atom } from '@/state/atoms';
import { useRecoilState } from 'recoil';

function Index (){
    const {width, height} = Dimensions.get('window');
    const [count, setCount] = useRecoilState(count_atom);
    const increaseCount = ()=>{
        setCount(prev => prev+1);
    }
    return (
      <View style={tw`w-full h-full flex flex-row justify-center content-center gap-2`}>
        <Text> signin</Text>
        <Text> Width : {width}</Text>
        <Text> Height : {height}</Text>
        <Text>clicks : {count}</Text>
        <View>
        <Button title='click' onPress={increaseCount}/>
        </View>
      </View>
    )
  }

export default Index;