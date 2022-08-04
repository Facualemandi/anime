import React from "react";
import { useQuery } from "@tanstack/react-query";
import ComponentAnime from "./ComponentAnime";
import styled from "styled-components";

const Main = styled.main`
  background-color: #172c3f;
  width: 100vw;
  @media (min-width: 780px) {
    position: absolute;
    top: 270px;
  }
`;

const SectionMain = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  margin: auto;
  padding: 15px;

  @media (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
    width: 780px;
  }
  @media (min-width: 1080px) {
    grid-template-columns: repeat(5, 1fr);
    width: 1080px;
  }
  @media (min-width: 1380px) {
    grid-template-columns: repeat(6, 1fr);
    width: 1380px;
  }
`;
const Anime = () => {
  const getAnime = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v4/anime?q=Dragon%20ball%20z&sfw"
    );

    return response.json();
  };

  const { data, status } = useQuery(["anime"], getAnime);

  console.log(data);

  if (status === "loading") {
    return <p>Obteniendo Datos</p>;
  }
  if (status === "error") {
    return <p>Ups, hubo un error</p>;
  }

  return (
    <>
      <Main>
        <SectionMain>
          {data.data.map((el) => (
            <ComponentAnime key={el.mal_id} el={el} />
          ))}
        </SectionMain>
      </Main>
    </>
  );
};

export default Anime;
