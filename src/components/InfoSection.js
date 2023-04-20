import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0;
  background: black;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
    align-items: center;
  } ;
`;

const ColumnL = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 0rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    background: #efe337;
  }

  p {
    margin-bottom: 2rem;
    color: white;
  }
`;

const ColumnR = styled.section`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  pOne,
  pTwo,
  pThree,
  reverse,
  image,
  buttonLabel,
  link,
  target,
  delay,
}) => {
  return (
    <Section>
      <Container>
        <ColumnL
          reverse={reverse}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay={delay}
          data-aos-anchor-placement="center-bottom"
        >
          <h1>{heading}</h1>
          <p>{pOne}</p>
          <p>{pTwo}</p>
          <p>{pThree}</p>
          <Button to={link} target={target} primary="true">
            {buttonLabel}
          </Button>
        </ColumnL>
        <ColumnR reverse={reverse}>
          <img
            src={image}
            alt={heading}
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay={delay}
            data-aos-anchor-placement="center-bottom"
          />
        </ColumnR>
      </Container>
    </Section>
  );
};

export default InfoSection;
