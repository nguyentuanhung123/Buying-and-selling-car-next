import React from "react";
import Hero from "./hero/Hero.js";
import AboutCard from "../about/AboutCard.js";
import HAbout from "./HAbout.js";
import Test from "./testiomonal/Test.js";
import Hblog from "./Hblog.js";
import Hprice from "./Hprice.js";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <Hblog />
      <Hprice />
    </>
  );
};

export default Home;
