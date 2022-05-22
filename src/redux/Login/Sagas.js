import { put, takeLatest, call } from "redux-saga/effects";
import { Alert } from "react-native";
import {
  LOGIN_ACCOUNT,
  ENTER_OTP_ACCOUNT,
  RECOVER_PASSWORD_ACCOUNT,
  CREATE_PROFILE_ACCOUNT,
} from "../ActionTypes";
import * as LoginActions from "./Actions";
import Snackbar from "react-native-snackbar";
// import { navigate, replace, reset } from "../../Common/rnnavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import routes from "../../../utils/routes";

function* loginAccount(action) {
  console.log("saga login account==", action);
  try {
    const response = yield call(routes.STOCK_11.APIS.CREATE_USER_LOGIN ,action.payload.data);
    // console.log("Response========", response);
    const result = routes.handleLoginResponse(response);
    // console.log("Result Response==", JSON.stringify(result));
        yield put(LoginActions.loginAccountSuccess(result.data));
        // navigation.navigate('Tabs');
    if (result) {
      if (result) {
        yield put(LoginActions.loginAccountSuccess(result.data));
        try {
          yield AsyncStorage.setItem("userToken",result.data.token);
          yield AsyncStorage.setItem("userId",result.data.userDTO.userId);
          yield AsyncStorage.setItem("userKey",String(result.data.userDTO.userKey));
        } catch (error) {
          console.log("error: ", error);
        }
        if (result.success === true) {
          Snackbar.show({
            text: "User Login Succesfully",
            duration: 3000,
          });
          // yield call(reset, "Tabs");
        } 
        else if (result.data.status === "A") {
          Snackbar.show({
            text: "Please Complete Your Profile",
            duration: 3000,
          });
          // yield call(reset, "StoreInformastion");
          Alert.alert(
            "Success",
            "Your Account has been registered into our Stock11 Database and our executives will review and activate your account within 24 to 48 hours"
          );
          Snackbar.show({
            text: 'User Login Succesfully',
            duration: 3000,
          });
        } else {
          console.log("resgister from another number");
          // yield call(reset, "StackScreenSeller");
        }
        console.log("@@@ Login Account Api=======", result.success);
      } 
      else yield put(LoginActions.loginAccountError(result));
    } 
    else {
      yield put(LoginActions.loginAccountError("Some Error"));
    }
  } catch (error) {
    console.log("saga login account error===", error);
    // let errorMsg = JSON.parse(error.request._response).message;
    // let errorStatus = JSON.parse(error.request._response).success;
    // if (errorStatus === false) {
    //   yield put(LoginActions.loginAccountError(error));
    //   Snackbar.show({
    //     text: errorMsg,
    //     duration: 3000,
    //   });
    // }
    console.log("Saga Responce Error");
  }
}



// function* enterOtpAccount(action) {
//   console.log("saga enterOtpAccount==", action.payload.data);
//   try {
//     const response = yield call(
//       API.post,
//       "auth/verifyEmail",
//       action.payload.data
//     );
//     console.log("Recover Email Response==", response);
//     const result = API.handleLoginResponse(response);
//     console.log("Recover Response==", result);
//     if (result) {
//       if (result) {
//         yield put(LoginActions.enterOtpSuccess(result.data));
//         if (result.success === true) {
//           Snackbar.show({
//             text: "Otp Verified Successfully",
//             duration: 3000,
//             // fontFamily: 'Metropolis',
//           });
//           yield call(navigate, "ChangePassword");
//         }
//         console.log("@@@ Recover Email Api=======", result.success);
//       } else yield put(LoginActions.enterOtpError(result));
//     } else {
//       yield put(LoginActions.enterOtpError("Some Error"));
//     }
//   } catch (error) {
//     let errorMsg = JSON.parse(error.request._response).message;
//     let errorStatus = JSON.parse(error.request._response).success;
//     if (errorStatus === false) {
//       yield put(LoginActions.enterOtpError(error));
//       Snackbar.show({
//         text: errorMsg,
//         duration: 3000,
//         // fontFamily: 'Metropolis',
//       });
//     }
//     console.log("Saga Responce Error");
//   }
// }

// function* recoverPasswordAccount(action) {
//   console.log("saga recoverPasswordAccount==", action.payload.data);
//   try {
//     const response = yield call(
//       API.post,
//       "auth/resetPassword",
//       action.payload.data
//     );
//     console.log("Recover Password Response==", response);
//     const result = API.handleLoginResponse(response);
//     console.log("Recover Response==", result);
//     if (result) {
//       yield put(LoginActions.recoverPasswordSuccess(result.data));
//       if (result.data.success === true) {
//         Snackbar.show({
//           text: result.data.message,
//           duration: 3000,
//           // fontFamily: 'Metropolis',
//         });
//         yield call(navigate, "UserLogin");
//         console.log("@@@ Recover Password Api=======", result.success);
//       } else yield put(LoginActions.recoverPasswordError(result));
//     } else {
//       yield put(LoginActions.recoverPasswordError("Some Error"));
//     }
//   } catch (error) {
//     let errorMsg = JSON.parse(error.request._response).message;
//     let errorStatus = JSON.parse(error.request._response).success;
//     if (errorStatus === false) {
//       yield put(LoginActions.recoverPasswordError(error));
//       Snackbar.show({
//         text: errorMsg,
//         duration: 3000,
//         // fontFamily: 'Metropolis',
//       });
//     }
//     console.log("Saga Responce Error");
//   }
// }

// function* createProfileAccount(action) {
//   console.log("saga createProfileAccount==", action.payload);
//   try {
//     const response = yield call(
//       API.post,
//       `auth/submitAccountDetails/${action.payload.userEmail}`,
//       action.payload.formData
//     );
//     console.log("Create Profile Response==", response);
//     const result = API.handleLoginResponse(response);
//     console.log("Create Profile Response==", result);
//     if (result) {
//       yield put(LoginActions.createProfileSuccess(result.data));
//       if (result.data.success === true) {
//         // Snackbar.show({
//         //   text: result.data.message,
//         //   duration: 3000,
//         //   // fontFamily: 'Metropolis',
//         // });
//         alert(
//           "Your Account has been registered into our Sheideo Database and our executives will review and activate your account in within 24 to 48 hours"
//         );
//         yield call(navigate, "UserLogin");
//         console.log("@@@ Create Profile Api=======", result.success);
//       } else yield put(LoginActions.createProfileError(result));
//     } else {
//       yield put(LoginActions.createProfileError("Some Error"));
//     }
//   } catch (error) {
//     let errorMsg = JSON.parse(error.request._response).message;
//     let errorStatus = JSON.parse(error.request._response).success;
//     if (errorStatus === false) {
//       yield put(LoginActions.recoverPasswordError(error));
//       Snackbar.show({
//         text: errorMsg,
//         duration: 3000,
//         // fontFamily: 'Metropolis',
//       });
//     }
//     console.log("Saga Responce Error");
//   }
// }

// }
export default function* root() {
  yield [
    yield takeLatest(LOGIN_ACCOUNT, loginAccount),
    // yield takeLatest(ENTER_OTP_ACCOUNT, enterOtpAccount),
    // yield takeLatest(RECOVER_PASSWORD_ACCOUNT, recoverPasswordAccount),
    // yield takeLatest(CREATE_PROFILE_ACCOUNT, createProfileAccount),
  ];
}
