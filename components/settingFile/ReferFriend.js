import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container,images} from "../../constants"
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-gesture-handler';


const ReferFriend = ({navigation}) => {
  return (
//     <View style={container}>

// <View style={{width:370 ,height:100 ,backgroundColor:COLORS.primary,borderRadius:10,elevation:10,alignItems: "center", justifyContent:"center"}}>
//   <Text style={[FONTS.textstyle,{marginBottom:10,color:COLORS.FaintWhite}]}> Share and Invite contact</Text>
// <View style={{width:350 ,height:50 ,backgroundColor:COLORS.HeaderBackground,borderRadius:10,alignItems: "center", justifyContent:"center"}}>
// <Text style={FONTS.textstyle}>SYOCK11200</Text>
// </View>
// </View>

//    </View>

<LinearGradient 
    colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
    <View style={{flexDirection:"row",justifyContent:"space-between",top:-20,alignItems:"center"}}>
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
           width: 100,
           height: 100,
          
 }}
  />
      </View>
      </View>
      <View style={{top:-50}}>
  <Text style={{top:50,color:"white",fontWeight:"bold",fontSize:20}}>Refer & Earn</Text>

  </View>
    <View style={styles.referFreindBox}>
<View style={{width:270 ,height:250}}>
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
<View style={{width:270 ,alignItems:"center", justifyContent:"center"}}>
<Text style={{color:"black"}}>Invite a friend ern BIG Lorem Ipsim Dolor sit amet, consectetur adipiscing elit.nulla</Text>
</View>
<View  style={styles.input}>
<TextInput
                style={[FONTS.textstyle,{color:"#295597",width:"100%",textAlign:"center"}]}
                name="Email"
                title="Email"
                placeholderTextColor="black"
                paddingRight={90}

                  
                  />

</View>
<View style={{ height:100 ,top:40,alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={[FONTS.button,{width:180,borderRadius:15}]}
          
       >
        <Text style={[FONTS.textstyle ,{color:"white"}]}>Share & Earn</Text>
       </TouchableOpacity>

    </View>
    </View>
  </LinearGradient>
  );
};

export default ReferFriend;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-evenly",
    flexDirection:"column",

},
referFreindBox :{
  height:500,
        width:340,
        backgroundColor:"#ededed",
        borderRadius:10,
        alignItems:"center",
        marginBottom:70,
        justifyContent:"center",
        elevation:10,
        border:'1px solid #E8E4E4',
        boxShadow:"0px 20px 10px #00000014"
        },
        input: {
          height: 50,
          width:180,
          borderRadius:15,
          top:30,
          color:COLORS.ActiveButton ,
          backgroundColor:"white",
          elevation:1,
        alignItems:'center',
        justifyContent:"center",
        }

});
