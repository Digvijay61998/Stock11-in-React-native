import React, { useState } from 'react';

import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';

import Contest from "../components/Contest.js"
import MyBasket from "../components/MyBasket.js"
import MyContest from "../components/MyContest.js"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const Tab = createBottomTabNavigator()

const data = [
    {
        "component": "FavoritesScreenContainer",
        "icon": "heart",
        "name": "favorites",
        "navigation": ["root", "tabs"],
        "order": 1
    },
    {
        "component": "LoginScreenContainer",
        "defaultRoot": true,
        "icon": "key",
        "name": "login",
        "navigation": ["root"]
    },
]
const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.Header}>

                <View style={styles.IdolConte}>
                    <View style={styles.IdolContainer}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <Text style={{ color: "white" }}>Idol Contest</Text>
                            <Text style={{ color: "white" }}>Entry</Text>
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", padding: "2%" }}>
                            <View style={{ justifyContent: "space-between", flexDirection: "column" }}>
                                <Text style={{ color: "white" , fontSize:10}}>prize pool</Text>
                                <Text style={{ color: "white" }}>Rs. 10,000</Text>
                            </View>
                            <Text style={{ color: "white" }}>5 Winners</Text>
                            <Text style={{ color: "black", backgroundColor: "#0BFEBC", padding:6 ,borderRadius:10}}>Rs. 1,000</Text>
                        </View>
                        <View style={{ width:150 ,height:5 , backgroundColor: "#0BFEBC" ,left:100 , top:30 , borderRadius: 10}}>
                        <View style={{ position:"absolute",width:100 ,height:5, backgroundColor: "red" ,left:100 , top:30 ,}}></View>

                        </View>
                    </View>
                    <View style={styles.TimeDate}>
                        <Text style={{ color: "white" }}>st Oct 2021 to 3rd oct 2021</Text>
                    </View>
                </View>
                {/* <Tab.Navigator>
      <Tab.Screen name="Contest" component={Contest} />
      <Tab.Screen name="MyBasket" component={MyBasket} />
      <Tab.Screen name="MyContest" component={MyContest} />

    </Tab.Navigator> */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("CryptoDetail")}
                >
                    <Text>Navigate to CryptoDetail</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1F1D2B",

    },
    shadow: {
        shadowColor: "#252837",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    Header: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        width: 380,
        height: 630,
        borderRadius: 10,
        backgroundColor: "#2F313E"
    },
    IdolConte: {
        height: 180,
        width: 360,
        backgroundColor: "#1F1D2B",
        margin: "4%",
        borderRadius: 10,
        padding: 5,
    },
    TimeDate: {
        width: 350,
        height: 30,
        backgroundColor: "#252837",
        alignItems: "center",
        justifyContent: "center",
    },
    IdolContainer: {
        position: "relative",
        width: 350,
        height: 140,
    },
})

export default Home;