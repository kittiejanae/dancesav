import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import styled from "styled-components";

const CoachListWrapper = styled.div`
  width: 100%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vw;
  margin-bottom: 2vw;
  padding: 0;
`;

const CoachListH1 = styled.h2`
  width: 100%;
  height: 10vw;
  margin: 0;
  margin-left: 16vw;
  padding: 0;
`;

const CoachesList = styled.ul`
  width: 80vw;
  height: 80vw;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  margin-top: 2vw;

  @media screen and (min-width: 786px) {
    height: 25vw;
  }
`;

const Coach = styled.li`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;

  @media screen and (min-width: 786px) {
    height: 100%;
    bottom: 20%;
  }
`;

const CoachImage = styled.div`
  width: 20%;
  margin: 0;
  padding: 0;
  float: left;
`;

const PersonImage = styled.img`
  border-radius: 100%;
  width: 12.5vw;
  height: 12.5vw;
  padding: 0;
  margin-left: 2vw;
  -o-object-fit: cover;
  object-fit: cover;
  background: black;
  box-shadow: 6px 6px 12px rgba(255, 255, 255, 0.5),
    -4px -4px 12px rgba(95, 80, 80, 0.5);
`;

const CoachText = styled.div`
  width: 75%;
  margin-left: 4vw;
  float: right;
`;

const PersonTitle = styled.h3`
  text-align: left;
  width: 100%;
  margin: 0;
`;
const PersonReview = styled.p`
  text-align: left;
  width: 100%;
  color: black;
`;

const thecoaches = [
  {
    name: "Ebony Clarke",
    personPhoto: `${
      require("./images/Ebony Clark - DanceAbilities Coach.jpg").default
    }`,
    occupation: "Dance Abilities Coach",
  },
  // {
  //   name: "Micah Lynch",
  //   personPhoto: `${
  //     require("../images/Micah Lynch- Bee Company Coach - Ballet Instructor.jpg")
  //       .default
  //   }`,
  //   occupation: "Ballet Instructor",
  // },
  // {
  //   name: "Tatianna Jordan",
  //   personPhoto: `${
  //     require("src/images/Tatianna Jordan - Bee Company Coach - Ballet Instructor.jpg")
  //       .default
  //   }`,
  //   occupation: "Ballet Instructor",
  // },
  // {
  //   name: "Bekah Kerr",
  //   personPhoto: `${
  //     require("src/images/Bekah Kerr - Prep Team Coach - Ballet Instructor.jpg")
  //       .default
  //   }`,
  //   occupation: "Prep Team Coach & Ballet Instructor",
  // },
  // {
  //   name: "Shaquiese Little",
  //   personPhoto: `${
  //     require("src/images/Shaquiese Little - Prep Team Coach Hip Hop & Tumbling Instructor.jpg")
  //       .default
  //   }`,
  //   occupation: "Prep Team Coach Hip Hop & Tumbling Instructor",
  // },
  // {
  //   name: "Armelia Hartle",
  //   personPhoto: `${
  //     require("src/images/Armelia Hartle- Ballet Instructor.jpg").default
  //   }`,
  //   occupation: "Ballet Instructor",
  // },
  // {
  //   name: "Rebecca Derst",
  //   personPhoto: `${
  //     require("src/images/Rebecca Derst  - Ballet Instructor.jpg").default
  //   }`,
  //   occupation: "Ballet Instructor",
  // },
  // {
  //   name: "Mercedes Green",
  //   personPhoto: `${
  //     require("src/images/Mercedes Green - Hip Hop & Tumbling Instructor.jpg")
  //       .default
  //   }`,
  //   occupation: "Hip Hop & Tumbling Instructor",
  // },
  // {
  //   name: "Darrell Jordan",
  //   personPhoto: `${
  //     require("src/images/Darrell Jordan - Studio Operations Director.jpg")
  //       .default
  //   }`,
  //   occupation: "Studio Operations Directors",
  // },
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
