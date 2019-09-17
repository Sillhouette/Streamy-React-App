//Start imports
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import history from "../history";

/**
 * App is a functional component that contains the header and react router component
 **/
const App = () => {
  return (
    <div
      className="ui container"
      style={{
        paddingBottom: "100px",
        width: "75%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "block",
        position: "relative"
      }}
    >
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

/**
 * export our App component
 **/
export default App;
