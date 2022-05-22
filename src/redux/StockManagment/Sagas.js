import { put, takeLatest, call } from "redux-saga/effects";
// import API from "../../../services/Api";
import {
  STOCK_MANAGEMENT_ACCOUNT,
  DELETE_PRODUCT_ACCOUNT,
  ADD_PRODUCT_ACCOUNT,
  GET_SUB_CATEGORIES_ACCOUNT,
  GET_PRODUCT_ACCOUNT,
} from "../ActionTypes";
import * as stockManagement from "./Actions";
import Snackbar from "react-native-snackbar";
import { navigate } from "../../../theme/rnnavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
let resId;
import routes from "../../../utils/routes";


function* stockManagment(action) {
  console.log("@@@@saga login account==", action);
  try {
    const response = yield call(routes.STOCK_11.APIS.GET_CONTEST_CARDS,`?page=${action.payload}`);
    console.log("@@@@ STOCK MANAGEMENT==", response);
    const result = routes.handleLoginResponse(response);
    console.log("@@@@STOCK MANAGEMENT Response==", result);
    if (result) {
      yield put(stockManagement.stockManagementSuccess(result));
    } else yield put(stockManagement.stockManagementError(result));
  } catch (error) {
    console.log("@@Saga Responce Error", error);
  }
}

// function* getProductApi(action) {
//   console.log("@@@@ getProductApi account==", action);
//   try {
//     const response = yield call(
//       API.get,
//       `product/getById/${action.payloadData.id}`
//     );
//     console.log("@@@@ getProductApi List==", response);
//     const result = API.handleLoginResponse(response);
//     console.log("@@@@ getProductApi List Response==", result);
//     if (result) {
//       yield put(stockManagement.getProductSuccess(result));
//       console.log("Succsess=====", data);
//     } else yield put(stockManagement.getProductError(result));
//   } catch (error) {
//     console.log("Saga Responce Error", error);
//   }
// }

// function* deleteProductApi(action) {
//   console.log("Deletea Saga Res====", action.payloadData);
//   try {
//     const response = yield call(
//       API.delete,
//       `product/delete/${action.payloadData.id}`
//     );
//     const result = API.handleLoginResponse(response);
//     console.log("Delete Product Id Response==", result);
//     if (result) {
//       yield put(stockManagement.deleteProductSuccess(result.data));
//       if (result.data.success === true) {
//         Snackbar.show({
//           text: result.data.message,
//           duration: 3000,
//         });
//         console.log("Delete Product Id Api=======", result.success);
//       } else yield put(stockManagement.deleteProductError(result));
//     } else {
//       yield put(stockManagement.deleteProductError("Some Error"));
//     }
//   } catch (error) {
//     let errorMsg = JSON.parse(error.request._response).message;
//     let errorStatus = JSON.parse(error.request._response).success;
//     if (errorStatus === false) {
//       yield put(stockManagement.deleteProductError(error));
//       Snackbar.show({
//         text: errorMsg,
//         duration: 3000,
//         // fontFamily: 'Metropolis',
//       });
//     }
//     console.log("Saga Responce Error");
//   }
// }

// function* addProductApiCall(action) {
//   console.log("saga login account==", action.payloadData.formData);
//   try {
//     const response = yield call(
//       API.post,
//       `product/create`,
//       action.payloadData.formData
//     );
//     console.log("Create Profile Response==", response);
//     const result = API.handleLoginResponse(response);
//     console.log("Create Profile Response==", result);
//     if (result) {
//       yield put(stockManagement.addProductSuccess(result.data));
//       if (result.data.success === true) {
//         Snackbar.show({
//           text: result.data.message,
//           duration: 3000,
//           // fontFamily: 'Metropolis',
//         });
//         yield call(navigate, "StoreManagementNew");
//         console.log("@@@ Create Profile Api=======", result.success);
//       } else yield put(stockManagement.addProductError(result));
//     } else {
//       yield put(stockManagement.addProductError("Some Error"));
//     }
//   } catch (error) {
//     let errorMsg = JSON.parse(error.request._response).message;
//     let errorStatus = JSON.parse(error.request._response).success;
//     if (errorStatus === false) {
//       yield put(stockManagement.addProductError(error));
//       Snackbar.show({
//         text: errorMsg,
//         duration: 3000,
//         // fontFamily: 'Metropolis',
//       });
//     }
//     console.log("Saga Responce Error");
//   }
// }

// function* getSubCategoriesApi(action) {
//   console.log("@@@@ Sub categories saga login account==", action);
//   try {
//     const response = yield call(API.get, "subcategory/get");
//     console.log("@@@@ Sub Categories List==", response);
//     const result = API.handleLoginResponse(response);
//     console.log("@@@@ Sub Categories List Response==", result);
//     if (result) {
//       yield put(stockManagement.getSubCategoriesSuccess(result));
//       console.log("Succsess=====", data);
//     } else yield put(stockManagement.getSubCategoriesError(result));
//   } catch (error) {
//     console.log("Saga Responce Error", error);
//   }
// }

export default function* root() {
  yield [
    yield takeLatest(STOCK_MANAGEMENT_ACCOUNT, stockManagment),
    // yield takeLatest(DELETE_PRODUCT_ACCOUNT, deleteProductApi),
    // yield takeLatest(GET_PRODUCT_ACCOUNT, getProductApi),
    // yield takeLatest(ADD_PRODUCT_ACCOUNT, addProductApiCall),
    // yield takeLatest(GET_SUB_CATEGORIES_ACCOUNT, getSubCategoriesApi),
  ];
}
