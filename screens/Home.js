import React, { useState } from 'react';

import { StyleSheet,View, Text, TouchableOpacity, ScrollView,Button} from 'react-native';

import Contest from "../components/Contest.js"
import MyBasket from "../components/MyBasket.js"
import MyContest from "../components/MyContest/MyContest.js"
import ViewContest from "../components/ViewContest.js"
import { COLORS, FONTS, icons ,Header} from "../constants"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();
const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={Header}>
                <View style={{
                      position: "relative",
                      justifyContent:"space-around",
                      flexDirection: "row",
                     flex: 1,
                     
                }}>
                 <Tab.Navigator
         tabBarOptions={{
            style: {
                position: "relative",
                // botton: 100,
                elevetion: 0,
                backgroundColor: COLORS.HeaderBackground,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                height: 50,
            },
            showIcon: true, showLabel: false, indicatorStyle: {
                opacity: 0
            }
            
        }}

        initialRouteName={'Contest'}
      
      >  
        <Tab.Screen
        
          name="Contest"
          navigation={navigation}
          component={Contest}
          color="#2F313E"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        // flex: 1,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        height: 70,
                        width:125,
                        right:50,
                        bottom:10,
                        backgroundColor: focused ? COLORS.
                            ActiveButton : COLORS.black
                    }}
                >
                    <Text style={styles.MycontestText}>Contest</Text>
                </View>
                </View>
            )
        }}
      
        />
         <Tab.Screen
          name="MyContest"
          component={MyContest}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        // flex: 1,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        height: 70,
                        width:125,
                        right:50,
                        bottom:10,
                        color:"black",
                        backgroundColor: focused ? COLORS.
                            ActiveButton : COLORS.black
                    }}
                >
                    <Text style={styles.MycontestText}>MyContest</Text>
                </View>
                </View>
            )
        }}
        />
        <Tab.Screen
          name="MyBasket"
          component={MyBasket}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View styles={{ alignment: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        // flex: 1,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        height: 70,
                        width:125,
                        right:50,
                        bottom:10,
                        backgroundColor: focused ? COLORS.
                            ActiveButton : COLORS.black
                    }}
                >
                    <Text style={styles.MycontestText}>MyBasket</Text>
                </View>
                </View>
            )
        }}
        />  
      </Tab.Navigator> 
                 </View>
                   
               
                
       
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
        elevation: 10

    },
    shadow: {
        shadowColor: COLORS.HeaderBackground,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
 
    scroller: {
        flex: 1,
      
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

export default Home;