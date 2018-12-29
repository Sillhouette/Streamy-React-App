//Start imports
import { SIGN_IN, SIGN_OUT } from "../actions/types";

/**
 * INITIAL_STATE is the initial state of our authorization object
 **/
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

/**
 * export our authReducer for the redux store
 **/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * SIGN_IN returns our current state with the isSignedIn value switched to true
     * and our userId set using the action's payload
     **/
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };

    /**
     * SIGN_OUT returns our current state with isSignedIn set to false and our
     * userId set to null
     **/
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };

    /**
     * If the actions dont match a case, return the state that was passed in, INITIAL_STATE is default
     **/
    default:
      return state;
  }
};
