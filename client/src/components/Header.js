//Start imports
import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

/**
 * Header is a functional component that returns the display of our App's header
 **/
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Stream List
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

/**
 * export our Header component
 **/
export default Header;
