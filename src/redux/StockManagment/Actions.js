import * as ActionTypes from "../ActionTypes"

export const stockManagement = payloadData => {console.log("payloadData====>",payloadData);
return ({
    type: ActionTypes.STOCK_MANAGEMENT_ACCOUNT,
     payload: payloadData,
    })};


export const stockManagementSuccess = data => ({
    type: ActionTypes.STOCK_MANAGEMENT_SUCCESS,
    data,
})

export const stockManagementError = (error, id) => ({
    type: ActionTypes.STOCK_MANAGEMENT_ERROR,
    error
})

