import React from "react";
import styled from "styled-components/macro";
import bee from "../images/bee.svg";
import teamOne from "../images/Baebees.JPG";
import teamTwo from "../images/Barbees.JPG";
import teamThree from "../images/Pollinators.JPG";
import teamFour from "../images/HoneyBees.JPG";
import teamFive from "../images/VIBees.JPG";
import teamSix from "../images/DS11.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: hidden;
  background: black;

  @media screen and (max-width: 768px) {
    padding: 0rem 4rem;
  }
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
`;

const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 30px;
  width: 40vw;
  transition: 0.3s ease-in-out;

  h1 {
    background: #efe337;
    width: 25vw;
  }

  @media screen and (max-width: 768px) {
    text-align: start;
    margin-top: 16vw;

    h1 {
      width: 40vw;
    }
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 80%;
  width: 100%;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
    color: white;
  }

  p {
    color: white;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 18vw;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 60vw;
  }
`;

const InfoText = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  flex-direction: row;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Icon = styled.img`
  width: 10%;
  height: auto;
  margin-right: 1vw;
`;

const Teams = ({ image, name, ages }) => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            Check Out Our Hive
          </h1>
        </Heading>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <Image src={teamOne} alt="Baebees" />
            <h2>
              Baebees - <i>Competiton</i>
            </h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>Tiny Prep Variety</p>
            </InfoText>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <Image
              src={teamTwo}
              alt="Barbees"
              css={`
                margin-top: 80px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>
              Barbees - <i>Competition</i>
            </h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>Mini Elite Hip Hop</p>
            </InfoText>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <Image src={teamFour} alt="Honey Bees" />
            <h2>
              Honey Bees - <i>Competition</i>
            </h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>Youth Prep Hip Hop</p>
            </InfoText>
          </InfoWrap>
        </InfoRow>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <Image
              src={teamThree}
              alt="Pollinators"
              css={`
                margin-top: -80px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>
              Pollinators - <i>Competition</i>
            </h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>Mini Prep Hip Hop</p>
            </InfoText>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <Image src={teamFive} alt="V.I.Bees" />
            <h2>
              V.I.Bees - <i>Competition</i>
            </h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>Youth Co-Ed Hip Hop</p>
            </InfoText>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <Image
              src={teamSix}
              alt="FaBEElous"
              css={`
                margin-top: -80px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>FaBEElous - Hip Hop</h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>14-35 yrs old</p>
            </InfoText>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Teams;
