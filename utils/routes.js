import {apiDelete, apiGet, apiPost, apiPostImage, apiPut} from './API';
import config from '../config';

export default {
    
    "STOCK_11":{
        // BASE_PATH:"http://stock11-backend-staging-286433744.ap-south-1.elb.amazonaws.com/api/stock11",
        BASE_PATH:config.API_KEY,
        APIS:{
            // GET API
          
            // GET_USER_PROFILE_IMAGE: async (data)=> {return await apiGet(`/image/${data}`,"USER_MS")},
            
            // POST API
            // LOGIN: async (data)=> await apiPost("/userauth/send-otp",data,"STOCK_11"),
            // VERIFY: async (data)=> await apiPost("/userauth/verify",data,"STOCK_11"),
            CREATE_USER_LOGIN: async (data)=> await apiPost("/users/signup",data,"STOCK_11"),
            VERIFY_USER_OTP: async (data)=> await apiPost("/authentication/2fa/verify",data,"STOCK_11"),
            UPLOAD_USER_PROFILE_IMAGE: async (data)=> await apiPostImage("/image/",data,"STOCK_11"),
            // PUT API
            UPDATE_USER_PROFILE: async (data)=> await apiPut("/profile",data,"STOCK_11"),
        }
    },
}