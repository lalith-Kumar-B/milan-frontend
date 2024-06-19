import {Stack} from 'expo-router';
function HomeLayout(){
  return(
    <>
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="signin" options={{headerShown:false}} />
      <Stack.Screen name="signup" options={{headerShown:false}} />
    </Stack>
    </>
  )
}
export default HomeLayout;