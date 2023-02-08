import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import LoginButtonNav from "../../components/Join-button";


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const HomePage = () => {
  return (
    <section>
      <Container id='fonts' className="homepage">
      <Grid centered columns={2} stackable>
      <Grid.Column>
      <Image src={"image-guila.png"} size="medium" />
      </Grid.Column>
      <Grid.Column>
      <h1 id='fonts' >Feel The Music</h1>
      <p id='fonts'>Stream over 20 thousand songs with one click</p>
      <LoginButtonNav />
      </Grid.Column>
      </Grid>
      </Container>
      </section>
  );
};
export default HomePage;
