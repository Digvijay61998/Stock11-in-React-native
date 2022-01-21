import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest} from "../../constants"
import {LiveEvents, UpcomingEvents, CompletedEvents} from "./UpcomingLiveEvents"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const MyContestStack = createMaterialTopTabNavigator();

const MyContest = ({ navigation }) => {
    return (
      <View style={Header}>
                <View style={{
                      position: "relative",
                      justifyContent:"space-around",
                      flexDirection: "row",
                     flex: 1,
                     
                }}>
                 <MyContestStack.Navigator
         MyContestStackOptions={{
            style: {
                position: "relative",
                // botton: 100,
                elevetion: 0,
                backgroundColor: COLORS.HeaderBackground,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                height: 20,
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
                      
                        height: 70,
                        width:125,
                        right:50,
                        bottom:10,
                        color:"black",
                        backgroundColor: focused ? COLORS.
                        primary : COLORS.black
                    }}
                >
                    <Text style={styles.MycontestText}>Upcoming</Text>
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
                        height: 70,
                        width:125,
                        right:50,
                        bottom:10,
                        color:"black",
                        backgroundColor: focused ? COLORS.
                        primary : COLORS.black
                    }}
                >
                    <Text style={styles.MycontestText}>MyContest</Text>
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
                        // flex: 1,
                        borderRadius:50,
                      
                        height: 70,
                        width:125,
                        right:50,
                        bottom:10,
                        color:"black",
                        backgroundColor: focused ? COLORS.
                        primary : COLORS.black
                    }}
                >
                    <Text style={styles.MycontestText}>UpcomingEvents</Text>
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
    IdolConte: {
      height: 180,
      width: 360,
      backgroundColor: COLORS.HeaderBackground,
      margin: "4%",
      borderRadius: 10,
      padding: 5,
  },
  TimeDate: {
      width: 350,
      height: 30,
      backgroundColor: COLORS.HeaderBackground,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5
  },
  IdolContainer: {
      position: "relative",
      width: 350,
      height: 140,
  },
  textstyle: {
      fontFamily: 'Poppins',
      color: "white",
      fontSize:16,
      fontWeight: 'bold',
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
  top:18 ,
  left:24,
  color:"white",
  fontFamily: 'Poppins',
  fontSize:15,
  fontWeight: 'bold',
}
})
