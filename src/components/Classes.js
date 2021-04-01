import React from "react";
import styled from "styled-components";
import ImageOne from "../images/busybee.svg";
import { Button } from "./Button";

export const Section = styled.section`
  background: black;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  background: black;
  border-top: 4px solid #efe337;
  border-bottom: 4px solid #efe337;
  padding: 3rem 2rem;
  position: relative;
`;

export const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const ColumnL = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
  // width: 60%;
  // height: 30vw;

  @media screen and (max-width: 768px) {
    width: 45%;
  }
`;

export const Content = styled.div`
  flex: 0 0 70%;
  height: 100%;

  h1 {
    color: #efe337;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    color: #efe337;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
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
    top: -50px;
    width: 50%;
    margin: 0 auto;
    left: 30vw;
  }
`;

export const Image = styled.img`
  height: 70%;
  width: auto;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 70%;
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
              <h1>Classes</h1>
              <p>
                We offer Ballet, Jazz, Tumbling, Stretching & Conditioning, and
                Hip Hop dance classes for children from ages 4-17.
              </p>
              <Button primary="true" target="_blank" to="/schedule">
                See Full Schedule
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
