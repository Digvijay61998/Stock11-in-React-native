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

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: "absolute",
                    botton: 100,
                    left: 20,
                    right: 20,
                    elevetion: 0,
                    backgroundColor: "#fffff",
                    borderRadius:50,
                    height: 90,
                }
            }}
        >
            <Tab.Screen
                name="home"
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
                                        zIndex: 1,
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
            <Tab.Screen
                name="Transation"
                component={Transaction}
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
                                    source={icons.settings}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        zindex: 1,
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