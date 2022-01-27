import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container} from "../../constants"
import React from 'react';

const Wallet = () => {
  return (
    <View style={container}>
       <View style={[CardBox,{elevation:10 ,backgroundColor: COLORS.primary,justifyContent:"center",alignItems: "center"}]}>
      <Text style={FONTS.textstyle}>Total Balance</Text>
      <Text style={[FONTS.textstyle,{fontSize:30 ,color:COLORS.ActiveButton}]}>Rs.10</Text>
    </View>
    <View style={{width: '100%', height:250 ,top:80, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={[FONTS.button,{width:300 , marginBottom:20,}]}
           onPress={() =>
            navigation.navigate('Notification')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Add Balance</Text>
       </TouchableOpacity>
       <TouchableOpacity style={[FONTS.button,{width:300}]}
           onPress={() =>
            navigation.navigate('Notification')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Withdraw Balance</Text>
       </TouchableOpacity>

    </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  input:{
    width: '90%',
    backgroundColor: COLORS.secondary,
    borderRadius:30,
    marginBottom:15,
  },
});
