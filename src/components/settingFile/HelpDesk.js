import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TextInput,Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest,dummyData,container} from "../../constants"
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'


const HelpDesk = () => {
  return (
    <LinearGradient 
    colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
      {/* <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 100,
           height: 100,
           top:-10
 }}/> */}

<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
     
      <View>
       <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 80,
           height: 80,
          
 }}
  />
  </View>
  </View>

<Text style={{top:60,color:"white",fontWeight:"bold",fontSize:15}}>Help Desk</Text>
    <View style={styles.container}>
      <View style={styles.helpDeskBox}>
      <View style={{marginTop:30}}
                  
               >
                <TextInput
                  style={[FONTS.textinput,{height:45,width:280,borderRadius:15,borderColor:"#d5deeb",borderWidth:1,marginTop:10,paddingLeft:10}]}
                  name="Name"
                  placeholder="Email"
                  placeholderTextColor="black" 
                   backgroundColor="white"
                  autoComplete="cc-number"
                  paddingLeft={20}

                  
                  />
                  </View>

                  <View 
                  style={{top:25 }}
               >
                <TextInput
                  style={[FONTS.textinput,{height:120,width:280,borderRadius:16,borderColor:"#d5deeb",borderWidth:1,marginTop:10,paddingLeft:10}]}
                  name="Name"
                  placeholder="Your Concern"
                  placeholderTextColor="black" 
                   backgroundColor="white"
                  autoComplete="cc-number"
                  paddingLeft={20}
                  paddingBottom={80}
                  
                  />
                  </View>
                  <View style={{width: '100%', height:250 ,top:-50, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={[FONTS.button,{borderRadius:14}]}   
       title='Submit'
       onPress={() =>
        navigation.navigate('ChangePassword')
      } 
       >
        <Text style={{color:"white"}}>SUBMIT</Text>
       </TouchableOpacity>
             </View>
        <View style={{borderTopWidth:0.5,borderColor:"#9ea4ad",width:300,bottom:130,justifyContent:"center",alignItems:"center"}}>
          <Text style={{marginTop:20}}> 32445989898 </Text>
          <Text> Message us on WhatsApp </Text>
          </View>        
        </View>



      </View>
  </LinearGradient>
  );
};

export default HelpDesk;

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:"center",
      justifyContent:"space-evenly",
      flexDirection:"column",

  },
 helpDeskBox :{
  height:450,
        width:350,
        backgroundColor:"#f7edf0",
        borderRadius:25,
        alignItems:"center",
        justifyContent:"flex-start",
        elevation:10,
        border:'1px solid #E8E4E4',
        boxShadow:"0px 20px 10px #00000014"
        },
        input: {
          height: 50,
          width:280,
          borderRadius:15,
          borderColor:"#c2c4c4",
          borderWidth:1,
          top:60,
          color:COLORS.ActiveButton ,
          backgroundColor:"white",
        alignItems:'center',
        justifyContent:"center",
        }
 
    
})