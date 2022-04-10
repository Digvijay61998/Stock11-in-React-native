import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container,images, SIZES} from "../../constants"
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-gesture-handler';


const ReferFriend = ({navigation}) => {
  return (
    <LinearGradient 
        colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
         <Image 
       source={icons.Stock11Logo}

       resizeMode="contain"
       style={{
           width: 80,
           height: 80,
           top:15
 }}
  />
  <Text style={[FONTS.textstyle,{top:50,width:100 ,height:20 ,textAlign:"center",color:"white"}]}>MY STOCK11</Text>

         <View style={styles.ProfileBox}>
<View style={{width:"100%" ,height:280,justifyContent:"flex-start",alignItems:"flex-start",paddingTop:20}}>
<Image
                                    source={images.referFreind}
                                    resizeMode="contain"
                                    style={{
                                      width:"100%",
                                      height:"100%",
                                        // tintColor: focused ? COLORS.
                                        //     ActiveButton : COLORS.black
                                    }}/>
</View>
<View style={{width:270 ,paddingTop:40 }}>
<Text style={{color:"black"}}>Invite a friend ern BIG Lorem Ipsim Dolor sit amet, consectetur adipiscing elit.nulla</Text>
</View>
{/* <View style={{width:370 ,height:100 ,backgroundColor:COLORS.primary,borderRadius:10,elevation:10,alignItems: "center", justifyContent:"center"}}>
  <Text style={[FONTS.textstyle,{marginBottom:10,color:COLORS.FaintWhite}]}> Share and Invite contact</Text>
<View style={{width:350 ,height:50 ,backgroundColor:COLORS.HeaderBackground,borderRadius:10,alignItems: "center", justifyContent:"center"}}>
<Text style={FONTS.textstyle}>SYOCK11200</Text>
</View>
</View> */}

    <View style={{width:"100%",display:'flex',flexDirection:"row",paddingTop:20,justifyContent:"space-around"}}>
    <View >
        <View style={{display:"flex",flexDirection:"column",alignItems:"center",}}>
        <TextInput
         style={[FONTS.textinput,{height:40,width:120,borderRadius:11,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10}]}
         name="phone"
         placeholder="9898989989"
         placeholderTextColor="black" 
          backgroundColor="#c2e6f2"
         autoComplete="cc-number"
         paddingLeft={20}
         paddingTop={8}
        />
        </View>
       <View style={{width:130, height:100 ,alignItems: "center", justifyContent:"center",paddingBottom:40,borderRadius:20}}>
       <TouchableOpacity style={[FONTS.button,{width:130,height:20,borderRadius:15}]}
           onPress={() =>
            navigation.navigate('Notification')
          }
       >
        <Text style={{color:"white",fontSize:9}}>SHARE & EARN</Text>
       </TouchableOpacity>

       </View>

       </View>
       <View style={{borderLeftColor:"#c2c4c4",height:140,borderLeftWidth:1,paddingRight:20}}>
       <View style={{right:-25}}>
        <View style={{display:"flex",flexDirection:"column",alignItems:"center",}}>
        <TextInput
         style={[FONTS.textinput,{height:40,width:120,borderRadius:11,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,}]}
         name="phone"
         placeholder="9898989989"
         placeholderTextColor="black" 
          backgroundColor="#c2e6f2"
         autoComplete="cc-number"
         paddingLeft={20}
         paddingTop={8}
        />
        </View>
       <View style={{width:130, height:100 ,alignItems: "center", justifyContent:"center",paddingBottom:40,borderRadius:20}}>
       <TouchableOpacity style={[FONTS.button,{width:130,height:20,borderRadius:15}]}
           onPress={() =>
            navigation.navigate('Notification')
          }
       >
        <Text style={{color:"white",fontSize:9}}>REFER A FREIND</Text>
       </TouchableOpacity>

       </View>
       </View>

         </View>
         </View>
         </View>
      </LinearGradient>
   
  );
};

export default ReferFriend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

},
ProfileBox:{
  height:520,
  top:70,
  width:SIZES.width-50,
  backgroundColor:"#f7edf0",
  borderRadius:35,
  alignItems:"center",
  justifyContent:"flex-start",
  elevation:10,
  display:"flex",
  marginBottom:180

    },
});
