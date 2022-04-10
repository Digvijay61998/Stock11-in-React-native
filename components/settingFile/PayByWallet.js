import React from "react";
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container, SIZES, images} from "../../constants"
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList,Image} from 'react-native'
import { TextInput } from "react-native-gesture-handler";

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
           width: 90,
           height: 90,
          
 }}
  />
  </View>
  </View>
      <Text style={{fontWeight:"bold",color:"white",marginBottom:30}}>ADD BALANCE</Text>
         <View style={styles.addBalanceBox}>

      <View style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:270,bottom:250,flexDirection:"column"}}>
        <Text style={{color:"black",fontSize:16,paddingBottom:12}}>Available Balance</Text>
      <Text style={[FONTS.textstyle,{fontSize:35 ,color:COLORS.ActiveButton,}]}>20.00/-</Text>

      <View style={{display:"flex",flexDirection:"row",paddingTop:18,justifyContent:"space-evenly",width:350}}>
        
        <View >
<View style={[FONTS.textinput,{height:45,width:60,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10,justifyContent:"center",alignItem:"center",elevation:25,backgroundColor:"white"}]}>
<Text style={{color:"black"}}>500 </Text>

</View>

        </View>
        <View >
<View style={[FONTS.textinput,{height:45,width:60,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10,justifyContent:"center",alignItem:"center",elevation:25,backgroundColor:"white"}]}>
<Text style={{color:"black"}}>1000 </Text>

</View>

        </View>
        <View >
<View style={[FONTS.textinput,{height:45,width:60,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10,elevation:25,justifyContent:"center",alignItem:"center",backgroundColor:"white"}]}>
<Text style={{color:"black"}}>1500 </Text>

</View>

        </View>
        <View>
          <TextInput
          style={{outline:0,borderTopWidth:0,borderLeftWidth:0,borderRight:0,borderBottomWidth:1,width:45,borderColor:"black"}}
          keyboardType='numeric'
                    placeholderTextColor="#4771a5"
                    // paddingLeft={10}
                    autoComplete="cc-number"
                    maxLength={10}
                    paddingLeft={5}
          />

        </View>



        </View>
        <View style={{top:40}}> 
        <View style={{width:250,borderTopWidth:0.6,borderTopColor:"#7e7d80"}}>
      <View style={{display:"flex",alignItems:"center",flexDirection:"column",paddingTop:20}}>
        <TextInput 
        style={[FONTS.textinput,{height:50,width:120,borderRadius:18,borderColor:"#d3d3d3",borderWidth:1,marginTop:5,paddingLeft:10,fontWeight:"bold",backgroundColor:"white"}]}
        name="phone"
        keyboardType='numeric'

        placeholder="ENTER CODE"
        placeholderTextColor="#295597" 
         backgroundColor="#c2e6f2"
        autoComplete="cc-number"
        paddingLeft={20}/>
        <Text style={{paddingTop:13,fontSize:11,fontWeight:"200"}}>Great...Successfully credited Rs.100/-</Text>
        <View>
          <TouchableOpacity style={{width:120,height:40,borderRadius:23,borderColor:"#d3d3d3",borderWidth:1,marginTop:5,paddingLeft:10,backgroundColor:"#295597",alignItems:"center",justifuContent:"center",paddingTop:8,paddingRight:8}}
           title='Add'
           onPress={() =>
            navigation.navigate('SelectPayment')
          } >
            <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>ADD</Text>
            </TouchableOpacity>
        </View>
      </View>
</View>
        </View>
        
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
addBalanceBox:{
  elevation:10 ,
  width:SIZES.width-50,
  height:500,
  backgroundColor: "#fcf7fc",
  justifyContent:"center",
  alignItems: "center",
  padding:25,
  paddingTop:100,
  borderRadius:20
}

    
   
  });
  