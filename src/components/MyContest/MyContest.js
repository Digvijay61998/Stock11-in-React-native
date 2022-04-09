import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox} from "../../constants"
import {IdolContest} from "../../Common/index"
import {LiveEvents, UpcomingEvents, CompletedEvents} from "./UpcomingLiveEvents"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const MyContestStack = createMaterialTopTabNavigator();

const MyContest = ({ navigation}) => {
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

        initialRouteName={'LiveEvents'}
      
      >  
        <MyContestStack.Screen
        
          name="LiveEvents"
          navigation={navigation}
          component={LiveEvents}
          color="#2F313E"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                      borderRadius:50,
                      height: 40,
                      width:110,
                      right:45,
                      bottom:10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: focused ? "#4caea7" : "#c4c4c4"
                    }}
                >
                    <Text style={[styles.MycontestText,{ color: focused ? COLORS.
                                        white :"#f4f4f4",}]
                    }>LIVE</Text>
                </View>
                </View>
            )
        }}
      
        />
         <MyContestStack.Screen
          name="UpcomingEvents"
          component={UpcomingEvents}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        // flex: 1,
                        borderRadius:50,
                        height: 40,
                        width:110,
                        right:45,
                        bottom:10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? "#4caea7" : "#c4c4c4"
                    }}
                >
                    <Text style={[styles.MycontestText,{ color: focused ? COLORS.
                                        white :"#f4f4f4",}]
                    }>UPCOMING</Text>
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
                        height: 40,
                        width:110,
                        right:45,
                        bottom:10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? "#4caea7" : "#c4c4c4"
                    }}
                >
                    <Text  style={[styles.MycontestText,{ color: focused ? COLORS.
                                        white :"#f4f4f4",}]
                    }>COMPLETED</Text>
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


export default MyContest

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
