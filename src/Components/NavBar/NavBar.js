import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import Logo from "../../Images/AnimeM.jpg";
import LogoDesktop from "../../Images/anime.jpg";
import Hamburger from "hamburger-react";
import { useAnime } from "../../Context/contex";

const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #172c3f;
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
  @media (min-width: 780px) {
    display: none;
  }
`;
const TheLogoDesktop = styled.img`
  display: none;
  @media (min-width: 780px) {
    display: block;
    height: 370px;
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
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

  @media (min-width: 780px) {
    display: none;
  }
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
  @media (min-width: 780px) {
    width: 630px;
  }
  @media (min-width: 1080px) {
    width: 830px;
  }
  @media (min-width: 1380px) {
    width: 1030px;
  }
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
  background-color: #172c3f;
  font-family: 'Roboto', sans-serif;
`;

const Li = styled.li`
  padding: 10px;
  margin: 10px;
  color: white;
`;
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const { dragonBall, setDragonBall, setNaruto, naruto } = useAnime();

  const seeNaruto = () => {
    if (dragonBall) {
      setDragonBall(false);
      setNaruto(true);
    }
  };

  const seeDbz = () => {
    if (naruto) {
      setDragonBall(true);
      seeNaruto(false);
    }
  };

  return (
    <>
      <Nav>
        <TheLogo alt="Anime" src={Logo} />
        <TheLogoDesktop alt="Anime" src={LogoDesktop} />

        <SectionHmb>
          <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
        </SectionHmb>

        <Ul value={isOpen}>
          <Li onClick={seeDbz}>Dragon Ball Z</Li>
          <Li onClick={seeNaruto}>Naruto</Li>
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
