import {apiDelete, apiGet, apiPost, apiPostImage, apiPut} from './API';

export default {
    
    "STOCK_11":{
        BASE_PATH:process.env.STOCK11_API_URL,
        APIS:{
            // GET API
          
            // GET_USER_PROFILE_IMAGE: async (data)=> {return await apiGet(`/image/${data}`,"USER_MS")},
            
            // POST API
            // LOGIN: async (data)=> await apiPost("/userauth/send-otp",data,"STOCK_11"),
            // VERIFY: async (data)=> await apiPost("/userauth/verify",data,"STOCK_11"),
            LOGIN: async (data)=> await apiPost("users/signup",data,"STOCK_11"),

            CREATE_USER_PROFILE: async (data)=> await apiPost("/users",data,"STOCK_11"),
            UPLOAD_USER_PROFILE_IMAGE: async (data)=> await apiPostImage("/image/",data,"STOCK_11"),
            // PUT API
            UPDATE_USER_PROFILE: async (data)=> await apiPut("/profile",data,"STOCK_11"),
        }
    },
}