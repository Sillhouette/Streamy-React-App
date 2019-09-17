//Start imports
import _ from "lodash";
import React from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

/**
 * StreamEdit is a class-based component that renders a StreamForm to receive
 * user input that is then used to edit a user's stream object
 **/
class StreamEdit extends React.Component {
  /**
   * componentDidMount fetches the stream that the user wants to edit using it's props
   **/
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  /**
   * onSubmit handles submitting the editStream action passing in the id of the stream
   * and the new properties for the stream object
   **/
  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  /**
   * render displays the StreamForm component for the user to submit changes for a stream
   **/
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <Segment
        basic
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.67",
          color: "white"
        }}
      >
        <h3>Edit a Stream</h3>
        <StreamForm
          //We use the lodash library to pick out the values of the stream to fill into the form
          initialValues={_.pick(
            this.props.stream,
            "title",
            "description",
            "image_uri"
          )}
          onSubmit={this.onSubmit}
        />
      </Segment>
    );
  }
}

/**
 * Map our state to props so we can use it to fill our form values
 **/
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

/**
 * Export this component and connect it to our Redux store with the matchStateToProps,
 * fetchStream, and editStream functions
 **/
export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
