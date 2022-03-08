import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import React from 'react';
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container } from '../../../constants';

const HelpDesk = () => {
  return (
    <View style={container}>
           <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="Enter Email ID"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
<View style={styles.textAreaContainer} >
  <TextInput
    style={styles.textArea}
    underlineColorAndroid="transparent"
    placeholder="Description"
    placeholderTextColor={COLORS.FaintWhite}
    color="white"
    numberOfLines={10}
    multiline={true}
  />
</View>
<View style={{width: '100%', height:250 ,top:200, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={FONTS.button}
          //  onPress={() =>
          //   navigation.navigate('CreateBasket')
          // }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Send</Text>
       </TouchableOpacity>

    </View>
    </View>
  );
};

export default HelpDesk;

const styles = StyleSheet.create({
  input:{
    width: '90%',
    backgroundColor: COLORS.primary,
    borderRadius:10,
  },
  textAreaContainer: {
    borderColor: COLORS.grey20,
    borderWidth: 1,
    padding: 5,
    width: '90%',
    backgroundColor: COLORS.primary,
    borderRadius:10,
    marginTop:15,
    overflow: 'hidden',
  },
  textArea: {
    height: 150,
    // bottom:50
  }
});
