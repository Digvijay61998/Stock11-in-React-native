import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TextInput,Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest,images ,dummyData,container} from "../../constants"
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

<View style={{flexDirection:"row",justifyContent:"space-between",top:4,alignItems:"center"}}>
      <View >
      <Image
                  source={images.profile}
                    resizeMode="contain"
                      style={{
                            width:50,
                             height:50,

                                    }}/>
      </View>
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

<Text style={{top:50,color:"white",fontWeight:"bold",fontSize:15}}>Help Desk</Text>
    <View style={styles.container}>
      <View style={styles.helpDeskBox}>
      <View 
                  style={styles.input}
               >
                <TextInput
                  style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center"}]}
                  name="Email"
                  title="Email"
                  placeholder="Email"
                  placeholderTextColor="black"
                  paddingRight={180}


                  
                  />
                  </View>

                  <View 
                  style={{ height: 130,
                    width:280,
                    borderRadius:15,
                    top:80,
                    color:COLORS.ActiveButton ,
                    backgroundColor:"white",
                    elevation:1,
                  alignItems:'center',
                  justifyContent:"center",}}
               >
                <TextInput
                  style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center"}]}
                  title="Your Concern"
                  placeholder="Your Concern"
                  placeholderTextColor="black"
                  paddingRight={170}
                  marginBottom={60}


                  
                  />
                  </View>
                  <View style={{width: '100%', height:250 ,top:-15, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={FONTS.button}   
       title='Submit'
       onPress={() =>
        navigation.navigate('ChangePassword')
      } 
       >
        <Text style={{color:"white"}}>SUBMIT</Text>
       </TouchableOpacity>
             </View>
        <View style={{borderTopWidth:0.3,bottom:110,justifyContent:"center",alignItems:"center"}}>
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
  height:400,
        width:350,
        backgroundColor:"#ededed",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        elevation:10,
        border:'1px solid #E8E4E4',
        boxShadow:"0px 20px 10px #00000014"
        },
        input: {
          height: 50,
          width:280,
          borderRadius:15,
          top:60,
          color:COLORS.ActiveButton ,
          backgroundColor:"white",
          elevation:1,
        alignItems:'center',
        justifyContent:"center",
        }
 
    
})