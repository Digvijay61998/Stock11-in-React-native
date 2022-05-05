import {apiDelete, apiGet, apiPost, apiPostImage, apiPut} from './API';

export default {
    
    "STOCK_11":{
        BASE_PATH:"http://stock11-backend-staging-286433744.ap-south-1.elb.amazonaws.com/api/stock11",
        APIS:{
            // GET API
            GET_CONTEST_CARDS: async (data)=> {return await apiGet(`/contests${data}`,"STOCK_11")},
            GET_PIN_CONTEST: async (data)=> {return await apiGet(`/mapping/contest_user/getByUserId/${data}`,"STOCK_11")},
            GET_NOTIFICATION_KEY: async (data)=> {return await apiGet(`/notifications/${data}`,"STOCK_11")},  
            GET_NOTIFICATION: async (data)=> {return await apiGet(`/notifications/notification/${data}`,"STOCK_11")},  
            GET_BASKETS: async (data)=> {return await apiGet(`/baskets${data}`,"STOCK_11")}, 
            GET_BASKETS_LISTS: async (data)=> {return await apiGet(`/baskets/basket_list/${data}`,"STOCK_11")},  
            GET_ABOUT_US: async (data)=> {return await apiGet(`/about`,"STOCK_11")},  
            GET_PIN_CONTEST: async (data)=> {return await apiGet(`/mapping/contest_user/getByUserId/${data}`,"STOCK_11")},  
            GET_USER_PROFILE: async (data)=> {return await apiGet(`/users/${data}`,"STOCK_11")},  
            GET_HOW_TO_PLAY: async (data)=> {return await apiGet(`/play`,"STOCK_11")},   
            
            
            // POST API
            // LOGIN: async (data)=> await apiPost("/userauth/send-otp",data,"STOCK_11"),
            // VERIFY: async (data)=> await apiPost("/userauth/verify",data,"STOCK_11"),
            CREATE_NOTIFICATION: async (data)=> await apiPost("/notifications/",data,"STOCK_11"),
            CREATE_PIN_CONTEST:async (data)=> await apiPost("/mapping/contest_user",data,"STOCK_11"),
            CREATE_USER_LOGIN: async (data)=> await apiPost("/users/signup",data,"STOCK_11"),
            VERIFY_USER_OTP: async (data)=> await apiPost("/authentication/2fa/verify",data,"STOCK_11"),
            CREATE_BASKET: async (data)=> await apiPost("/baskets",data,"STOCK_11"),
            CREATE_HELP_DESK: async (data)=> await apiPost("/helpdesk",data,"STOCK_11"),
            CREATE_USER_PROFILE: async (data)=> await apiPost("/users",data,"STOCK_11"),
            

            UPLOAD_USER_PROFILE_IMAGE: async (data)=> await apiPostImage("/image/",data,"STOCK_11"),
            // PUT API
            UPDATE_USER_PROFILE: async (data)=> await apiPut("/profile",data,"STOCK_11"),

            // delete
            DELETE_PIN_CONTEST:async (data)=> await apiDelete("/mapping/contest_user",data,"STOCK_11"),
        }
    },
}