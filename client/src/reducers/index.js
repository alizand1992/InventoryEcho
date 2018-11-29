import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import saleReducer from "./saleReducer";
import userReducer from "./userReducer";

export default combineReducers({
  item: itemReducer,
  soldItem: saleReducer,
  user: userReducer,
});
