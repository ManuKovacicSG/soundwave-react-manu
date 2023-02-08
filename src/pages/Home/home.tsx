import React from "react";
import { Header, Image, Button } from "semantic-ui-react";
import LoginButtonNav from "../../components/Join-button";


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const HomePage = () => {
  return (
    <section>
      <Image src={"image-guila.png"} size="small" />
      <h1>Feel The Music</h1>
      <p>Stream over 20 thousand songs with one click</p>
      <LoginButtonNav />
    </section>
  );
};
export default HomePage;
