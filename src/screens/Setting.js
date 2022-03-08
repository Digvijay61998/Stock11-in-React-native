import { StyleSheet,View, Text, TouchableOpacity, ScrollView,Button} from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData} from "../../constants"

const Setting = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
          onPress={() =>
            navigation.navigate('HelpDesk')
          }
      >
        <View style={{width:370, height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>Help Desk</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() =>
            navigation.navigate('AboutUs')
          }
      >
      <View style={{width: 370, height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>About us</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() =>
            navigation.navigate('HowToPlay')
          }
      >
      <View style={{width: 370, height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>How to Play</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() =>
            navigation.navigate('PromoCode')
          }
      >
      <View style={{width: 370, height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>Promocode</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() =>
            navigation.navigate('ChangePassword')
          }
      >
      <View style={{width: 370, height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>Change Password</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() =>
            navigation.navigate('ReferFriend')
          }
      >
      <View style={{width: 370, height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>Refer a Friend</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() =>
            navigation.navigate('Logout')
          }
      >
      <View style={{width: 370, height:60 ,backgroundColor:COLORS.primary ,alignItems: 'center' ,justifyContent: 'center' ,borderRadius:10 ,marginBottom:15}}>
      <Text style={FONTS.textstyle}>Logout</Text>
      </View>
      </TouchableOpacity>
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
