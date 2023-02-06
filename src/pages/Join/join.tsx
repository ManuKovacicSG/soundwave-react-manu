import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Join the fun
      </Header>
      <Segment>
        <Form size="large">
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Name:"
              type="password"
            />
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email:"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password:"
            type="password"
          />

          <Button color="blue" fluid size="large">
            Join now
          </Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);
