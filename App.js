import React, {useEffect} from 'react';
import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import Tabs from "./navigation/tabs";
import Contest from './components/Contest';
import MyBasket from './components/MyBasket';
import MyContest from './components/MyContest';
import OtpVerification from './screens/OtpVerification';
import CompleteProfile from './screens/CompleteProfile';

const Stack = createStackNavigator();

const App = () => {

 useEffect(() =>{
  setTimeout(() => {
    SplashScreen.hide();
}, 1000);
 },[]);

  return (
    <NavigationContainer>
      
       <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >  
        <Stack.Screen
          name="Tabs"
          component={Tabs}
      
        />
         {/* <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
        /> */}
        <Stack.Screen
          name="Transaction"
          component={Transaction}
        />  
            <Stack.Screen
          name="Contest"
          component={Contest}
        />  
            <Stack.Screen
          name="MyBasket"
          component={MyBasket}
        />  
        <Stack.Screen 
        name="OtpVerification"
         component={OtpVerification}
         screenOptions={{
          headerShown: true
        }} />

        <Stack.Screen 
        name="CompleteProfile"
         component={CompleteProfile}
         screenOptions={{
          headerShown: true
        }} />

               <Stack.Screen
          name="MyContest"
          component={MyContest}
        />  
      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;