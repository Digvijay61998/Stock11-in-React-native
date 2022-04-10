import { StyleSheet,View, Text, TouchableOpacity, ScrollView,Button,Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, icons, images } from '../../constants';


const SelectPayment = ({ navigation}) => {
  return (
    <LinearGradient 
    colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
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
           width: 90,
           height: 90,
          
 }}
  />
  </View>
  </View> 

  <Text style={{fontWeight:"bold",color:"white",marginBottom:30}}>SELECT PAYMENT</Text>

    
      <View style={styles.SelectPaymentContainer}>
      <View style={{paddingRight:180,paddingTop:30}}>
      <Text style={{color:"black"}}>Recommended</Text>
        </View> 
        <View style={{paddingTop:25,width:"100%",justifyContent:"center",alignItems:"center"}}>
          <View >
<TouchableOpacity
          onPress={() =>
            navigation.navigate('Wallet')
          }
      >
        <View style={{width:290, height:42 ,backgroundColor:COLORS.primary  ,justifyContent: 'center',border:'1px  #696969' ,borderRadius:13 ,marginBottom:30,elevation:13 }}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Pay Using Wallets</Text>
      </View>
      </TouchableOpacity>
      <View style={{borderTopWidth:0.7,borderColor:"#b0acb0",width:300}}>

      <View style={{paddingTop:20,paddingBottom:10}}>
        <Text style={{color:"black"}}>Other payment Methods</Text>
      </View>
          
      <TouchableOpacity style={{paddingTop:20}}
          onPress={() =>
            navigation.navigate('AddCard')
          }
      >
       
      <View style={{width:290, height:42 ,backgroundColor:COLORS.primary ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:30,elevation:10}}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Debit/Credit Cards</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity 
        //   onPress={() =>
        //     navigation.navigate('ReferFriend')
        //   }
      >
      <View style={{width:290, height:42 ,backgroundColor:COLORS.primary ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:30,elevation:10}}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Google Pay</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity 
        //   onPress={() =>
        //     navigation.navigate('HowToPlay')
        //   }
      >

<View style={{width:290, height:42 ,backgroundColor:COLORS.primary , justifyContent: 'center' ,borderRadius:10 ,marginBottom:30,elevation:10}}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Pay Via UPI</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity 
        //   onPress={() =>
        //     navigation.navigate('PromoCode')
        //   }
      >

      <View style={{width:290, height:42 ,backgroundColor:COLORS.primary ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:30,elevation:10}}>
      <Text style={{color:"black",width:"80%",paddingLeft:10}}>Net Banking</Text>
      </View>
      </TouchableOpacity>
      
    </View>
    </View>
    </View>

      
    </View>
    </LinearGradient>
  );
};

export default SelectPayment;

const styles = StyleSheet.create({

    container:{
        flex:1,
        
        backgroundColor: "#ededed",
        alignItems:"center",
        justifyContent:"center"
    },
    SelectPaymentContainer:{
      minHeight:450,width:350,backgroundColor:"#fcf7fc",borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        elevation:15,
        border:'1px solid #E8E4E4',
        boxShadow:"0px 20px 10px #00000014",
        marginBottom:25
    },
    
});
