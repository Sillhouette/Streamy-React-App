import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state };

    case DELETE_STREAM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
