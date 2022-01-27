import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container} from "../../constants"
import React from 'react';

const Notification = () => {
  return ( 
    <View style={[container,{justifyContent:"flex-start"}]}>
      <View style={styles.noticeBox}>
        <View style={styles.timeDiv}><Text style={[FONTS.textstyle,{fontSize:10,color:COLORS.FaintWhite}]}>1 Hr Ago</Text></View>
      <Text style={[FONTS.textstyle,{fontSize:13}]}>You have secured the 1st rank, and your winning amount xxx Rd have been added in wallet.</Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  noticeBox:{
    width:370,
    height: 100,
    backgroundColor: COLORS.primary ,
    marginTop:20 ,
    justifyContent:"center",
    alignItems: "center",
    padding:10,
    borderRadius:10
  },
  timeDiv:{
    width:370 ,
    height: 15, 
    justifyContent:"center",
    alignItems:"flex-end",
    marginBottom:10,
    paddingRight:20
  }
});
