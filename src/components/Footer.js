import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Section = styled.section`
  background: black;
  color: white;
  width: 100%;
  min-height: 600px;
  padding: 3rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Quote = styled.div`
  flex: 1;
  padding: 2rem 1rem;

  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
    color: #efe337;
  }
`;
const FooterInfo = styled.div`
  padding-left: 5rem;
  padding-right: 0rem;
  padding-top: 5rem;
  padding-bottom: 0rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #efe337;
    }
  }

  h4 {
    color: #efe337;
  }

  p {
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

const FooterBottom = styled.div`
  padding: 2rem; 0rem
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 95%;
  justify-content: center;
  align-items: center;

  media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 2vw;
  color: #efe337;

  &:hover {
    transform: scale(1.06);
  }
`;

const Instagram = styled(FaInstagram)`
  ${Icons}
`;
const Facebook = styled(FaFacebookF)`
  ${Icons}
`;
const BookNow = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  media screen and (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3>Join Our Hive!</h3>
          </Quote>
          <FooterInfo>
            <h4>Contact Us</h4>
            <p> (912) 275-3764</p>
            <p>dancesavannah912@gmail.com</p>
            <p>14045 Abercorn St Suite 11526, Savannah, Ga 31419</p>
          </FooterInfo>
          <FooterInfo>
            <h4>Sitemap</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/teams">Our Teams</Link>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <Link to="/facebook" target="_blank">
              <Facebook />
            </Link>
            <Link to="/instagram" target="_blank">
              <Instagram />
            </Link>
            <BookNow>
              <Button primary="true" to="/schedule" target="_blank">
                Book A Class Today
                <IoMdArrowRoundForward />
              </Button>
            </BookNow>
          </SocialIcons>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
