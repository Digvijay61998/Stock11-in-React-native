import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import { Home, Transaction } from "../screens"
import { COLORS, FONTS, icons } from "../constants"
import LoginScreen from "../screens/LoginScreen";
import OtpVerification from "../screens/OtpVerification";
import CompleteProfile from "../screens/CompleteProfile";


const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator 
        tabBarOptions={{
            style: {
                // botton: 100,
                elevetion: 0,
                height:40,
                backgroundColor:"red",
                width:100
       
            },
            showIcon: true, showLabel: false, indicatorStyle: {
                opacity: 0
            }
            
        }}
        >

         <Tab.Screen
         name="Login"
          component={LoginScreen}  
          options={{title: 'Login Screen'}}/> 

        {/* <Tab.Screen
                name="OtpVerification"
                component={OtpVerification} 
                options={{title: 'Phone Verfication'}}/>

        <Tab.Screen
                name="CompleteProfile"
                component={CompleteProfile} 
                // options={{title: 'Complete Profile'}}/> */} 
   
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: focused ? COLORS.
                                        ActiveButton : COLORS.black
                                }}
                            >
                                <Image
                                    source={icons.home}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        // tintColor: focused ? COLORS.
                                        //     ActiveButton : COLORS.black
                                    }}
                                />
                                <Text styles={{
                                    color: focused ? COLORS.
                                        primary : COLORS.ActiveButton, ...FONTS.body5
                                }}>
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Transation"
                component={Transaction}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                            <View
                               style={{
                                // flex: 1,
                              borderRadius:50,
                                height: 50,
                                width:125,
                                right:50,
                                top:2,
                                bottom:10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: focused ? COLORS.
                                    ActiveButton : COLORS.secondary
                            }}
                            >
                                <Image
                                    source={icons.settings}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        tintColor: focused ? COLORS.
                                            ActiveButton : COLORS.black
                                    }}
                                />
                                <Text styles={{
                                    color: focused ? COLORS.
                                        primary : COLORS.ActiveButton, ...FONTS.body5
                                }}>
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
})

export default Tabs;