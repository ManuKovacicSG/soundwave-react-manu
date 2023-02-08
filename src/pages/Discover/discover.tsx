import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import Footer from "../../components/Footer"

type Props = {};

const Discover = (props: Props) => {
  return (
    <section>
      <Container>
      <Grid divided="vertically" stackable>
        <Grid.Row columns={2}>
          <Grid.Column>

            <h1 style={{ color: "white" }}>Discover new music</h1>
            <img src={"microphone.svg"} alt="microphone" />
            <p style={{ color: "white" }}>Charts</p>

            <img src={"albums.svg"} alt="microphone" />
            <p style={{ color: "white" }}>Albums</p>

            <img src={"more.svg"} alt="microphone" />
            <p style={{ color: "white" }}>More</p>

            <p style={{ color: "white" }}>
              By joining you can benefit by listening to the latest albums
              released.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image
              src={"image-cuadrantes.jpeg"}
              alt="four-images"
              size="small"
              verticalAlign="middle"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
      <Footer />
    </section>

  );
};

export default Discover;
