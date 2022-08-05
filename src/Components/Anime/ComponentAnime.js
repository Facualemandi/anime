import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAnime } from "../../Context/contex";

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;
const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  padding: 5px;
  color: black;
`;

const Section = styled.section`
  margin: 5px;
  height: auto;
  min-height: 390px;
  color: white;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.767);
`;

const NavL = styled(NavLink)`
  text-decoration: none;
`;

const ComponentAnime = ({ el }) => {
  
  const { title } = el;
  const { getAnime } = useAnime();

  return (
    <>
      <NavL to={`/description/${el.title}`}>
        <Section onClick={() => getAnime(el)}>
          <Image alt="" src={el.images.jpg.image_url} />
          <Title>{title}</Title>
        </Section>
      </NavL>
    </>
  );
};

export default ComponentAnime;
