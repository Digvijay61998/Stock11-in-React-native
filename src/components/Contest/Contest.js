import React , { useState ,useEffect} from 'react'
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,dummyData,SIZES} from "../../constants"
import {IdolContest} from "../../Common"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LiveContest from './LiveContest/LiveContest'
import UpcomingContest from './upcomingContest/UpcomingContest'
import FollowingContest from './FollowingContest/FollowingContest'
import { store } from '../../../store';
import { Provider } from 'react-redux';
const ContestStack = createMaterialTopTabNavigator();

const Contest = ({navigation}) => {

    const price =dummyData.ContestPricePool
  console.log("price", price);


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
                        width:SIZES.width-280,
                        right:45,
                        bottom:10,
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
                        width:SIZES.width-280,
                        right:45,
                        bottom:10,
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
                        width:SIZES.width-280,
                        right:45,
                        bottom:10,
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

           {/* <ScrollView style={styles.scroller}>
          //      <FlatList 
          //       data = {price}
          //       keyExtractor={(item) => item.id}
          //       renderItem={({item ,index})=>(
          //           <TouchableOpacity
          //           onPress={() =>
          //             navigation.navigate('ViewContest')
          //           }
          //         >
          //         <View style={[styles.contestContainer,{ backgroundColor: colors[index % colors.length] }]}>
          //           <IdolContest data={item} />
          //           </View>
          //         </TouchableOpacity>
          //       )}
          //       keyExtractor={(item, index) => index}
          //      />

          //     </ScrollView>  */}
         </View>
         
    )
}

export default Contest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:COLORS.secondary,
    },
    Mycontestmenu:{
      position: "relative",
      justifyContent:"space-around",
      flexDirection: "row",
      width: 380,
      height: 60,
      backgroundColor: COLORS.HeaderBackground,
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
    MycontestText:{ 
      fontFamily:'Poppins',
      fontSize:16,
      fontWeight: 'bold',
    },

    scroller: {
        flex: 1,
      overflow:"hidden",
    },
})
