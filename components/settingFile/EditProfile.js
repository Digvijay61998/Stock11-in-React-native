import React, { useContext } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons, images } from '../../constants';


const EditProfile = ({navigation}) =>{

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
            <View style={{width:50, height:50, backgroundColor:COLORS.ActiveButton ,borderRadius:50 ,top:150,zIndex:1,alignItems: "center", justifyContent:"center"}}>
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
                      <View style={{flexDirection:"column",display:"flex",justifyContent:"space-evenly",height:200,top:40}}>
                      <View style={styles.input}>
                      <TextInput
                  style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center"}]}
                  name="Email"
                  title="Email"
                  placeholder="Name"
                  placeholderTextColor="black"
                  paddingRight={180}


                  
                  />
                      </View>
                      <View style={styles.input}>
                      <TextInput
                  style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center"}]}
                  name="Email"
                  title="Email"
                  placeholder="Email"
                  placeholderTextColor="black"
                  paddingRight={180}


                  
                  />
                  
                      </View>
                      <View style={styles.input}>
                      <TextInput
                  style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center"}]}
                  name="phone"
                  title="phone"
                  placeholder="Phone"
                  placeholderTextColor="black"
                  paddingRight={180}


                  
                  />
                      </View>
                      
                      </View> 
                  
     <View style={{width: '100%', height:250 ,top:55, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={FONTS.button}   
       title='Submit'
       onPress={() =>
        navigation.navigate('EditProfile')
      } 
       >
        <Text style={{color:"white"}}>SAVE PROFILE</Text>
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
            width:280,
            borderRadius:15,
            top:120,
            color:COLORS.ActiveButton ,
            backgroundColor:"white",
            elevation:1,
          alignItems:'center',
          justifyContent:"center",
          }
    })

    export default EditProfile;