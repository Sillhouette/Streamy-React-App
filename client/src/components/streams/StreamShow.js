//Start imports
import React from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

/**
 * StreamShow is a class-based compnent that displays a stream to our user
 **/
class StreamShow extends React.Component {
  /**
   * constructor initiates our component and sets a videoRef variable for our
   * video object
   **/
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  /**
   * componentDidMount fetches our stream object when the component first mounts
   * as well as builds our video player
   **/
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);
    this.buildPlayer();
  }

  /**
   * componentDidUpdate rebuilds our video player every time the component re-renders
   **/
  componentDidUpdate() {
    this.buildPlayer();
  }

  /**
   * componentWillUnmount destroys our video player as our component unmounts
   **/
  componentWillUnmount() {
    this.player.destroy();
  }

  /**
   * buildPlayer creates, attaches and loads our live-stream from our streaming server
   **/
  buildPlayer() {
    const { id } = this.props.match.params;

    if (this.player || !this.props.stream) {
      return;
    }

    this.player = flv.createPlayer({
      type: "flv",
      url: `https://streams.stream-source.net:8443/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    const isPlaying =
      video.currentTime > 0 &&
      !video.paused &&
      !video.ended &&
      video.readyState > 2;

    if (!isPlaying) {
      video.play();
    }
  }

  /**
   * render renders a single stream onto the webpage, with the video player
   **/
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <Segment
        basic
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.67",
          color: "white"
        }}
      >
        <h1>{title}</h1>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h5>{description}</h5>
      </Segment>
    );
  }
}

/**
 * mapStateToProps returns our stream for access through props
 **/
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

/**
 * export the component and connect it to our redux store, passing it our state as props
 * and the fetchStream action
 **/
export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
