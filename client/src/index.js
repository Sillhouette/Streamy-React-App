//Start imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import reducers from "./reducers";

//Compose redux dev tools for use within this app's window
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * store creates our redux store using our reducers, initiates the redux dev tools,
 * and applys thunk as our middleware for our application
 **/
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

/**
 * render attaches our app to #root and renders it
 **/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
