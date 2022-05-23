import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS,Header,Scale,verticalScale} from "../../constants"
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
                padding:Scale(10),
                height: Scale(70),
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
                      height: Scale(40),
                      width:Scale(110),
                      right:Scale(45),
                      bottom:verticalScale(10),
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
                        height: Scale(40),
                        width:Scale(110),
                        right:Scale(45),
                        bottom:verticalScale(10),
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
                        height: Scale(40),
                        width:Scale(110),
                        right:Scale(45),
                        bottom:verticalScale(10),
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
  MycontestText:{ 
  fontFamily:'Poppins',
  fontSize:15,
  fontWeight: 'bold',
}
})
