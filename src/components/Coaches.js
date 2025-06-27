import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import {
  CoachListWrapper,
  CoachesList,
  Coach,
  PersonImage,
  PersonTitle,
  PersonReview,
  CoachListH1,
  CoachImage,
  CoachText,
} from "./CoachesData";

const thecoaches = [
  {
    name: "Ebony Clark",
    personPhoto: `${
      require("src/images/Ebony Clark - DanceAbilities Coach.jpg").default
    }`,
    occupation: "Dance Abilities Coach",
  },
  {
    name: "Micah Lynch",
    personPhoto: `${
      require("src/images/Micah Lynch- Bee Company Coach - Ballet Instructor.jpg")
        .default
    }`,
    occupation: "Ballet Instructor",
  },
  {
    name: "Tatianna Jordan",
    personPhoto: `${
      require("src/images/Tatianna Jordan - Bee Company Coach - Ballet Instructor.jpg")
        .default
    }`,
    occupation: "Ballet Instructor",
  },
  {
    name: "Bekah Kerr",
    personPhoto: `${
      require("src/images/Bekah Kerr - Prep Team Coach - Ballet Instructor.jpg")
        .default
    }`,
    occupation: "Prep Team Coach & Ballet Instructor",
  },
  {
    name: "Shaquiese Little",
    personPhoto: `${
      require("src/images/Shaquiese Little - Prep Team Coach Hip Hop & Tumbling Instructor.jpg")
        .default
    }`,
    occupation: "Prep Team Coach Hip Hop & Tumbling Instructor",
  },
  {
    name: "Armelia Hartle",
    personPhoto: `${
      require("src/images/Armelia Hartle- Ballet Instructor.jpg").default
    }`,
    occupation: "Ballet Instructor",
  },
  {
    name: "Rebecca Derst",
    personPhoto: `${
      require("src/images/Rebecca Derst  - Ballet Instructor.jpg").default
    }`,
    occupation: "Ballet Instructor",
  },
  {
    name: "Mercedes Green",
    personPhoto: `${
      require("src/images/Mercedes Green - Hip Hop & Tumbling Instructor.jpg")
        .default
    }`,
    occupation: "Hip Hop & Tumbling Instructor",
  },
  {
    name: "Darrell Jordan",
    personPhoto: `${
      require("src/images/Darrell Jordan - Studio Operations Director.jpg")
        .default
    }`,
    occupation: "Studio Operations Directors",
  },
];

const CoachList = () => {
  return (
    <CoachListWrapper
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
      data-aos-anchor-placement="center-bottom"
    >
      <CoachListH1>Meet Our Coaches</CoachListH1>
      <CoachesList>
        <Slider autoplay={100} duration={10000} previousButton="" nextButton="">
          {thecoaches.map((coach, index) => (
            <Coach>
              <CoachImage>
                <PersonImage src={coach.personPhoto} alt={coach.name} />
              </CoachImage>
              <CoachText>
                <PersonTitle>
                  {coach.name} • {coach.occupation}
                </PersonTitle>
                <PersonReview>“{coach.quote}”</PersonReview>
              </CoachText>
            </Coach>
          ))}
        </Slider>
      </CoachesList>
    </CoachListWrapper>
  );
};

export default React.memo(CoachList);
