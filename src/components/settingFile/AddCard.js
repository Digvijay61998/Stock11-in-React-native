import React from "react";
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet,View, Text, TouchableOpacity, ScrollView,Button,Image} from 'react-native';
import { FONTS, icons } from "../../constants";
import { TextInput } from "react-native-gesture-handler";


const AddCard = ({navigation}) => {
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
    <View style={{padding:20}}>
        <Text style={{color:"black"}}>Add New Card</Text>
    </View>
    <View style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <TextInput
                style={[FONTS.textinput,{elevation:15,height:50,width:280,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10}]}
                name="Card Number"
                keyboardType="number-pad"
                placeholder="CARD NUMBER"
                placeholderTextColor="#b0acb0" 
                 backgroundColor="white"
                autoComplete="cc-number"
                paddingLeft={20}
                />
        <View style={{flexDirection:"row",justifyContent:"space-evenly",width:"100%",paddingTop:13}}>
        <TextInput
                style={[FONTS.textinput,{elevation:15,height:50,width:80,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10}]}
                name="Card Number"
                keyboardType="number-pad"
                placeholder="MM/YY"
                placeholderTextColor="#b0acb0" 
                 backgroundColor="white"
                autoComplete="cc-number"
                paddingLeft={20}
                />
        <TextInput
                style={[FONTS.textinput,{elevation:15,height:50,width:80,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10}]}
                name="Card Number"
                keyboardType="number-pad"
                placeholder="CVV"
                placeholderTextColor="#b0acb0" 
                 backgroundColor="white"
                autoComplete="cc-number"
                paddingLeft={20}
                />
        </View>
        <View style={{paddingTop:30,}}>
        <View style={{borderTopWidth:0.7,width:300,alignItems:"center"}}>
        <View style={{paddingTop:100}}>
        <TouchableOpacity style={{width:120,height:40,borderRadius:23,borderColor:"#d3d3d3",borderWidth:1,marginTop:5,paddingLeft:10,backgroundColor:"#295597",alignItems:"center",justifuContent:"center",paddingTop:8,paddingRight:8}}
           title='Add'
           onPress={() =>
            navigation.navigate('MyContest')
          } >
            <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>PAY</Text>
            </TouchableOpacity>
        </View>
          
        </View>
        </View>
   
    </View>
        </View>
      </LinearGradient>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor: "#ededed",
        alignItems:"center",
        justifyContent:"center"
    },
    SelectPaymentContainer:{
        minHeight:450,width:350,backgroundColor:"#fcf7fc",borderRadius:25,
          elevation:15,
          border:'1px solid #E8E4E4',
          boxShadow:"0px 20px 10px #00000014",
          marginBottom:25
      }
})

export default AddCard;