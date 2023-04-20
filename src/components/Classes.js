import React from "react";
import styled from "styled-components";
import ImageOne from "../images/busybee.svg";
import { Button } from "./Button";

export const Section = styled.section`
  background: #efe337;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  background: white;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  padding: 3rem 2rem;
  position: relative;
  overflow-y: hidden;
`;

export const Wrap = styled.div`
  max-width: 1200px;
  height: 24vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow: visible;

  @media screen and (max-width: 768px) {
    height: 40vw;
  }
`;

export const ColumnL = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
  overflow-y: hidden;

  // width: 60%;
  // height: 30vw;

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: none;
    width: 80%;
    height: 90vw;
    padding: 0;
    margin: 0;
    margin-top: -8vw;
  }
`;

export const Content = styled.div`
  flex: 0 0 50%;
  height: 100%;
  overflow: visible;

  h1 {
    color: black;
    margin-bottom: 2rem;
    font-size: 2rem;
    paddingL 2vw;
  }

  p {
    color: black;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 140%;
    width: 100vw;
    height: 60vw;
    margin-top: 0;
  }
`;

export const ColumnR = styled.div`
  position: absolute;
  top: -18vw;
  right: 0;
  max-width: 850px;
  height: 200%;
  width: 45%;
  padding-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 115%;
    top: -30px;
    width: 30%;
    margin: 0 auto;
    left: 70vw;
  }
`;

export const Image = styled.img`
  height: 45%;
  width: auto;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 50%;
  }
`;

const Classes = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnL>
            <Content
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="center-bottom"
            >
              <h1>
                Classes <i>(ages 3+)</i>
              </h1>
              <p>
                We offer Ballet, Jazz, Tumbling, Aerial Class, Kids Hip Hop,
                Teen/Adult Hip Hop, Creative Movement, Princess Ballerina, Adult
                Stretch, Adult Tumbling, Adult Ballet, and Adult Jazz.
              </p>
              <Button target="_blank" to="/schedule">
                See Full Schedule & Pricing
              </Button>
            </Content>
          </ColumnL>
          <ColumnR>
            <Image
              src={ImageOne}
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center-bottom"
            />
          </ColumnR>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Classes;
