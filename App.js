import React, {useEffect} from 'react';
import {Setting } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SplashScreen from "react-native-splash-screen"
import Tabs from "./navigation/tabs";
import Contest from './src/components/Contest/Contest';
import MyBasket from './src/components/MyBasket/MyBasket';
import MyContest from './src/components/MyContest/MyContest';
import OtpVerification from './src/components/auth/OtpVerification';
import CompleteProfile from './screens/CompleteProfile';
import UpcomingContestDetails from './src/components/MyContest/UpcomingLiveEvents/UpcomingEvents/UpcomingContestDetails';
import { LiveEvents, UpcomingEvents } from './src/components/MyContest/UpcomingLiveEvents';
import LiveContestDetails from './src/components/MyContest/UpcomingLiveEvents/LiveContestDetails/LiveContestDetails';
import CompletedContestDetails from './src/components/MyContest/UpcomingLiveEvents/Completed/CompletedContestDetails';
import AboutUs from './src/components/settingFile/AboutUs';
import BankDetails from './src/components/settingFile/BankDetails';
import ChangePassword from './src/components/settingFile/ChangePassword';
import HelpDesk from './src/components/settingFile/HelpDesk';
import HowToPlay from './src/components/settingFile/HowToPlay';
import Notification from './src/components/settingFile/Notification';

import Profile from './src/components/settingFile/Profile';
import PromoCode from './src/components/settingFile/PromoCode';
import ReferFriend from './src/components/settingFile/ReferFriend';
import Wallet from './src/components/settingFile/Wallet';
import ViewContest from './src/components/Contest/ViewContest';
import CreateContestBasket from './src/components/Contest/CreateContestBasket';
import LeadStockandFollowStock from './src/components/Contest/LSandFs';
import TeamPreview from './src/components/Contest/TeamPreview';
import PayUsing from './src/components/Contest/PayUsing';
import SelectBasket from './src/components/Contest/SelectBasket';
import CurrentBalance from './src/components/Contest/CurrentBalance';
import { Home } from './screens';
import Register from './src/components/auth/Register';
import MyProfile from './src/components/settingFile/MyProfile';
import EditProfile from './src/components/settingFile/EditProfile';
import Login from './src/components/auth/Login';
import FrontPage from './screens/FrontPage';
import PayByWallet from './src/components/settingFile/PayByWallet';
import SelectPayment from './src/components/settingFile/SelectPayment';
import Perfomance from './src/components/MyContest/UpcomingLiveEvents/Completed/Perfomance';

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
//         <Stack.Screen name="Login" navigation={this.props.navigation} component={Register} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
  return (
    <NavigationContainer>
  
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'FrontPage'}
      >  
            <Stack.Screen key={Date.now()} name="Tabs" component={Tabs} options={{headerShown:false}} />      
            <Stack.Screen key={Date.now()} name="Contest" component={Contest}/>  
            <Stack.Screen key={Date.now()} name="MyBasket" component={MyBasket}/>  
            <Stack.Screen key={Date.now()} name="MyContest" component={MyContest}/>  
            <Stack.Screen key={Date.now()} name="Register" component={Register} options={{headerShown: false}}/>  
            <Stack.Screen key={Date.now()} name="Login" component={Login} options={{headerShown: false}}/>  
            <Stack.Screen key={Date.now()} name="OtpVerification" component={OtpVerification} options={{headerShown: false}}/>
            <Stack.Screen key={Date.now()} name="FrontPage" component={FrontPage} options={{headerShown: false}}/>
          
         
{/* <Stack.Screen key={Date.now()} name="Home" component={Home} options={{ title:"Home",headerStyle:{
              backgroundColor:'#252837'},             
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: "normal",
                
              }
              }} /> */}

               <Stack.Screen key={Date.now()} name="Setting" component={Setting} options={{ title:"Settings"}}/> 
            <Stack.Screen key={Date.now()} name="CompleteProfile" component={CompleteProfile}  options={{headerShown: false}} />
            <Stack.Screen key={Date.now()} name="UpcomingEvents" component={UpcomingEvents}  options={{headerShown:false}} />
            <Stack.Screen key={Date.now()} name="UpcomingContestDetails" component={UpcomingContestDetails}  options={{headerShown:false}} />
            <Stack.Screen key={Date.now()} name="LiveEvents" component={LiveEvents}  options={{ title:"LiveEvents",headerShown:false}}  />
            <Stack.Screen key={Date.now()} name="LiveContestDetails" component={LiveContestDetails}  options={{headerShown:false}} />
            <Stack.Screen key={Date.now()} name="CompletedContestDetails" component={CompletedContestDetails}  ooptions={{headerShown:false}} />
            <Stack.Screen key={Date.now()} name="CreateContestBasket" component={CreateContestBasket} options={{headerShown: false}} />
            <Stack.Screen key={Date.now()} name="LeadStockandFollowStock" component={LeadStockandFollowStock}  options={{headerShown:false}}/>
            <Stack.Screen key={Date.now()} name="Perfomance" component={Perfomance}  options={{headerShown:false}}/>
           

            <Stack.Screen key={Date.now()} name="AboutUs" component={AboutUs}  />
            <Stack.Screen key={Date.now()} name="BankDetails" component={BankDetails} options={{headerShown:false}}/>
            <Stack.Screen key={Date.now()} name="ChangePassword" component={ChangePassword} options={{headerShown:false}}/>
            <Stack.Screen key={Date.now()} name="HelpDesk" component={HelpDesk} options={{headerShown:false}}/>        
            <Stack.Screen key={Date.now()} name="HowToPlay" component={HowToPlay} options={{headerShown:false}}/>           
            <Stack.Screen key={Date.now()} name="Notification" component={Notification} options={{headerShown:false}}/>
            <Stack.Screen key={Date.now()} name="Profile" component={Profile} options={{headerShown:false}}/>     
            <Stack.Screen key={Date.now()} name="PromoCode" component={PromoCode} options={{headerShown:false}}/> 
            <Stack.Screen key={Date.now()} name="ReferFriend" component={ReferFriend} options={{headerShown:false}}/>
            <Stack.Screen key={Date.now()} name="Wallet" component={Wallet} options={{headerShown:false}}/>        
            <Stack.Screen key={Date.now()} name="PayByWallet" component={PayByWallet} options={{headerShown:false}}/>        
            <Stack.Screen key={Date.now()} name="ViewContest" component={ViewContest} options={{headerShown:false}}/>
            <Stack.Screen key={Date.now()} name="Team Preview" component={TeamPreview} options={{headerShown:false}}/>
            <Stack.Screen key={Date.now()} name="Pay Using" component={PayUsing} options={{headerShown:false}}/>           
            <Stack.Screen key={Date.now()} name="Select Basket" component={SelectBasket} options={{headerShown:false}}/>
            <Stack.Screen key={Date.now()} name="Current Balance" component={CurrentBalance} options={{headerShown:false}}/>
            <Stack.Screen key={Date.now()} name="MyProfile" component={MyProfile} options={{headerShown:false}}/>
            <Stack.Screen key={Date.now()} name="SelectPayment" component={SelectPayment} options={{headerShown:false}}/>


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
  )
}


export default App;