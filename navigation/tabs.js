import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { createBottomTabNavigator, getHeaderTitle } from "@react-navigation/bottom-tabs"

import { Home, Setting } from "../screens"
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData} from "../constants"
import LoginScreen from "../screens/LoginScreen";
import FrontPage from "../screens/FrontPage";
import LinearGradient from 'react-native-linear-gradient'
import MyBasket from "../components/MyBasket/MyBasket";

// import { getHeaderTitle } from '@react-navigation/elements';

const Tab = createBottomTabNavigator()
const Tabs = () => {
    // header: ({ navigation, route, options }) => {
    //     const title = getHeaderTitle(options, route.name);
      
    return (
        // <LinearGradient
        // colors={['#93d5ce', '#11a99d','#5700AD','#7e72c5' ]}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 1, y: 1 }}
        // style={styles.container}
        // >
        <>
        <Tab.Navigator 
        tabBarOptions={{
            inactiveTintColor:"#4F1D9A",
            activeBackgroundColor:  "#4F1D9A",
            inactiveBackgroundColor: "#4F1D9A",
            tabBarStyle : {
                height: 250,
           },
            style: {
                // botton: 100,
                elevetion: 10,
                width:100,
                height:"30%",
            },
            showIcon: true, showLabel: false, indicatorStyle: {
                opacity: 0
            }
            
        }}
        >
         <Tab.Screen
         name="Home Screen"
         options={{
            headerShown: false}}
          component={FrontPage}  
        //   options={{title: 'Login Screen'}}
          /> 
            <Tab.Screen
                name="MyBasket"
                component={MyBasket}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ focused }) => (
                        <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                            <View
                               style={{
                                // flex: 1,
                                // borderTopLeftRadius:20,
                                // borderBottomLeftRadius:20,
                                // borderBottomRightRadius:focused ? 20 : 0,
                                // borderTopRightRadius:focused ? 20 : 0,
                                height: 50,
                                // width:100,
                                // left:35,
                                top:2,
                                bottom:10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                // backgroundColor: focused ? COLORS.
                                //     ActiveButton : COLORS.secondary
                            }}
                            >
                                <Image
                                    source={icons.Wallet}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        top:8
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
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                            <View
                               style={{
                                // flex: 1,
                                // borderTopLeftRadius:20,
                                // borderBottomLeftRadius:20,
                                // borderBottomRightRadius:focused ? 20 : 0,
                                // borderTopRightRadius:focused ? 20 : 0,
                                height: 50,
                                // width:125,
                                // left:35,
                                top:2,
                                bottom:10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                // backgroundColor: focused ? COLORS.
                                //     ActiveButton : COLORS.secondary
                            }}
                            >
                                <Image
                                    source={icons.home}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        top:8
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
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                            <View
                               style={{
                                // flex: 1,
                                // borderTopRightRadius:20,
                                // borderBottomRightRadius:20,
                                // borderBottomLeftRadius:focused ? 20 : 0,
                                // borderTopLeftRadius:focused ? 20 : 0,
                                height: 50,
                                // width:100,
                                // right:35,
                                top:2,
                                bottom:10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                // backgroundColor: focused ? COLORS.
                                //     ActiveButton : COLORS.secondary
                            }}
                            >
                                <Image
                                    source={icons.settings}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        top:8,
                                        // tintColor: focused ? COLORS.
                                        // primary : COLORS.
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
       </>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 0,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
})

export default Tabs;