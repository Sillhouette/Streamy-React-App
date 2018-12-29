//Start imports
import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

//Set INITIAL_STATE to an empty object
const INITIAL_STATE = {};

/**
 * export our streamReducer which takes in a state and an action
 **/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * CREATE_STREAM returns our state with a new stream added to it
     **/
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    /**
     * FETCH_STREAMS returns our state with all of our streams mapped using
     * lodash's mapKeys object to map them based on their ids
     **/
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    /**
     * FETCH_STREAM returns our state with it's stream set to a freshly fetched stream
     **/
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    /**
     * EDIT_STREAM returns our state object
     **/
    case EDIT_STREAM:
      return { ...state };

    /**
     * DELETE_STREAM returns our state object with the deleted stream ommitted using
     * lodash's omit funtion
     **/
    case DELETE_STREAM:
      return _.omit(state, action.payload);

    //By default we return the state that was passed in, or the INITIAL_STATE
    default:
      return state;
  }
};
