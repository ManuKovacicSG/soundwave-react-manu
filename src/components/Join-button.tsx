import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

export default class LoginButtonNav extends Component {
  render() {
    return (
      <Button primary fluid as='a' href='/Join' id='fonts' >
        <Button.Content visible>Join Now</Button.Content>
      </Button>
    );
  }
}