/**
 * Action creators index, contains all action creators
 **/

//Start Imports
import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

/**
 * signIn action takes in the userId from the GoogleAuth component and passes
 * it to our authReducer though dispatch for access within the application
 **/
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

/**
 * signOut action initiates user sign out through dispatch
 **/
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

/**
 * createStream action takes in form values and starts an asyncronous function
 * which posts a new stream to our rails backend and dispatches the data to our
 * reducers
 **/
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

/**
 * fetchStreams starts an asyncronous function that fetches all streams from our
 * rails backend and dispatches them to our reducers
 **/
export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

/**
 * fetchStream starts an asyncronous function that fetches one stream from our
 * rails backend and dispatches it to our reducers
 **/
export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

/**
 * editStream starts an asyncronous function that patches a stream in our rails
 * backend with new data submitted through our form
 **/
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

/**
 * deleteStream takes in an id from our state and starts an asyncronous function
 * that deletes a stream from our rails backend
 **/
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
