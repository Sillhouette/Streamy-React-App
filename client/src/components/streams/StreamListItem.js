import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Segment } from "semantic-ui-react";

class StreamListItem extends React.Component {
  state = { counter: 0 };

  textStyles = { color: "white" };

  buttonStyles = {
    background: "#C4C4C4",
    borderRadius: "17px",
    color: "black",
    margin: 3
  };

  /**
   * renderAdmin renders administrative buttons on a given stream if the current user
   * is the user that created the stream
   **/
  renderAdmin(stream, currentUserId) {
    let visible = stream.userId === currentUserId ? "visible" : "hidden";
    return (
      <div className="right floated content" style={{ visibility: visible }}>
        <Link
          to={`streams/edit/${stream.id}`}
          className="ui button mini"
          style={this.buttonStyles}
        >
          Edit
        </Link>
        <Link
          style={this.buttonStyles}
          to={`streams/delete/${stream.id}`}
          className="ui button mini"
        >
          Delete
        </Link>
      </div>
    );
  }

  increaseCount() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  callApi() {
    console.log("a");
    fetch("/api/seams")
      .then(function(response) {
        console.log("b");
        return response.json();
      })
      .then(function(data) {
        console.log("c", data);
      })
      .catch(err => console.log("d", err));
    console.log("e");
  }

  renderImage = stream => {
    return stream.image_uri ? (
      <Image
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxHeight: "200px"
        }}
        alt={`Stream ${stream.id} image`}
        src={stream.image_uri}
      />
    ) : null;
  };

  render() {
    const { props } = this;

    if (!props.stream) {
      return null;
    }

    return (
      <Grid.Column>
        <Segment basic textAlign="center">
          {this.renderImage(props.stream)}

          <div className="content" style={this.textStyles}>
            <Link to={`/streams/${props.stream.id}`} className="header">
              {props.stream.title}
            </Link>
            <div className="description" style={this.textStyles}>
              {props.stream.description}
            </div>
            {this.renderAdmin(props.stream, props.currentUserId)}
          </div>
        </Segment>
      </Grid.Column>
    );
  }
}

export default StreamListItem;
