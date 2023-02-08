import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import Footer from "../../components/Footer";
import Form from "./Form";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const Join = () => (
  <section id="fonts">
    <Grid centered columns={2} stackable>
      <Grid.Column>
        <Header as="h2" textAlign="center" verticalAlign="middle" id="fonts">
          Join the fun
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Container>
          <Form />
        </Container>
      </Grid.Column>
    </Grid>
    <Footer />
  </section>
);
export default Join;
