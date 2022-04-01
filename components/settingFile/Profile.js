import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TextInput,Image,Button} from 'react-native'
import { COLORS, FONTS, icons ,Header ,CardBox ,IdolContest ,dummyData,container,images} from "../../constants"
import React,{useState,useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { parsePhoneNumber } from 'react-phone-number-input'
import routes from '../../utils/routes';

const Profile = ({navigation}) => {

  const handleSubmit = async (val,onSubmitProps) => {
console.log("====",val)
    // API CALL COME HERE
    // const phoneNumber = parsePhoneNumber(val.phone_no)        // parsePhoneNumber FROM LINE MO. 9
    const data = {
      teamName : val.teamName,
      fullName : val.fullName,
      // phone_no : phoneNumber.nationalNumber,
      // country_code : getCountryCallingCode(countryInp),
      // userName : val.userName,
      // profile_image : fileUrl._id,
      email : val.email,
      // userId:localStorage.getItem('userId')
      userId:"123456789"

    }
    console.log("data",data);
    createUserProfile(data);
// onSubmitProps.resetForm();
  }

  async function createUserProfile(data) {
    // data.id = userProfile._id;
    console.log("createUserProfile",data)
    try {
      const parsedResponse = await routes.STOCK_11.APIS.CREATE_USER_PROFILE(data)
    } catch (error) {
      console.error("ERROR_FROM_API_CALL",error);
    }
  }

return (
      <Formik
        initialValues={{ 
          teamName: '',
          fullName: '', 
          email: '' ,
          phone_no: '',
        }}
        onSubmit={handleSubmit}
        // validationSchema={yup.object().shape({
        //   name: yup
        //     .string()
        //     .required('Please, provide your name!'),
        //   email: yup
        //     .string()
        //     .email()
        //     .required(),
        //   password: yup
        //     .string()
        //     .min(4)
        //     .max(10, 'Password should not excced 10 chars.')
        //     .required(),
        // })}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
           <View style={container}>
            <View style={{width: 370,height: 500 ,justifyContent:"center",alignItems: "center"}}>
            <View style={{width:100, height:100, backgroundColor:COLORS.ActiveButton ,borderRadius:50 ,top:10,zIndex:1,alignItems: "center", justifyContent:"center"}}>
          <View style={{width:150, height:90, borderRadius:50 ,justifyContent:"center",alignItems: "center"}}>
          <Image
                  source={images.profile}
                    resizeMode="contain"
                      style={{
                            width:"100%",
                             height:"100%",
                              // tintColor: focused ? COLORS.
                              //     ActiveButton : COLORS.black
                                    }}/>

                  </View>
                      </View>
           <View style={styles.formContainer}>
           <View style={{width:370,height:300,backgroundColor:COLORS.primary, borderRadius:10 ,justifyContent:"center",alignItems: "center"}}>
<TextInput
                style={[FONTS.textstyle,styles.input]}
                name="teamName"
                value={values.teamName}

                placeholder="TeamABC"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                onChangeText={handleChange('teamName')}
                />
                <TextInput
                style={[FONTS.textstyle,styles.input]}
                name="fullName"
                value={values.fullName}
                onChangeText={handleChange('fullName')}

                placeholder="User Full Name Team ABC"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                />
                <TextInput
                style={[FONTS.textstyle,styles.input]}
                name="email"
                value={values.email}

                placeholder="userabc@email.com"
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                paddingLeft={20}
                onChangeText={handleChange('email')}

                />
                <TextInput
                style={[FONTS.textstyle,styles.input]}
                name="phone_no"
                value={values.phone_no}

                placeholder="+91 112 XXX XXX "
                placeholderTextColor={COLORS.FaintWhite}
                autoComplete="cc-number"
                onChangeText={handleChange('phone_no')}

                paddingLeft={20}
                />
</View>

<View style={{width: '100%', height:250 ,top:100, alignItems: "center", justifyContent:"center"}}>
       <TouchableOpacity style={FONTS.button}   
       title='Submit'
       disabled={!isValid}
       onPress={handleSubmit}
          
       >
        <Text style={[FONTS.textstyle ,{color:"black"}]}>Upload</Text>
       </TouchableOpacity>

    </View>
          </View>
          </View>
          </View>
        )}
      </Formik>
    );
  }



export default Profile;

const styles = StyleSheet.create({
  input:{
    width: '90%',
    backgroundColor: COLORS.secondary,
    borderRadius:30,
    marginBottom:15,
  },
});
