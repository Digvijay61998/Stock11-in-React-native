import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TextInput,Image} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container,images} from "../../constants"
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View style={container}>
   <View style={{width: 370,height: 500 ,justifyContent:"center",alignItems: "center"}}>
     <View style={{width:100, height:100, backgroundColor:COLORS.ActiveButton ,borderRadius:50 ,top:10,zIndex:1,alignItems: "center", justifyContent:"center"}}>
<View style={{width:90, height:90, borderRadius:50 ,justifyContent:"center",alignItems: "center"}}>
<Image
                                    source={images.bitcoin}
                                    resizeMode="contain"
                                    style={{
                                      width:"100%",
                                      height:"100%",
                                        // tintColor: focused ? COLORS.
                                        //     ActiveButton : COLORS.black
                                    }}/>

</View>
     </View>
<View style={{width:370,height:300,backgroundColor:COLORS.primary, borderRadius:10 ,justifyContent:"center",alignItems: "center"}}>
<TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="TeamABC"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="User Full Name Team ABC"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="userabc@email.com"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                <TextInput
                style={[FONTS.textstyle,styles.input]}
                // value={number}
                placeholder="+91 112 XXX XXX "
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
</View>
<View style={{width: '100%', height:250 ,top:100, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={FONTS.button}
           onPress={() =>
            navigation.navigate('Notification')
          }
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Upload</Text>
       </TouchableOpacity>

    </View>
   </View>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  input:{
    width: '90%',
    backgroundColor: COLORS.secondary,
    borderRadius:30,
    marginBottom:15,
  },
});
