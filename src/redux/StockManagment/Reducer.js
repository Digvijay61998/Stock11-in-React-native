import Immutable from "seamless-immutable";
import {
  STOCK_MANAGEMENT_ACCOUNT,
  STOCK_MANAGEMENT_SUCCESS,
  STOCK_MANAGEMENT_ERROR,
} from "../ActionTypes";
import { createReducer } from "../CreateReducer";

const INITIAL_STATE = Immutable({
  stockList: [],
  Pinned: [],
  UnPinned: [],
  isFetching: false,
  error: null,
  editProduct: null,
});

const reducers = {
  [STOCK_MANAGEMENT_ACCOUNT]: (state, action) => {
    return Immutable.merge(state, {
      stockList: null,
      isFetching: true,
    });
  },

  [STOCK_MANAGEMENT_SUCCESS]: (state, { data }) => {
    return Immutable.merge(state, {
      stockList: data,
      isFetching: false,
      error: null,
    });
  },

  [STOCK_MANAGEMENT_ERROR]: (state, error) => {
    return Immutable.merge(state, {
      isFetching: false,
      error: error,
    });
  },

}
export const reducer = createReducer(INITIAL_STATE, reducers);
