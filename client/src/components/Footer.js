//Start imports
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Header,
  Segment,
  Image,
  Icon,
  Divider,
  Popup,
  Menu
} from "semantic-ui-react";

const style = {
  borderRadius: "10px",
  opacity: 0.8
};

const Footer = props => (
  <Container style={{ position: "absolute", bottom: 0, width: "100%" }}>
    <Segment
      attached="bottom"
      inverted
      style={{
        height: "75px",
        backgroundColor: "rgba(0, 0, 0, 0.67"
      }}
    >
      <Grid style={{ width: "100%" }} divided="vertically" columns="equal">
        <Grid.Row style={{ padding: 5 }}>
          <Grid.Column
            textAlign="left"
            verticalAlign="top"
            style={{ margin: "0rem" }}
          />
          <Grid.Column
            textAlign="center"
            id="center-column"
            verticalAlign="top"
          >
            <Header
              as="h3"
              inverted
              verticalAligh="bottom"
              textAlign="center"
              style={{}}
            >
              Stream Source
            </Header>
          </Grid.Column>
          <Grid.Column
            textAlign="center"
            verticalAlign="top"
            style={{ margin: "0rem" }}
          />
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
);

export default Footer;
