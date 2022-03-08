import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';


const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Login"  component={LoginScreen} options={{ title:"Otp Verification",headerStyle:{
              backgroundColor:'#252837'},             
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                
              }
              }} />
    </Stack.Navigator>
  );
};
