import React, { useContext, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert, SafeAreaView, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { COLORS, FONTS, icons, SIZES, container, images } from "../src/constants"
import { Formik, Form, Field, ErrorMessage } from "formik";
import LinearGradient from 'react-native-linear-gradient'
import routes from '../utils/routes';
import * as yup from 'yup';

function CompleteProfile(props) {
  const navigation = props.navigation
  const [navigationData] = useState(props.route.params.data)


  const handleSubmit = async (val) => {
    const userId = await AsyncStorage.getItem('userId');
    console.log("====", val.Name)
    // API CALL COME HERE
    // const phoneNumber = parsePhoneNumber(val.phone_no)        // parsePhoneNumber FROM LINE MO. 9
    const data = {
      Name: val.Name,
      email: val.email,
      create_password: val.create_password,
      confirm_password: val.conform_password,
      userId: userId
    }
    console.log("data", data);
    createUserProfile(data);
  }

  // POST api called
  async function createUserProfile(data) {
    // data.id = userProfile._id;
    console.log("createUserProfile", data)
    try {
      const parsedResponse = await routes.STOCK_11.APIS.CREATE_USER_PROFILE(data)
      console.log("createUserProfile=======>", parsedResponse)
      if (parsedResponse) {
        navigation.navigate('Tabs')
      }
    } catch (error) {
      console.error("ERROR_FROM_API_CALL", error);
    }
  }
  //  VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    Name: yup
      .string()
      .required("This field is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    create_password: yup
      .string()
      .required("This field is required"),
    confirm_password: yup.string().when("create_password", {
      is: val => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("create_password")],
        "Both password need to be the same"
      )
    })
  })
  return (
    <LinearGradient
      colors={['#93d5ce', '#11a99d', '#5700AD', '#6256ac']}
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
          marginTop: -30
        }}
      />
      <Text style={[FONTS.textstyle, { marginBottom: 30, width: 100, height: 20, textAlign: "center", color: "white" }]}>MY PROFILE</Text>
      <View style={styles.ProfileBox}>
        <Formik
          initialValues={{
            Name: '',
            email: '',
            create_password: '',
            confirm_password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}

        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: 100, height: 100, backgroundColor: COLORS.ActiveButton, borderRadius: 50, top: -130, zIndex: 1, alignItems: "center", justifyContent: "center" }}>
                  <View style={{ width: 150, height: 90, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                  <TouchableOpacity
      >

                    {/* <Image
                      source={icons.Profile}
                      resizeMode="contain"
                      style={{
                        width: "100%",
                        height: "100%",
                        // tintColor: focused ? COLORS.
                        //     ActiveButton : COLORS.black
                      }} /> */}
      </TouchableOpacity>

                  </View>
                </View>
                <View style={styles.formContainer}>
                  <View style={{ width: "100%", height: 100, marginTop: 100, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>

                    {navigationData === "forgotPassword" ? <></> : <><TextInput
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
                    }
                    {navigationData === "forgotPassword" ? <></> : <><TextInput
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
                    }
                    <TextInput
                      style={[FONTS.textstyle, styles.input]}
                      name="create_password"
                      value={values.create_password}

                      placeholder="Create password"
                      placeholderTextColor="#484848"
                      autoComplete="cc-number"
                      paddingLeft={20}
                      onChangeText={handleChange('create_password')}

                    />
                    <Text class="error" style={styles.error}>
                      {errors.create_password}
                    </Text>
                    <TextInput
                      style={[FONTS.textstyle, styles.input]}
                      name="confirm_password"
                      value={values.confirm_password}

                      placeholder="Confirm password"
                      placeholderTextColor="#484848"
                      autoComplete="cc-number"
                      paddingLeft={20}
                      onChangeText={handleChange('confirm_password')}

                    />
                    <Text class="error" style={styles.error}>
                      {errors.confirm_password}
                    </Text>
                    {navigationData === "forgotPassword" ? <></> : <TextInput
                      style={[FONTS.textstyle, styles.input, { top: -35 }]}
                      name="phone_no"
                      value={values.phone_no}
                      placeholder="Mob: 91 112 XXX XXX "
                      placeholderTextColor="#c5c5c5"
                      autoComplete="cc-number"
                      onChangeText={handleChange('phone_no')}
                      paddingLeft={20}
                    />}
                  </View>
                  {navigationData === "forgotPassword" ? <View style={{ width: '100%', height: 250, top: -50, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity style={[FONTS.button, { width: 180, backgroundColor: "#46a19a" }]}
                      title='Submit'
                      disabled={!isValid}
                      onPress={() =>
                        handleSubmit()
                        // navigation.navigate('Tabs')
                      }
                    >
                      <Text style={{ color: "white" }}>CHANGE PASSWORD</Text>
                    </TouchableOpacity>

                  </View>
                    : <View style={{ width: '100%', height: 250, top: 10, alignItems: "center", justifyContent: "center" }}>
                      <TouchableOpacity style={FONTS.button}
                        title='Submit'
                        disabled={!isValid}
                        onPress={() =>
                          handleSubmit()
                        }
                      >
                        <Text style={{ color: "white" }}>SAVE PROFILE</Text>
                      </TouchableOpacity>

                    </View>}
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>

    </LinearGradient>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",

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
export default CompleteProfile;