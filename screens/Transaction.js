
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import MyBasket from '../components/MyBasket/MyBasket';
import Contest from '../components/Contest';
import MyContest from '../components/MyContest/MyContest.js';
import { COLORS, FONTS, icons } from "../constants/index"

const TransactionStack = createStackNavigator();

const Transaction = () => {

//  useEffect(() =>{
//   setTimeout(() => {
//     SplashScreen.hide();
// }, 1000);
//  },[]);

  return (
       <TransactionStack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'MyContest'}
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
  )
}

export default Transaction;