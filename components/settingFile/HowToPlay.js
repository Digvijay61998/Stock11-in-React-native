import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container} from "../../constants"
import React from 'react';

const HowToPlay = () => {
  return (
    <View style={container}>
     <View style={styles.input}>
       <Text style={FONTS.textstyle}>Introduction</Text>
       <View style={styles.openMenu}></View>
     </View>
     <View style={styles.input}>
       <Text style={FONTS.textstyle}>Select a contest</Text>
       <View style={styles.openMenu}></View>

     </View>
     <View style={styles.input}>
       <Text style={FONTS.textstyle}>Create a portfolio</Text>
       <View style={styles.openMenu}></View>
     </View>
     <View style={styles.input}>
       <Text style={FONTS.textstyle}>Join a Contest</Text>
       <View style={styles.openMenu}></View>
     </View>
     <View style={styles.input}>
       <Text style={FONTS.textstyle}>Follow the match</Text>
       <View style={styles.openMenu}></View>
     </View>
     <View style={styles.input}>
       <Text style={FONTS.textstyle}>Withdraw your winning</Text>
       <View style={styles.openMenu}></View>
     </View>
    </View>
  );
};

export default HowToPlay;

const styles = StyleSheet.create({
  input:{
    width: '90%',
    backgroundColor: COLORS.primary,
    borderRadius:10,
    height: 50,
    margin:10,paddingLeft:15,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",
    overflow:"hidden"
  },

  openMenu:{
    width:50 , 
    backgroundColor:COLORS.ActiveButton,
    height:50}
});
