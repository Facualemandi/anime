import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import Logo from "../../Images/AnimeM.jpg";
import Hamburger from "hamburger-react";

const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TheLogo = styled.img`
  width: 100vw;
  height: 180px;
  @media (min-width: 630px) {
    height: 200px;
  }
  @media (min-width: 700px) {
    height: 230px;
  }
`;
const SectionHmb = styled.section`
  position: absolute;
  background-color: rgba(247, 247, 247, 0.774);
  margin: 10px;
  border-radius: 10px;
  top: 0px;
  left: 0px;
  width: max-content;
  z-index: 1500;
`;

const SectionSearch = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  width: 80vw;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 80vw;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

const IconSearch = styled(BsSearch)`
  color: grey;
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const Ul = styled.ul`
  position: absolute;
  top: 0px;
  left: 0px;
  padding-top: 80px;
  width: 50vw;
  transform: ${({ value }) => (value ? "translateX(0%)" : "translateX(-100%)")};
  transition: 0.5s;
  z-index: 1000;
  background-color: #6c8097;
`;

const Li = styled.li`
  padding: 10px;
  margin: 10px;
  color: white;
`;
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Nav>
        <TheLogo alt="Anime" src={Logo} />

        <SectionHmb>
          <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
        </SectionHmb>

        <Ul value={isOpen}>
          <Li>Facu</Li>
          <Li>Facu</Li>
          <Li>Facu</Li>
          <Li>Facu</Li>
          <Li>Facu</Li>
        </Ul>

        <SectionSearch>
          <Input type={"text"} placeholder="hola" />
          <IconSearch />
        </SectionSearch>
      </Nav>
    </>
  );
};

export default NavBar;
