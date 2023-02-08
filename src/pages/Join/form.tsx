import React from "react";
import { Container, Form } from "semantic-ui-react";
import LoginButtonNav from "../../components/Join-button";

const Formulario = () => (
    <Container>
        <Form class='ui inverted form' style={{ backgroundColor: "#202027" }} >
          <label>Name:</label>
          <Form.Input />
          <label>Email:</label>
          <Form.Input />
          <label>Password:</label>
          <Form.Input />
        
        <LoginButtonNav />
        
        </Form>
    </Container>
)

export default Formulario