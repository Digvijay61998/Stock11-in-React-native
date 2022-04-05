import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons, images } from '../constants';

const EditProfile = ({navigation}) => {
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
           marginTop:-60
 }}
  />
  <Text style={[FONTS.textstyle,{top:-50,width:100 ,height:20 ,textAlign:"center",color:"white"}]}>MY PROFILE</Text>
            <View style={styles.ProfileBox}>
            <View>
            <View style={{justifyContent:"center",alignItems: "center"}}>
            <View style={{width:50, height:50 ,borderRadius:50 ,top:80,zIndex:1,alignItems: "center", justifyContent:"center"}}>
          <View style={{width:110, height:90, borderRadius:50 ,justifyContent:"center",alignItems: "center"}}>
          <Image
                  source={images.profile}
                    resizeMode="contain"
                      style={{
                            width:70,
                             height:70,
                             top:45
                              // tintColor: focused ? COLORS.
                              //     ActiveButton : COLORS.black
                                    }}/>

                  </View>
                      </View>
                      </View>
                      </View>
                    <View style={{justifyContent:"space-around",alignItem:"center",flexDirection:"column",top:150,position:"relative"}}>
                <TextInput
                style={[FONTS.textinput,{height:45,width:240,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10}]}
                name="Name"
                placeholder="Dan O Pan"
                placeholderTextColor="black" 
                 backgroundColor="white"
                autoComplete="cc-number"
                paddingLeft={20}
                />

                <TextInput
                style={[FONTS.textinput,{height:45,width:240,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10}]}
                name="email"
                placeholder="dano@dino.com"
                placeholderTextColor="black" 
                 backgroundColor="white"
                autoComplete="cc-number"
                paddingLeft={20}
                />

                <TextInput
                style={[FONTS.textinput,{height:45,width:240,borderRadius:15,borderColor:"#d3d3d3",borderWidth:1,marginTop:10,paddingLeft:10}]}
                name="phone"
                placeholder="9898989989"
                placeholderTextColor="black" 
                 backgroundColor="white"
                autoComplete="cc-number"
                paddingLeft={20}
                />
                       

                                          </View>
            <View style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",top:50}}>
     <View style={{width: '100%', height:250 ,top:50, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={[FONTS.button,{height:35,borderRadius:15,width:180}]} 
       title='Submit'
       onPress={() =>
        navigation.navigate('MyProfile')
      } 
       >
        <Text style={{color:"white",fontSize:14}}>SAVE PROFILE</Text>
       </TouchableOpacity>
             </View>

             <View style={{width: '100%', height:250 ,top:-150, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={[FONTS.button,{height:35,borderRadius:15,backgroundColor:"#11bab5",width:180}]}   
       title='Submit'
       onPress={() =>
        navigation.navigate('ChangePassword')
      } 
       >
        <Text style={{color:"white",fontSize:13}}>CHANGE PASSWORD</Text>
       </TouchableOpacity>
       </View>
             </View>

             </View>
      </LinearGradient>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#1F1D2B",
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"column",

    },
    ProfileBox:{
        height:400,
        top:-50,
        width:"85%",
        backgroundColor:"#f7edf0",
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        elevation:10,
          },
    formContainer:{
    //  marginTop:100
    width:"100%",
    height:300,
    marginTop:-50,
    backgroundColor:"#FEF2FF"
    },

    input: {
        height: 50,
        width:291,
        borderRadius:50,
        color:"#484848" ,
        backgroundColor:COLORS.white,
        elevation:1,
        margin:10,
        paddingLeft:20,
        bottom:20,
      },
})

export default EditProfile;