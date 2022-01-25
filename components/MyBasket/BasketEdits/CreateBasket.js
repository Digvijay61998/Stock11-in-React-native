import { StyleSheet, Text, View ,ScrollView ,SafeAreaView ,TouchableOpacity} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox} from "../../../constants"
import React from 'react';

const CreateBasket = ({ navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={[CardBox, {backgroundColor:COLORS.HeaderBackground ,elevation:10 , alignItems:"center" ,justifyContent: "center" , padding:15}]}>
      <Text style={[FONTS.textstyle,{fontSize:30}]}>Nifty50</Text>
      <View style={{ width:"100%",justifyContent:"space-between", flexDirection:"row"}}>
          <View style={{ fflexDirection:"column"}}>
          <Text style={[FONTS.textstyle,{fontSize:10}]}>Prize Pool  </Text>
          <Text style={[FONTS.textstyle,{fontSize:13}]}>4/10</Text>
          </View>
          <View style={{flexDirection:"column" ,alignItems:"flex-start"}}>
          <Text style={[FONTS.textstyle,{fontSize:10}]}>Credits Left</Text>
          <Text style={[FONTS.textstyle,{fontSize:13}]}>60.0</Text>
          </View>
      </View>
      <View style={{width:"100%",height:35, borderRadius:10 ,top:15,backgroundColor:COLORS.secondary}}>
      </View>
    </View>
  
<View style={styles.Teamcontainer}>
<View style={styles.EarnListTitle}>
<Text style={FONTS.textstyle}>Stocks</Text>
<Text style={FONTS.textstyle}>Credits</Text>
</View>
<ScrollView style={styles.scroller}>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>10.0</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>10.0</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>9.1</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>8.3</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>5.9</Text>
</View>

<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>5.0</Text>
</View><View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>5.0</Text>
</View>

<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>4.0</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>4.0</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>2.0</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>40</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>40</Text>
</View>
<View style={styles.EarnList}>
<Text  style={[FONTS.textstyle, {fontSize:14}]}>Cadila Healthcare Ltd.</Text>
<Text  style={[FONTS.textstyle, {fontSize:15}]}>40</Text>
</View>
</ScrollView>
</View>

<TouchableOpacity style={[FONTS.button , {width:300 ,marginTop:60 ,bottom:25}]}
           onPress={() =>
            navigation.navigate('TeamsView')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Contiue</Text>
       </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateBasket;

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
             justifyContent:"space-around" ,
            alignItems:"center" ,
            flexDirection:"row" ,
             borderWidth: 1,
            borderColor: "#575966",
             padding:10}
    
});
