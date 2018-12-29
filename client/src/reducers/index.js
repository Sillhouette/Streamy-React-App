//Start imports
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

/**
 * export combineReducers which takes all of our reducers and combines them into
 * a single object
 **/
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
