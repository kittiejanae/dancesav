import React from "react";
import Classes from "../components/Classes";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Teams from "../components/Teams";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Teams />
      <Classes />
      <InfoSection {...InfoDataTwo} />
    </>
  );
};

export default Home;
