import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const Join = () => (
  <Grid centered columns={2} stackable>
    <Grid.Column>
      <Header as="h2" textAlign="center" verticalAlign="middle">
        Join the fun
      </Header>
    </Grid.Column>
    <Grid.Column>
      <Segment verticalAlign="middle">
        <Form size="large">
          <label>Name:</label>
          <Form.Input />
          <label>Email::</label>
          <Form.Input />
          <label>Password</label>
          <Form.Input />

          <Button color="blue" fluid size="large">
            Join now
          </Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default Join