import { StyleSheet, Text, View,TouchableOpacity,Image, AsyncStorage} from 'react-native'
import { COLORS, FONTS, icons,CardBox,Scale,verticalScale} from "../../constants"
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import routes from '../../../utils/routes';

const Wallet = ({navigation}) => {
  const[balance ,getBalance]=useState()

  const getWalletDetails = async () => {
    const userKey = await AsyncStorage.getItem('userKey');
    try {
      const parsedResponse = await routes.STOCK_11.APIS.GET_WALLET_BALANCE(`${userKey}`);
      console.log("parsedResponse=====>>>>>>>>",parsedResponse)
      getBalance(parsedResponse.balanceAmount)
    } catch (error) {
      console.log("FAIL=====")
      console.error(error);
    }
  }

  useEffect(() => {
    getWalletDetails();
  }, [])
  return (
    <LinearGradient
    colors={['#93d5ce', '#11a99d','#5700AD','#7e72c5' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
           <Image 
     source={icons.Stock11Logo}
     resizeMode="contain"
     style={{
         width: 70,
         height:70,
         top:Scale(-40)
        
}}/>
    <Text style={{fontWeight:"bold",color:"white",marginBottom:verticalScale(30)}}>WALLET</Text>
       <View style={[CardBox,{elevation:10 ,width:Scale(320),height:Scale(400),backgroundColor: "#fef9ff",justifyContent:"center",alignItems: "center",padding:Scale(25),paddingTop:verticalScale(100),borderRadius:20}]}>
      <Text style={FONTS.textstyle}>Available Balance</Text>
      <Text style={[FONTS.textstyle,{fontSize:30,top:verticalScale(20),color:COLORS.ActiveButton}]}>{balance}/-</Text>
      <View style={{width:Scale(300), height:Scale(300) ,top:verticalScale(80), alignItems: "center", justifyContent:"center" ,borderTopWidth:1 ,borderColor:"#ebe7ec"}}>
       <TouchableOpacity style={[FONTS.button,{width:Scale(150) , bottom:verticalScale(60)}]}
           onPress={() =>
            navigation.navigate('PayByWallet')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"white",fontSize:14}]}>ADD BALANCE</Text>
       </TouchableOpacity>
       <TouchableOpacity style={[FONTS.button,{backgroundColor:"#4caea7",bottom:Scale(30)}]}
           onPress={() =>
            navigation.navigate('WithDraw')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"white",fontSize:14}]}>WITHDRAW</Text>
       </TouchableOpacity>

    </View>
    </View>

    </LinearGradient>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
},
});
