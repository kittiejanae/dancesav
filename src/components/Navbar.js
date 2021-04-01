import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { menuData } from "../data/MenuData";
import logo from "../images/logo.jpg";
import menu from "../images/hiveMenu.svg";
import { Button } from "./Button";

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
  z-index: 100;
  flex-direction: row;
  color: #000;
`;

const NavLink = css`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1vw;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    font-weight: bold;
  }
`;

const Logo = styled(Link)``;

const MenuBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 40px;
    height: 40px;
    background-image: url(${menu});
    background-size: contain;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 4vw;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">
        <img className="logo-img" src={logo} type="img/jpg" alt="logo" />
      </Logo>
      <MenuBars onClick={toggle} />

      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
