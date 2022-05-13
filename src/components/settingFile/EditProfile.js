import React, { useState ,useCallback,useEffect} from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert ,SafeAreaView ,TouchableOpacity,Image,AsyncStorage} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons} from '../../constants';
import * as ImagePicker from 'react-native-image-picker';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";

import { ImagePickerModal } from './imagePicker/image-picker-modal';
import { ImagePickerAvatar } from './imagePicker/image-picker-avatar';
import routes from '../../../utils/routes';

const EditProfile = ({navigation}) =>{
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
console.log("uri",uri);
// submit data to POST API=====

  const handleSubmit = async (val) => {
    console.log("====")
    console.log("====", val.Name)
    const userId = await AsyncStorage.getItem('userId');
    // API CALL COME HERE
    // const phoneNumber = parsePhoneNumber(val.phone_no)        // parsePhoneNumber FROM LINE MO. 9
    const data = {
      fullName: val.Name,
      email: val.email,
      phone_no: val.phone_no,
      userId: userId
    }
    console.log("data", data);
    createUserProfile(data);
    createProfilePhoto(uri)
  }


  //  VALIDATION SCHEMA=====
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
  const validationSchema = yup.object().shape({
    Name: yup
      .string()
      .required("This field is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    phone_no: yup
      .string()
      .matches(phoneRegex, "Invalid phone")
      .required("Phone is required")
  })

// POST API CALLED ======
  async function createUserProfile(data) {
    // data.id = userProfile._id;
    console.log("createUserProfile", data)
    try {
      const parsedResponse = await routes.STOCK_11.APIS.CREATE_USER_PROFILE(data)
      console.log("createUserProfile=======>", parsedResponse)
      if (parsedResponse) {
        navigation.navigate('MyProfile')
      }
    } catch (error) {
      console.error("ERROR_FROM_API_CALL", error);
    }
  }

  async function createProfilePhoto(uri) {
    console.log("forgotUserProfile=======>",uri);
    try {
        const parsedResponse = await routes.STOCK_11.APIS.CREATE_PROFILE_PHOTO(uri);
        console.log("parsedResponse=====",parsedResponse)
        // if(parsedResponse){
        //   await AsyncStorage.setItem('userId' ,parsedResponse.twoFAuthForm.userId);
        //  let userKey = String(parsedResponse.userDTO.userKey)
        //  console.log("userKey~~~~~~~>",userKey);
        //   await AsyncStorage.setItem('userKey' ,userKey);
        //   navigation.navigate('OtpVerification',{Data:parsedResponse ,ForgotPassword:props.route.params});
        // }
    } catch (error) {
        console.error(error);
    }
  }
    return(
        <LinearGradient 
        colors={['#93d5ce', '#11a99d','#5700AD','#6256ac' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
                <Image 
       source={icons.Stock11Logo}
       resizeMode="contain"
       style={{
           width: 70,
           height: 70,
           marginTop:-40
 }}
  />
  <Text style={[FONTS.textstyle,{ marginBottom:30 ,width:100 ,height:20 ,textAlign:"center",color:"white"}]}>MY PROFILE</Text>
            <View style={styles.ProfileBox}>
                      <Formik
          initialValues={{
            Name: '',
            email: '',
            phone_no: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}

        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: 100, height: 100, backgroundColor: COLORS.ActiveButton, borderRadius: 50, top: -130, zIndex: 1, alignItems: "center", justifyContent: "center" }}>
                  <View style={{ width: 150, height: 90, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                  <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
                  </View>
                </View>
                <View style={styles.formContainer}>
                  <View style={{ width: "100%", height: 100, marginTop: 100, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                  <><TextInput
                      style={[FONTS.textstyle, styles.input]}
                      name="Name"
                      value={values.Name}
                      placeholder="Name"
                      placeholderTextColor="#484848"
                      autoComplete="cc-number"
                      paddingLeft={20}
                      onChangeText={handleChange('Name')}
                    />
                      <Text class="error" style={styles.error}>
                        {errors.Name}
                      </Text>
                    </>
                   <><TextInput
                      style={[FONTS.textstyle, styles.input]}
                      name="email"
                      value={values.email}
                      onChangeText={handleChange('email')}

                      placeholder="Example@fabzentech.com"
                      placeholderTextColor="#484848"
                      autoComplete="cc-number"
                      paddingLeft={20}
                    />
                      <Text class="error" style={styles.error}>
                        {errors.email}
                      </Text>
                    </>
                    <>
                    <TextInput
                      style={[FONTS.textstyle, styles.input]}
                      name="phone_no"
                      value={values.phone_no}
                      placeholder="Mob: 91 112 XXX XXX "
                      placeholderTextColor="#c5c5c5"
                      autoComplete="cc-number"
                      maxLength={10}
                      onChangeText={handleChange('phone_no')}
                      paddingLeft={20}
                    />
                       <Text class="error" style={styles.error}>
                        {errors.Name}
                      </Text>
                      </>
                  </View>
                 <View style={{ width: '100%', height: 80, top: 60, alignItems: "center", justifyContent: "space-between",flexDirection:"column" }}>
                    <TouchableOpacity style={[FONTS.button, { width: 180, backgroundColor: "#46a19a" }]}
                      title='Submit'
                      disabled={!isValid}
                      onPress={() =>
                        handleSubmit()
                      }
                    >
                      <Text style={{ color: "white" }}>SAVE PROFILE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[FONTS.button, { width: 180, backgroundColor: "#46a19a" }]}
                         title='Submit'
                         onPress={() =>
                           navigation.navigate('ChangePassword')
                         }
                      >
                        <Text style={{ color: "white" }}>CHANGE PASSWORD </Text>
                      </TouchableOpacity>

                  </View>
                </View>
              </View>
            </View>
          )}
        </Formik>
             </View>
        
      </LinearGradient>
    )}

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: "#1F1D2B",
            alignItems:"center",
            justifyContent:"space-evenly",
            flexDirection:"column",
    
        },
        ProfileBox: {
          height: 500,
          width: "95%",
          backgroundColor: "#FEF2FF",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          elevation: 10,
        },
        formContainer: {
          //  marginTop:100
          width: "100%",
          height: 300,
          marginTop: -50,
          backgroundColor: COLORS.lightPink
        },
      
        input: {
          height: 50,
          width: 291,
          borderRadius: 50,
          color: "#484848",
          backgroundColor: COLORS.white,
          elevation: 1,
          margin: 10,
          paddingLeft: 20,
          bottom: 20,
        },
        error: {
          color: "red",
          bottom: 30,
          fontSize: 10,
          left: 60
        }
      
      })

    export default EditProfile;