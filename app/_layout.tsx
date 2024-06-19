import { RecoilRoot } from 'recoil';
import {Stack} from 'expo-router';
import {View} from 'react-native';
import tw from 'twrnc';

function RootLayout() {
  return (
    <>
    <RecoilRoot>
    <Stack>
      <Stack.Screen name="(home)" options={{headerShown: false}} />
    </Stack>
    </RecoilRoot>
    </>
  )
}
export default RootLayout;