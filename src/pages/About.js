import React from "react";
import InfoSection from "../components/InfoSection";
import { InfoData } from "../data/InfoData";

const About = () => {
  return (
    <>
      <InfoSection {...InfoData} />
    </>
  );
};

export default About;
