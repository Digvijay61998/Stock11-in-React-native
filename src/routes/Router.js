import React, { useState } from 'react';
import NavigationContainer from '@react-navigation/native';

// import { Loading } from '../components/Loading';
import AppStack  from './AuthStack';
import  AuthStack from './AppStack';
// import { useAuth }  from '../context/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';




export const Router = async () => {
  const [authData, setAuthData] = useState();
  const data = await AsyncStorage.getItem('userToken');
  console.log("authData",authData);
  if(data){
    setAuthData(data);
  
  }
  // const {authData, loading} = useAuth();

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <NavigationContainer>
      
      {authData ? <AppStack /> : <AuthStack />}
      {/* <AuthStack />
      <AppStack />  */}
    </NavigationContainer>
  );
};
