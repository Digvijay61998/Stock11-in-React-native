import React, {useEffect} from 'react';
import {Setting } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SplashScreen from "react-native-splash-screen"
import Tabs from "./navigation/tabs";
import Contest from './components/Contest';
import MyBasket from './components/MyBasket/MyBasket';
import MyContest from './components/MyContest/MyContest';
import { Provider } from 'react-redux';
import OtpVerification from './screens/OtpVerification';
import CompleteProfile from './screens/CompleteProfile';
import UpcomingContestDetails from './components/MyContest/UpcomingLiveEvents/UpcomingEvents/UpcomingContestDetails';
import { LiveEvents, UpcomingEvents } from './components/MyContest/UpcomingLiveEvents';
import LiveContestDetails from './components/MyContest/UpcomingLiveEvents/LiveContestDetails/LiveContestDetails';
import EarnedPoints from './components/MyContest/UpcomingLiveEvents/LiveContestDetails/EarnedPoints';
import CreateBasket from './components/MyBasket/BasketEdits/CreateBasket';
import TeamsView from './components/MyBasket/BasketEdits/TeamsView';
import EditTeam from './components/MyBasket/BasketEdits/EditTeam';
import CompletedContestDetails from './components/MyContest/UpcomingLiveEvents/Completed/CompletedContestDetails';
import AboutUs from './components/settingFile/AboutUs';
import BankDetails from './components/settingFile/BankDetails';
import ChangePassword from './components/settingFile/ChangePassword';
import HelpDesk from './components/settingFile/HelpDesk';
import HowToPlay from './components/settingFile/HowToPlay';
import Notification from './components/settingFile/Notification';
import Profile from './components/settingFile/Profile';
import Promovode from './components/settingFile/PromoCode';
import PromoCode from './components/settingFile/PromoCode';
import ReferFriend from './components/settingFile/ReferFriend';
import Wallet from './components/settingFile/Wallet';

const Stack = createStackNavigator();

const App = () => {

 useEffect(() =>{
  setTimeout(() => {
    SplashScreen.hide();
}, 1000);
 },[]);

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
            <Stack.Screen key={Date.now()} name="Tabs" component={Tabs}/>
            <Stack.Screen key={Date.now()} name="Setting" component={Setting}/>  
            <Stack.Screen key={Date.now()} name="Contest" component={Contest}/>  
            <Stack.Screen key={Date.now()} name="MyBasket" component={MyBasket}/>  
            <Stack.Screen key={Date.now()} name="MyContest" component={MyContest}/>  
            <Stack.Screen key={Date.now()} name="OtpVerification" component={OtpVerification} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="CompleteProfile" component={CompleteProfile} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="UpcomingEvents" component={UpcomingEvents} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="UpcomingContestDetails" component={UpcomingContestDetails} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="LiveEvents" component={LiveEvents} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="LiveContestDetails" component={LiveContestDetails} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="EarnedPoints" component={EarnedPoints} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="CreateBasket" component={CreateBasket} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="TeamsView" component={TeamsView} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="EditTeam" component={EditTeam} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="CompletedContestDetails" component={CompletedContestDetails} screenOptions={{ headerShown: true }} />
           

            <Stack.Screen key={Date.now()} name="AboutUs" component={AboutUs} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="BankDetails" component={BankDetails} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="ChangePassword" component={ChangePassword} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="HelpDesk" component={HelpDesk} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="HowToPlay" component={HowToPlay} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="Notification" component={Notification} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="Profile" component={Profile} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="PromoCode" component={PromoCode} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="ReferFriend" component={ReferFriend} screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="Wallet" component={Wallet} screenOptions={{ headerShown: true }} />
           


            {/* <Stack.Screen key={Date.now()} name="Setting" component={Setting} navigation={this.props.navigation} options={({ route }) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? "HelpDesk";

              switch (routeName) {
                case 'AboutUs': {
                  return {
                    headerTitle: 'AboutUs',
                  };
                }
                case 'HowToPlay': {
                  return {
                    headerTitle: 'HowToPlay',
                  };
                }
                case 'Promocode': {
                  return {
                    headerTitle: 'Promocode',
                  };
                }
                case 'ChangePassword': {
                  return {
                    headerTitle: 'ChangePassword',
                  };
                }
                case 'ReferFriend': {
                  return {
                    headerTitle: 'ReferFriend',
                  };
                }
                case 'Logout': {
                  return {
                    headerTitle: 'Logout',
                  };
                }
                case 'HelpDesk':
                default: {
                  return {
                    headerTitle: 'HelpDesk',
                  };
                }
              }
            }}
            />
     */}
      </Stack.Navigator> 
  </NavigationContainer>
  // {/* </Provider> */}
  )
}

export default App;