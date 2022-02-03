import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container,images} from "../../constants"
import React from 'react';

const ReferFriend = ({navigation}) => {
  return (
    <View style={container}>
<View style={{width:370 ,height:350 ,backgroundColor:COLORS.primary,borderRadius:10 ,marginBottom:20 ,elevation:10, alignItems: "center" , justifyContent: "center"}}>
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
<Text style={FONTS.textstyle}>Invite a friend ern BIG Lorem Ipsim Dolor sit amet, consectetur adipiscing elit.nulla</Text>
</View>
</View>
<View style={{width:370 ,height:100 ,backgroundColor:COLORS.primary,borderRadius:10,elevation:10,alignItems: "center", justifyContent:"center"}}>
  <Text style={[FONTS.textstyle,{marginBottom:10,color:COLORS.FaintWhite}]}> Share and Invite contact</Text>
<View style={{width:350 ,height:50 ,backgroundColor:COLORS.HeaderBackground,borderRadius:10,alignItems: "center", justifyContent:"center"}}>
<Text style={FONTS.textstyle}>SYOCK11200</Text>
</View>
</View>
<View style={{width: '100%', height:100 ,top:50,alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={[FONTS.button,{width:300}]}
           onPress={() =>
            navigation.navigate('Notification')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Share</Text>
       </TouchableOpacity>

    </View>
   </View>
  );
};

export default ReferFriend;

const styles = StyleSheet.create({

});
