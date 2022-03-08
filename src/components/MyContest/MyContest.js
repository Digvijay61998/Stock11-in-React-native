import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import {IdolContest} from "../../Common/index"
import {LiveEvents, UpcomingEvents, CompletedEvents} from "./UpcomingLiveEvents"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLORS, FONTS, icons ,Header ,CardBox } from '../../../constants';
const MyContestStack = createMaterialTopTabNavigator();

const MyContest = ({ navigation }) => {
    return (
      <View style={Header}>
                <View style={{
                      justifyContent:"space-evenly",
                      alignItems: "center",
                      flexDirection: "row",
                     flex: 1,
                     
                }}>
                 <MyContestStack.Navigator
    tabBarOptions={{
            style: {
                position: "relative",
                // botton: 100,
                backgroundColor: COLORS.primary,
                padding:10,
                height: 70,
                elevation:0
            },
            showIcon: true, showLabel: false, indicatorStyle: {
                opacity: 0
            }
            
        }}

        initialRouteName={'UpcomingEvents'}
      
      >  
        <MyContestStack.Screen
        
          name="UpcomingEvents"
          navigation={navigation}
          component={UpcomingEvents}
          color="#2F313E"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                      borderRadius:50,
                        height: 60,
                        width:110,
                        right:45,
                        bottom:14,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? COLORS.
                            white : COLORS.HeaderBackground
                    }}
                >
                    <Text style={[styles.MycontestText,{ color: focused ? COLORS.
                                        primary : COLORS.FaintWhite,}]
                    }>Upcoming</Text>
                </View>
                </View>
            )
        }}
      
        />
         <MyContestStack.Screen
          name="LiveEvents"
          component={LiveEvents}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        // flex: 1,
                        borderRadius:50,
                        height: 60,
                        width:110,
                        right:45,
                        bottom:14,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? COLORS.
                        white : COLORS.HeaderBackground
                    }}
                >
                    <Text style={[styles.MycontestText,{ color: focused ? COLORS.
                                        primary : COLORS.FaintWhite,}]
                    }>Live</Text>
                </View>
                </View>
            )
        }}
        />
        <MyContestStack.Screen
          name="CompletedEvents"
          component={CompletedEvents}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        borderRadius:50,
                        height: 60,
                        width:110,
                        right:45,
                        bottom:14,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? COLORS.
                        white : COLORS.HeaderBackground
                    }}
                >
                    <Text  style={[styles.MycontestText,{ color: focused ? COLORS.
                                        primary : COLORS.FaintWhite,}]
                    }>Completed</Text>
                </View>
                </View>
            )
        }}
        />  
      </MyContestStack.Navigator> 
                 </View>
              
            </View>
            
             
    )
}


export default MyContest;

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
      overflow:"hidden",
    },
  // My Home menue
  Mycontestmenu:{
      position: "relative",
      justifyContent:"space-around",
      flexDirection: "row",
      width: 380,
      height: 60,
      backgroundColor: COLORS.HeaderBackground,
  },
  ActiveMycontest:{
      flex: 1,
     width: 120,
     borderTopRightRadius: 15,
     borderTopLeftRadius: 15,
      backgroundColor: COLORS.HeaderBackground, 
      margin:2,
  },
  InactiveMycontest:{
      flex: 1,
     width: 120,
     borderTopRightRadius: 15,
     borderTopLeftRadius: 15,
      backgroundColor: COLORS.HeaderBackground, 
      margin:2,
  },
  MycontestText:{ 
  fontFamily:'Poppins',
  fontSize:15,
  fontWeight: 'bold',
}
})
