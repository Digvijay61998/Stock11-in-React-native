import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,FlatList} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container} from "../../constants"
import React from 'react';

const BankDetails = () => {
  return (
    <View style={container}>
        <View style={{width:370,height:350,backgroundColor:COLORS.primary, borderRadius:10 ,justifyContent:"center",alignItems: "center"}}>
<TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="Enter Amount"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="Enter Bank Account Number"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="Re-Enter Bank Account Number"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="Enter INFC Code"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                    <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="Enter Account holder Name"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
</View>
<View style={{width: '100%', height:250,alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={[FONTS.button,{width:300}]}
           onPress={() =>
            navigation.navigate('Notification')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Proceed</Text>
       </TouchableOpacity>

    </View>
    </View>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
  input:{
    width: '90%',
    backgroundColor: COLORS.secondary,
    borderRadius:30,
    marginBottom:15,
  },
});
