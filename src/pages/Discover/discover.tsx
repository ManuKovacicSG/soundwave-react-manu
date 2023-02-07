import React from "react";
import { Grid, Image, Label } from "semantic-ui-react";
import Footer from "../../components/Footer"

type Props = {};

const Discover = (props: Props) => {
  return (
    <section>
      <Grid divided="vertically" stackable>
        <Grid.Row columns={2}>
          <Grid.Column>

            <h1>Discover new music</h1>
            <img src={"microphone.svg"} alt="microphone" />
            <p>Charts</p>

            <img src={"albums.svg"} alt="microphone" />
            <p>Albums</p>

            <img src={"more.svg"} alt="microphone" />
            <p>More</p>

            <p>
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
      <Footer />
    </section>

  );
};

export default Discover;
