//Start imports
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import GoogleAuth from "./GoogleAuth";

/**
 * Header is a functional component that returns the display of our App's header
 **/
const Header = () => {
  let textStyles = { color: "white" };

  return (
    <Menu
      pointing
      //className="ui pointing menu"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.67"
      }}
    >
      <Link to="/" className="item" style={textStyles}>
        Stream Source
      </Link>
      <div className="right menu">
        <Link to="/" className="item" style={textStyles}>
          Stream List
        </Link>
        <GoogleAuth />
      </div>
    </Menu>
  );
};

/**
 * export our Header component
 **/
export default Header;
