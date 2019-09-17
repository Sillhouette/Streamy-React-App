//Start imports
import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import { Container, Segment } from "semantic-ui-react";
import StreamForm from "./StreamForm";

/**
 * StreamCreate is a class-based component that displays a StreamForm which is
 * used to get the data required to create a new stream
 **/
class StreamCreate extends React.Component {
  /**
   * onSubmit takes in the submitted form values and passes them to the
   * createStream action
   **/
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  /**
   * Render function tells React how we want to render our stream creation component
   **/
  render() {
    return (
      <Container
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.67",
          color: "white"
        }}
      >
        <Segment basic>
          <h3>Create a Stream</h3>
          <StreamForm onSubmit={this.onSubmit} />
        </Segment>
      </Container>
    );
  }
}

/**
 * Export this component while passing it to Redux's connect component wiring this
 * component to redux through the createStream action
 **/
export default connect(
  null,
  { createStream }
)(StreamCreate);
