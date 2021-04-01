import React from "react";
import styled from "styled-components/macro";
import bee from "../images/bee.svg";
import teamOne from "../images/DS4.jpg";
import teamTwo from "../images/DS15.jpg";
import teamThree from "../images/DS12.jpg";
import teamFour from "../images/DS16.jpg";
import teamFive from "../images/DS5.jpg";
import teamSix from "../images/DS11.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

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
  width: 160px;
  flex-direction: row;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Icon = styled.img`
  width: 20%;
  height: auto;
  margin-right: 2vw;
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
            <Image src={teamOne} alt="Busy Bees" />
            <h2>Busy Bees - Jazz</h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>4-6 yrs old</p>
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
              alt="Pollinators"
              css={`
                margin-top: 80px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>Pollinators - Hip Hop</h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>7-10 yrs old</p>
            </InfoText>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <Image src={teamThree} alt="Wild Honey" />
            <h2>Wild Honey - Variety</h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>8-12 yrs old</p>
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
              src={teamFour}
              alt="Honey Bees"
              css={`
                margin-top: -80px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>Honey Bees - Hip Hop</h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>12-16 yrs old</p>
            </InfoText>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <Image src={teamFive} alt="MissBEEhavin" />
            <h2>MissBEEhavin' - Variety</h2>
            <InfoText>
              <Icon src={bee} alt="bee icon" />
              <p>12-16 yrs old</p>
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
