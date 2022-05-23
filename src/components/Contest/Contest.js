import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { COLORS,Header,Scale,verticalScale} from "../../constants"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LiveContest from './LiveContest/LiveContest'
import UpcomingContest from './upcomingContest/UpcomingContest'
import FollowingContest from './FollowingContest/FollowingContest'
const ContestStack = createMaterialTopTabNavigator();

const Contest = ({navigation ,data}) => {
    return (
        <View style={Header}>
             <View style={{
                      justifyContent:"space-evenly",
                      alignItems: "center",
                      flexDirection: "row",
                     flex: 1,
                }}>
   <ContestStack.Navigator
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
   
        <ContestStack.Screen
          name="LiveContest"
          navigation={navigation}
          component={LiveContest}
          color="#2F313E"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                      borderRadius:50,
                        height: 40,
                        width:Scale(105),
                        right:Scale(40),
                        bottom:verticalScale(10),
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? "#4caea7" : "#c4c4c4"
                    }}
                >
                       <Text  style={[styles.MycontestText,{ color: focused ? COLORS.
                                        white :"#f4f4f4",}]
                    }>LIVE</Text>
                </View>
                </View>
            )
        }}
        />
         <ContestStack.Screen
          name="UpcomingContest"
          component={UpcomingContest}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        // flex: 1,
                        borderRadius:50,
                        height: 40,
                        width:Scale(105),
                        right:Scale(40),
                        bottom:verticalScale(10),
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? "#4caea7" : "#c4c4c4"

                    }}
                >
                      <Text  style={[styles.MycontestText,{ color: focused ? COLORS.
                                        white :"#f4f4f4",}]
                    }>UPCOMING</Text>
                </View>
                </View>
            )
        }}
        />
        <ContestStack.Screen
          name="FollowingContest"
          component={FollowingContest}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        borderRadius:50,
                        height: 40,
                        width:Scale(105),
                        right:Scale(40),
                        bottom:verticalScale(10),
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: focused ? "#4caea7" : "#c4c4c4"
                    }}
                >
                    <Text  style={[styles.MycontestText,{ color: focused ? COLORS.
                                        white :"#f4f4f4",}]
                    }>FOLLOWING</Text>
                </View>
                </View>
            )
        }}
        />  
      </ContestStack.Navigator> 
      </View>
         </View>
         
    )
}

export default Contest

const styles = StyleSheet.create({
    MycontestText:{ 
      fontFamily:'Poppins',
      fontSize:16,
      fontWeight: 'bold',
    },
})
