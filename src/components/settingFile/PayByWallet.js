import React, { useState } from "react";
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container, SIZES} from "../../constants"
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList,Image, AsyncStorage} from 'react-native'

const PayByWallet = ({navigation}) => {
    return (
      <LinearGradient
      colors={['#93d5ce', '#11a99d','#5700AD','#7e72c5' ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={{flexDirection:"row",justifyContent:"space-between",top:-50,alignItems:"center"}}>
      <View>
       <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 70,
           height: 70,
          
 }}
  />
  </View>
  </View>
      <Text style={{fontWeight:"bold",color:"white",marginBottom:30}}>ADD BALANCE</Text>
         <View style={{elevation:10 ,width:SIZES.width-50,minHeight:SIZES.height-300,backgroundColor: COLORS.lightPink,justifyContent:"center",alignItems: "center",padding:25,paddingTop:100,borderRadius:20}}>
         <Text>Available balance </Text>
         <View style={styles.moneyBoxDIv}>
         <Text style={styles.money}>500</Text>
         <Text style={styles.money}>1000</Text>
         <Text style={styles.money}>2000</Text> 
         </View>
            </View>
      </LinearGradient>
    );
  };
  
  export default PayByWallet;
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
  },
  paymentCard:{width:300,height:120,
    backgroundColor:"white",
    borderColor:"grey",
    borderRadius:15,
    elevation:10,
    top:30
},
radiobutton:{
  height: 25,
  width: 25,
  backgroundColor:" black",
  borderRadius: "50%",
  borderColor:"black",
},
moneyBoxDIv:{
justifyContent:"space-around",
alignContent:"center",
flexDirection:"row",
width:"100%"

},
money:{
backgroundColor:"white",
width:100,
textAlignVertical:"center",
textAlign:"center"
}

  });
  