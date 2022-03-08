import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import React from 'react';
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container } from '../../../constants';

const ChangePassword = ({ navigation}) => {
  return (
    <View style={[container,{justifyContent:"flex-start"}]}>
          <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="Old Password"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                      <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="New Password"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                      <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="Confirm New Password"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                <View style={{width: '100%', height:250 ,top:300, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={FONTS.button}
           onPress={() =>
            navigation.navigate('Profile')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Upload</Text>
       </TouchableOpacity>

    </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  input:{
    width: '90%',
    backgroundColor: COLORS.primary,
    marginTop:20,
    borderRadius:10,
  },
});
