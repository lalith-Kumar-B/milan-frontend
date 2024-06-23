import {Stack} from 'expo-router';
function HomeLayout(){
  return(
    <>
    <Stack >
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="signin" options={{headerShown:false}} />
      <Stack.Screen name="signup" options={{headerShown:false}} />
      <Stack.Screen name="product_detail/[id]" options={{
        headerTitle:'ProductPage',
        statusBarTranslucent: true,
        headerStyle: {backgroundColor:'#000f02'},
        headerTintColor:"#fff",
        headerTitleAlign:'center',
        headerTitleStyle :{
          fontWeight:'normal',
          color : "#fff",
        }
        }} />
    </Stack>
    </>
  )
}
export default HomeLayout;