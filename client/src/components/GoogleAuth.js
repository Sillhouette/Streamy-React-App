//Start imports
import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

/**
 * GoogleAuth is a class-based component that handles simple authentication using
 * Google's authentication API
 **/
class GoogleAuth extends React.Component {
  /**
   * componentDidMount loads Google's API into our window, authenticates our application
   * to their servers then checks if our user is signed into our application yet
   **/
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "438826954142-kaduvs2l000b5cf6u1ppepaikp1h0d9c.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  /**
   * onAuthChange triggers our signIn/signOut actions when a user signs in or out
   **/
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  /**
   * onSignInClick is a click event listener that initiates Google's sign in process
   **/
  onSignInClick = () => {
    this.auth.signIn();
  };

  /**
   * onSignOutClick is a click event listener that initiates Googles sign out process
   **/
  onSignOutClick = () => {
    this.auth.signOut();
  };

  /**
   * renderAuthButton renders the login/logout button
   **/
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui blue google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  /**
   * the render method returns our login/logout button
   **/
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

/**
 * mapStateToProps setd isSignedIn as a prop for our GoogleAuth component
 **/
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

/**
 * export our GoogleAuth component and connect it to the redux store with mapStateToProps,
 * and our signIn and signOut actions
 **/
export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
