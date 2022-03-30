import React, { useContext } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons, images } from '../../constants';


const MyProfile = ({navigation}) =>{

    return(
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
           width: 70,
           height: 70,
           marginTop:-100
 }}
  />
  <Text style={[FONTS.textstyle,{ marginBottom:30 ,width:100 ,height:20 ,textAlign:"center"}]}>MY PROFILE</Text>
            <View style={styles.ProfileBox}>
            <View>
            <View style={{justifyContent:"center",alignItems: "center"}}>
            <View style={{width:50, height:50, backgroundColor:COLORS.ActiveButton ,borderRadius:50 ,top:80,zIndex:1,alignItems: "center", justifyContent:"center"}}>
          <View style={{width:110, height:90, borderRadius:50 ,justifyContent:"center",alignItems: "center"}}>
          <Image
                  source={images.profile}
                    resizeMode="contain"
                      style={{
                            width:"100%",
                             height:"100%",
                              // tintColor: focused ? COLORS.
                              //     ActiveButton : COLORS.black
                                    }}/>

                  </View>
                      </View>
                      </View>
                      </View>
                    <View style={{justifyContent:"center",alignItem:"center",flexDirection:"column",top:120,position:"relative"}}>
                        <Text>Name : Dan O Pan</Text>
                        <Text>Email : dano@dino.com</Text>
                        <Text>Name : 2395988989</Text>
                    </View>
     <View style={{width: '100%', height:250 ,top:55, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={FONTS.button}   
       title='Submit'
       onPress={() =>
        navigation.navigate('EditProfile')
      } 
       >
        <Text style={{color:"white"}}>EDIT PROFILE</Text>
       </TouchableOpacity>
             </View>

             <View style={{width: '100%', height:250 ,top:-150, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={FONTS.button}   
       title='Submit'
       onPress={() =>
        navigation.navigate('ChangePassword')
      } 
       >
        <Text style={{color:"white"}}>CHANGE PASSWORD</Text>
       </TouchableOpacity>
             </View>

             </View>
        
      </LinearGradient>
    )}

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: "#1F1D2B",
            alignItems:"center",
            justifyContent:"space-evenly",
            flexDirection:"column",
    
        },
        ProfileBox:{
            height:350,
            width:"85%",
            backgroundColor:"#FEF2FF",
            borderRadius:10,
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

    export default MyProfile;