import React from 'react';
import { Header, Image, Button } from 'semantic-ui-react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const HomePage = () => (
  <div>
    <Image src={'image-guila.png'} size='small' />
    <Header as="h1">Feel The Music</Header>
    <p>Stream over 20 thousand songs with one click</p>
    <Button color="blue" fluid size="small">Join Now</Button>
  </div>
);

export default HomePage