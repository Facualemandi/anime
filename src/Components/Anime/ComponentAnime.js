import React from "react";
import styled from "styled-components";

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
`;

const Section = styled.section`
  margin: 5px;
  height: auto;
  color: white;
  border-radius: 15px;
`;
const ComponentAnime = ({ el }) => {
  const { title } = el;

  return (
    <>
      <Section>
        <Image alt="" src={el.images.jpg.image_url} />
        <Title>{title}</Title>
      </Section>
    </>
  );
};

export default ComponentAnime;
