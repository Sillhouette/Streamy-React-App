//Start imports
import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

/**
 * Streamlist is a class-based component that fetches and displays the list of our streams
 **/
class StreamList extends React.Component {
  /**
   * componentDidMount calls the fetchStreams action to retreive a list of Streams
   * from our rails api backend
   **/
  componentDidMount() {
    this.props.fetchStreams();
  }

  /**
   * renderAdmin renders administrative buttons on a given stream if the current user
   * is the user that created the stream
   **/
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  /**
   * renderList loops over the streams object in this components props and returns
   * a list of the streams and their properties to be displayed
   **/
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  /**
   * renderCreate returns the create stream button
   **/
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
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
      <div>
        <h2>Streams:</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
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
