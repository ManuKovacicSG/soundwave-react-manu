import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import LoginButtonNav from "../../components/Join-button";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const HomePage = () => {
  return (
    <section>
      <Container id="fonts" className="homepage">
        <Grid centered columns={2} stackable>
          <Grid.Column>
            <Image
              className="ui image computer only grid"
              src={"image-guila.png"}
              size="big"
            />
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <h1 id="fonts">Feel The Music</h1>
            <p id="fonts">Stream over 20 thousand songs with one click</p>
            <LoginButtonNav />
          </Grid.Column>
        </Grid>
      </Container>
    </section>
  );
};
export default HomePage;
