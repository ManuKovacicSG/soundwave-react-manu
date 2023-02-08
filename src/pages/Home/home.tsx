import React from "react";
import { Image } from "semantic-ui-react";
import LoginButtonNav from "../../components/Join-button";


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const HomePage = () => {
  return (
    <section id='fonts' >
      <Image src={"image-guila.png"} size="small" />
      <h1 id='fonts' >Feel The Music</h1>
      <p id='fonts'>Stream over 20 thousand songs with one click</p>
      <LoginButtonNav />
    </section>
  );
};
export default HomePage;
