import { View} from 'react-native'
import Wrapper1 from '@/components/Wrapper1';
import Header from '@/components/top/Header';
import Middle from '@/components/middle/Middle';
function Index (){
    return (
      <Wrapper1>
        <View id='index-page'>
          <Header/>
          <Middle/>
        </View>
      </Wrapper1>
    )
  }

export default Index;