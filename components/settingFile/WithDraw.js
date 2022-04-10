import React from "react";
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList,Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, icons, SIZES } from "../../constants";


const WithDraw = ({navigation}) => {
    return(
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
         top:SIZES.width-500
        
}}/>
    <Text style={{fontWeight:"bold",color:"white",marginBottom:30}}>WALLET</Text>

       <View style={styles.addBalanceBox}>
    <View>
    <TouchableOpacity style={{paddingBottom:9}}
          onPress={() =>
            navigation.navigate('BankTransfer')
          }
      >
        <View style={{width:270, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:13 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Bank Transfer</Text>
      </View>
      
      </TouchableOpacity>
      <TouchableOpacity style={{paddingBottom:9}}
        //   onPress={() =>
        //     navigation.navigate('MyProfile')
        //   }
      >
        <View style={{width:270, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:10 ,marginBottom:15,elevation:13 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>UPI</Text>
      </View>
      
      </TouchableOpacity>
    </View>
       </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
  },
  
  addBalanceBox:{
    elevation:10 ,
    width:SIZES.width-50,
    height:400,
    backgroundColor: "#fcf7fc",
    alignItems: "center",
    justifyContent: "center",
    padding:25,
    borderRadius:20
  }
  });
  

export default WithDraw;