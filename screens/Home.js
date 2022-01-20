import React, { useState } from 'react';

import { StyleSheet,View, Text, TouchableOpacity, ScrollView,Button} from 'react-native';

import Contest from "../components/Contest.js"
import MyBasket from "../components/MyBasket.js"
import MyContest from "../components/MyContest.js"
import ViewContest from "../components/ViewContest.js"
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, FONTS, icons } from "../constants"

const TransactionStack = createStackNavigator();

const Home = ({ navigation }) => {

    return (
        
        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={styles.Mycontestmenu}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Contest")}
                >
                <View style={styles.ActiveMycontest}> 
                   <Text style={styles.MycontestText}>Contest</Text>
                   </View>
                   </TouchableOpacity>
                   <TouchableOpacity
                    onPress={() => navigation.navigate("MyBasket")}
                >
                   <View style={styles.ActiveMycontest}> 
                   <Text style={styles.MycontestText}>Contest</Text>
                   </View>
                   </TouchableOpacity>
                   <View style={styles.ActiveMycontest}> 
                   <Text style={styles.MycontestText}>Contest</Text>
                   </View>
                </View>
                <View style={{
                      position: "relative",
                      justifyContent:"space-around",
                      flexDirection: "row",
                      backgroundColor: "#2F313E",
                     flex: 1,
                     
                }}>
                <TransactionStack.Navigator
        screenOptions={{
          headerShown: false,
    
        }}
        initialRouteName={'Contest'}
      
      >  
        <TransactionStack.Screen
          name="Contest"
          component={Contest}
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
         <TransactionStack.Screen
          name="MyContest"
          component={MyContest}
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
        <TransactionStack.Screen
          name="Transaction"
          component={MyBasket}
        />  
      </TransactionStack.Navigator>
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
        overflow: 'hidden',
        width: 380,
        height: 630,
        borderRadius: 15,
        backgroundColor: "#2F313E"
    },
    scroller: {
        flex: 1,
      
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
        backgroundColor: "#252837",
    },
    ActiveMycontest:{
        flex: 1,
       width: 120,
       borderTopRightRadius: 15,
       borderTopLeftRadius: 15,
        backgroundColor: "#0BFEBC", 
        margin:2,
    },
    InactiveMycontest:{
        flex: 1,
       width: 120,
       borderTopRightRadius: 15,
       borderTopLeftRadius: 15,
        backgroundColor: "#252837", 
        margin:2,
    },
    MycontestText:{ 
    top:18 ,
    left:24,
    color:"black",
    fontFamily: 'Poppins',
    fontSize:15,
    fontWeight: 'bold',
}

})

export default Home;