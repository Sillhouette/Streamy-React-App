//Start imports
import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import history from "../../history";

/**
 * StreamDelete is a class-based component that renders a Modal component that
 * prompts the user for confirmation on the deletion of a specific stream
 **/
class StreamDelete extends React.Component {
  /**
   * componentDidMount fetches the spefic stream when the component is first loaded
   **/
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  /**
   * renderActions is passed into our modal and contains the delete and cancel
   * buttons for the modal
   **/
  renderActions() {
    const { id } = this.props.match.params;

    return (
      /**
       * We use a React.Fragment here to be sure the buttons arent affected visually
       * by other html elements
       **/
      <React.Fragment>
        <button
          //On click call the deleteStream action, passing in the id of the stream
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  /**
   * renderContent handles the propmpt we render within the modal
   **/
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  }

  /**
   * render returns a modal, passing in the title, content, actions, and dismiss function
   **/
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

/**
 * Map the current state to props so we can use it within our component
 **/
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

/**
 * export this component while connecting it to our redux store with the matchStateToProps,
 * fetchStream, and deleteStream functions
 **/
export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
