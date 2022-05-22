import {apiDelete, apiGet, apiPost, apiPostImage, apiPut,apiPostLogin} from './API';
import Snackbar from "react-native-snackbar";

export default {
    
    "STOCK_11":{
        BASE_PATH:"http://stock11-backend-staging-286433744.ap-south-1.elb.amazonaws.com/api/stock11",
        APIS:{
            // GET API
            GET_CONTEST_CARDS: async (data)=> {
              console.log("GET_CONTEST_CARDS===>",data);
              return await apiGet(`/contests${data}`,"STOCK_11")
            },
            GET_PIN_CONTEST: async (data)=> {return await apiGet(`/mapping/contest_user/getByUserId/${data}`,"STOCK_11")},
            GET_NOTIFICATION_KEY: async (data)=> {return await apiGet(`/notifications/${data}`,"STOCK_11")},  
            GET_NOTIFICATION: async (data)=> {return await apiGet(`/notifications/notification/${data}`,"STOCK_11")},  
            GET_BASKETS: async (data)=> {return await apiGet(`/baskets${data}`,"STOCK_11")}, 
            GET_BASKETS_LISTS: async (data)=> {return await apiGet(`/baskets/basket_list/${data}`,"STOCK_11")},  
            GET_ABOUT_US: async (data)=> {return await apiGet(`/about`,"STOCK_11")},  
            GET_PIN_CONTEST: async (data)=> {return await apiGet(`/mapping/contest_user/getByUserId/${data}`,"STOCK_11")},  
            GET_USER_PROFILE: async (data)=> {return await apiGet(`/users/${data}`,"STOCK_11")},  
            GET_HOW_TO_PLAY: async (data)=> {return await apiGet(`/play`,"STOCK_11")},   
            GET_WALLET_BALANCE: async (data)=> {return await apiGet(`/wallet/${data}`,"STOCK_11")},   
            
            // POST API
            // LOGIN: async (data)=> await apiPost("/userauth/send-otp",data,"STOCK_11"),
            // VERIFY: async (data)=> await apiPost("/userauth/verify",data,"STOCK_11"),
            CREATE_NOTIFICATION: async (data)=> await apiPost("/notifications/",data,"STOCK_11"),
            CREATE_PIN_CONTEST:async (data)=> await apiPost("/mapping/contest_user",data,"STOCK_11"),
            CREATE_USER_REGISTER: async (data)=> await apiPostLogin("/users/signup",data,"STOCK_11"),
            CREATE_USER_LOGIN: async (data)=> await apiPostLogin("/users/signin",data,"STOCK_11"),
            VERIFY_USER_OTP: async (data)=> await apiPostLogin("/authentication/2fa/verify",data,"STOCK_11"),
            CREATE_BASKET: async (data)=> await apiPost("/baskets",data,"STOCK_11"),
            CREATE_HELP_DESK: async (data)=> await apiPost("/helpdesk",data,"STOCK_11"),
            CREATE_USER_PROFILE: async (data)=> await apiPost("/users",data,"STOCK_11"),
            CREATE_FORGOT_USER:async (data)=> await apiPostLogin("/users/forgotpassword",data,"STOCK_11"),
            CREATE_PROFILE_PHOTO: async (data)=> await apiPostImage("/users/save-profile-photo",data,"STOCK_11"),
            // PUT API
            UPDATE_USER_PROFILE: async (data)=> await apiPut("/profile",data,"STOCK_11"),
            UPDATE_CREATE_BASKET: async (data)=> await apiPut("/baskets",data,"STOCK_11"),
            UPDATE_USER_PROFILE: async (data)=> await apiPut("/users",data,"STOCK_11"),

            // delete
            DELETE_PIN_CONTEST:async (data)=> await apiDelete("/mapping/contest_user",data,"STOCK_11"),
        }
    },

    handleResponse(response) {
      if (response) {
        if (response && response.status == 200) {
          return {success: true, data: response.data};
        } else {
          let message =
            typeof response.message === 'string'
              ? response.message
              : typeof response.message === 'object'
              ? response.message.denied
                ? this.handleError(response.message.denied)
                : response.message.incorrect_password
                ? this.handleError(response.message.incorrect_password)
                : response.message.invalid_email
                ? this.handleError(response.message.invalid_email)
                : 'Some Error'
              : 'Some Error!';
          Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
          });
          return {success: false, data: response.message};
        }
      }
    },
  
    handleLoginResponse(response) {
        console.log("handleLoginResponse=====>",response.token);
      if (response) {
        // console.log('@@@ Handle Res=======', response);
        if (response) {
          return {success: true, data: response};
        } else {
        //   let message =
        //     typeof response.errors === 'string'
        //       ? response.errors
        //       : typeof response.errors === 'object'
        //       ? response.errors.denied
        //         ? this.handleError(response.errors.denied)
        //         : response.errors.incorrect_password
        //         ? this.handleError(response.message.incorrect_password)
        //         : response.message.invalid_email
        //         ? this.handleError(response.message.invalid_email)
        //         : 'Some Error'
        //       : 'Some Error!';
          // console.log('@@@ Handle Error Res=======', response);
        //   Snackbar.show({
        //     text: message,
        //     duration:3,
        //   });
          return {
            success: false,
            // data: response.message,
          };
        }
      }
    },
  
    handleResponseForMessage(response) {
      if (response) {
        // console.log('handleResponseForMessage==', response.message);
        if (response && response.code == 200) {
          const message = response.message;
          Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
          });
          return {success: true, data: message};
        } else {
          let message =
            typeof response.message === 'string'
              ? response.message
              : typeof response.message === 'object'
              ? response.message.denied
                ? this.handleError(response.message.denied)
                : response.message.incorrect_password
                ? this.handleError(response.message.incorrect_password)
                : response.message.invalid_email
                ? this.handleError(response.message.invalid_email)
                : 'Some Error'
              : 'Some Error!';
          Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
          });
          return {success: false, data: response.message};
        }
      }
    },
  
    handleResponseForSearchMessage(response) {
      if (response) {
        // console.log('handleResponseForMessage==', response.message);
        if (response && response.code == 200) {
          const message = response.message;
          Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
          });
          return {success: true, data: response.data};
        } else {
          let message =
            typeof response.message === 'string'
              ? response.message
              : typeof response.message === 'object'
              ? response.message.denied
                ? this.handleError(response.message.denied)
                : response.message.incorrect_password
                ? this.handleError(response.message.incorrect_password)
                : response.message.invalid_email
                ? this.handleError(response.message.invalid_email)
                : 'Some Error'
              : 'Some Error!';
          Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
          });
          return {success: false, data: response.message};
        }
      }
    },
  
    handleError(message) {
      return typeof message === 'object' &&
        Array.isArray(message) &&
        message.length > 0
        ? message[0]
        : 'Some Error';
    },
  };