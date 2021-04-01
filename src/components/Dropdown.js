import React from "react";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropdownContainer = styled.div`
  position: fixed;
  background: #efe337;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  overflow: visible;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 80vw;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)``;

const DropdownWrapper = styled.div`
  margin-top: 10vw;
`;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 0;
`;

const DropdownLink = styled(Link)`
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  font-size: 1.5rem;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: black;
    color: #efe337;
    text-decoration: underline;
  }
`;

const BtnWrap = styled.div`
  margin-top: -2vw;
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button big="true" to="/contact" round="true">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
