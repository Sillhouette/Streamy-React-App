//Start imports
import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import StreamListItem from "./StreamListItem";

/**
 * Streamlist is a class-based component that fetches and displays the list of our streams
 **/
class StreamList extends React.Component {
  buttonStyles = {
    background: "#C4C4C4",
    borderRadius: "17px",
    color: "black"
  };

  /**
   * componentDidMount calls the fetchStreams action to retreive a list of Streams
   * from our rails api backend
   **/
  componentDidMount() {
    this.props.fetchStreams();
  }

  /**
   * renderList loops over the streams object in this components props and returns
   * a list of the streams and their properties to be displayed
   **/
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <StreamListItem
          stream={stream}
          currentUserId={this.props.currentUserId}
          key={stream.id}
        />
      );
    });
  }

  /**
   * renderCreate returns the create stream button
   **/
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right", float: "right" }}>
          <Link
            style={this.buttonStyles}
            to="/streams/new"
            className="ui button primary"
          >
            Create Stream
          </Link>
        </div>
      );
    }
  }

  /**
   * render renders our list of streams and the create stream button on the page
   **/
  render() {
    return (
      <div
        className="ui basic segment"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.67"
        }}
      >
        <h2 style={{ color: "white" }}>Streams: {this.renderCreate()}</h2>
        <Grid style={{ width: "100%" }} stackable centered columns="3">
          {this.renderList()}
        </Grid>
      </div>
    );
  }
}

/**
 * mapStateToProps maps the streams, currentUserId, and isSignedIn values to this component's props
 **/
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

/**
 * export StreamList and hook it up to our redux store with mapStateToProps and the fetchStreams action
 **/
export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
