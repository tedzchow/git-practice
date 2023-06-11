import { combineReducers } from "redux";
import authReducer from "./authReducer";
import expReducer from "./expReducer";

export default combineReducers({
  auth: authReducer,
  exp:expReducer,
});
