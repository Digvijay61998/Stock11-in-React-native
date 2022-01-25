import { StyleSheet, Text, View , SafeAreaView, ScrollView,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, icons, Header, CardBox, IdolContest } from "../../../../constants"


const EarnedPoints = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
<View style={styles.Teamcontainer}>
<View style={styles.EarnListTitle}>
<Text style={FONTS.textstyle}>Stocks</Text>
<Text style={FONTS.textstyle}>Points</Text>
</View>
<ScrollView style={styles.scroller}>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15 ,marginRight:30}]}>10.0</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>10.0</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>9.1</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>8.3</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>5.9</Text>
</View>

<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>5.0</Text>
</View><View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>5.0</Text>
</View>

<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>4.0</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>4.0</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>2.0</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>40</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>40</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15,marginRight:30}]}>40</Text>
</View>
</ScrollView>
</View>

<View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={[FONTS.button, { width: 160, marginTop: 60, bottom: 25, marginRight: 20 }]}
                    // onPress={() =>
                    //     navigation.navigate('')
                    // }
                >
                    <Text style={[FONTS.textstyle, { color:COLORS.primary  }]}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[FONTS.button, { width: 160, marginTop: 60, bottom: 25 }]}
                    // onPress={() =>
                    //     navigation.navigate('')
                    // }
                >
                    <Text style={[FONTS.textstyle, { color:COLORS.primary }]}>Continue</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
};

export default EarnedPoints;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#1F1D2B",
    alignItems:"center",
    justifyContent:"center"
},
scroller: {
  flex: 1,
  overflow:"hidden",
  borderWidth: 1,
  borderColor:COLORS.FaintWhite,
  borderBottomLeftRadius:10,
borderBottomRightRadius:10,
},
Teamcontainer:{
    flex:1,
    backgroundColor:COLORS.secondary,
  },
  EarnListTitle:{justifyContent:"space-around", 
  alignItems:"center" ,
  flexDirection:"row",
   width:360, 
   height:50 , 
   backgroundColor:COLORS.HeaderBackground,
    borderTopRightRadius:10,
   borderTopLeftRadius:10

  },
 EarnList:{
         justifyContent:"space-between",
        alignItems:"center" ,
        flexDirection:"row" ,
         borderWidth: 1,
        borderColor: "#575966",
         padding:10}

});
