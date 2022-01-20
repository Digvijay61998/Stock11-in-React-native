import React, {useEffect} from 'react';
import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SplashScreen from "react-native-splash-screen"
import Tabs from "./navigation/tabs";
import Contest from './components/Contest';
import MyBasket from './components/MyBasket';
import MyContest from './components/MyContest/MyContest';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const App = (props) => {

//  useEffect(() =>{
//   setTimeout(() => {
//     SplashScreen.hide();
// }, 1000);
//  },[]);

// if (!loggedIn) {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Register" component={RegisterScreen} navigation={this.props.navigation} options={{ headerShown: false }} />
//         <Stack.Screen name="Login" navigation={this.props.navigation} component={LoginScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
  return (
// {/* <Provider > */}
    <NavigationContainer>
  
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >  
            <Stack.Screen key={Date.now()} name="Home" component={Tabs}/>
            <Stack.Screen key={Date.now()} name="CryptoDetail" component={CryptoDetail}/>
            <Stack.Screen key={Date.now()} name="Transaction" component={Transaction}/>  
            <Stack.Screen key={Date.now()} name="Contest" component={Contest}/>  
            <Stack.Screen key={Date.now()} name="MyBasket" component={MyBasket}/>  
            <Stack.Screen key={Date.now()} name="MyContest" component={MyContest}/>  
      </Stack.Navigator> 
  </NavigationContainer>
  // {/* </Provider> */}

  )
}

export default App;