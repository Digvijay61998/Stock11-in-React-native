import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import { Provider } from 'react-redux';

import  Home  from '../screens/Home';
// import Contest from '../components/Contest/Contest';
// import MyBasket from '../components/MyBasket/MyBasket';
// import MyContest from '../components/MyContest/MyContest';
// import OtpVerification from '../screens/OtpVerification';
// import { LiveEvents, UpcomingEvents } from '../components/MyContest/UpcomingLiveEvents';
// import PayUsing from '../components/Contest/PayUsing';
// import CurrentBalance from '../components/Contest/CurrentBalance';
// import SelectBasket from '../components/Contest/SelectBasket';
// import TeamPreview from '../components/Contest/TeamPreview';
// import ViewContest from '../components/Contest/ViewContest';
// import Wallet from '../components/settingFile/Wallet';
// import ReferFriend from '../components/settingFile/ReferFriend';
// import PromoCode from '../components/settingFile/PromoCode';
// import Profile from '../components/settingFile/Profile';
// import Notification from '../components/settingFile/Notification';
// import HowToPlay from '../components/settingFile/HowToPlay';
// import HelpDesk from '../components/settingFile/HelpDesk';
// import ChangePassword from '../components/settingFile/ChangePassword';
// import BankDetails from '../components/settingFile/BankDetails';
// import LeadStockandFollowStock from '../components/Contest/LSandFs';
// import CreateContestBasket from '../components/Contest/CreateContestBasket';
// import CompletedContestDetails from '../components/MyContest/UpcomingLiveEvents/Completed/CompletedContestDetails';
// import EditTeam from '../components/MyBasket/BasketEdits/EditTeam';
// import TeamsView from '../components/MyBasket/BasketEdits/TeamsView';
// import CreateBasket from '../components/MyBasket/BasketEdits/CreateBasket';
// import EarnedPoints from '../components/MyContest/UpcomingLiveEvents/LiveContestDetails/EarnedPoints';
// import LiveContestDetails from '../components/MyContest/UpcomingLiveEvents/LiveContestDetails/LiveContestDetails';
// import UpcomingContestDetails from '../components/MyContest/UpcomingLiveEvents/UpcomingEvents/UpcomingContestDetails';
// import CompleteProfile from '../screens/CompleteProfile';
// import Setting from '../screens/Setting';
// import AboutUs from '../components/settingFile/AboutUs';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
    
    {/* <Stack.Screen key={Date.now()} name="Tabs" component={Tabs} options={{headerShown:false}} />       */}
            
            <Stack.Screen key={Date.now()} name="Home" component={Home} options={{ title:"Home",headerStyle:{
                          backgroundColor:'#252837'},             
                          headerTintColor: '#fff',
                          headerTitleStyle: {
                            fontWeight: "normal",
                            
                          }
                          }} />
            {/* <Stack.Screen key={Date.now()} name="Contest" component={Contest}/>  
            <Stack.Screen key={Date.now()} name="MyBasket" component={MyBasket}/>  
            <Stack.Screen key={Date.now()} name="MyContest" component={MyContest}/>  
            <Stack.Screen key={Date.now()} name="OtpVerification" component={OtpVerification} options={{ title:"Otp Verification",headerStyle:{
              backgroundColor:'#252837'},             
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                
              }
              }} />


               <Stack.Screen key={Date.now()} name="Setting" component={Setting} options={{ title:"Settings",headerStyle:{
              backgroundColor:'#252837'},             
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 20,
                
              }
              }}/> 
            <Stack.Screen key={Date.now()} name="CompleteProfile" component={CompleteProfile}  options={{ title:"CompleteProfile",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }}screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="UpcomingEvents" component={UpcomingEvents}  options={{ title:"UpcomingEvents",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }}screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="UpcomingContestDetails" component={UpcomingContestDetails}  options={{ title:"UpcomingContestDetails",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }}screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="LiveEvents" component={LiveEvents}  options={{ title:"LiveEvents",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }}screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="LiveContestDetails" component={LiveContestDetails}  options={{ title:"LiveContestDetails",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }}screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="EarnedPoints" component={EarnedPoints}  options={{ title:"EarnedPoints",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }}screenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="CreateBasket" component={CreateBasket}  options={{ title:"CreateBasket",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="TeamsView" component={TeamsView}  options={{ title:"TeamsView",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="EditTeam" component={EditTeam} options={{ title:"EditTeam",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }}creenOptions={{ headerShown: true }} />
            <Stack.Screen key={Date.now()} name="CompletedContestDetails" component={CompletedContestDetails}  options={{ title:"CompletedContestDetails",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="CreateContestBasket" component={CreateContestBasket}  options={{ title:"CreateContestBasket",headerStyle:{
              backgroundColor:'#252837' } ,headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="LeadStockandFollowStock" component={LeadStockandFollowStock}  />
           

            <Stack.Screen key={Date.now()} name="AboutUs" component={AboutUs}  />
            <Stack.Screen key={Date.now()} name="BankDetails" component={BankDetails}options={{ title:"BankDetails",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="ChangePassword" component={ChangePassword}options={{ title:"ChangePassword",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="HelpDesk" component={HelpDesk}options={{ title:"HelpDesk",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="HowToPlay" component={HowToPlay}options={{ title:"HowToPlay",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="Notification" component={Notification}options={{ title:"Notification",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="Profile" component={Profile}options={{ title:"Profile",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="PromoCode" component={PromoCode}options={{ title:"PromoCode",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="ReferFriend" component={ReferFriend}options={{ title:"ReferFriend",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="Wallet" component={Wallet}options={{ title:"Wallet",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="ViewContest" component={ViewContest}options={{ title:"ViewContest",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="Team Preview" component={TeamPreview}options={{ title:"Team Preview",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="Pay Using" component={PayUsing}options={{ title:"Pay Using",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="Select Basket" component={SelectBasket}options={{ title:"Select Basket",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} />
            <Stack.Screen key={Date.now()} name="Current Balance" component={CurrentBalance}options={{ title:"Current Balance",headerStyle:{
              backgroundColor:'#252837' } ,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
              }} /> */}

    </Stack.Navigator>
  );
};
