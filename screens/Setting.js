import { StyleSheet,View, Text, TouchableOpacity, ScrollView,Button} from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData} from "../constants"

const Setting = () => {
  return (
    <View style={styles.container}>
        <View style={{width: '95%', height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>Help Desk</Text>
      </View>
      <View style={{width: '95%', height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>About us</Text>
      </View>
      <View style={{width: '95%', height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>How to Play</Text>
      </View>
      <View style={{width: '95%', height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>Promocode</Text>
      </View>
      <View style={{width: '95%', height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>Change Password</Text>
      </View>
      <View style={{width: '95%', height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>Refer a Friend</Text>
      </View>
      <View style={{width: '95%', height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>Logout</Text>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: "#1F1D2B",
        alignItems:"center",
        justifyContent:"center"
    },
});
