import React from "react";
import { useQuery } from "@tanstack/react-query";
import ComponentAnime from "./ComponentAnime";
import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  margin: auto;
  background-color: #172c3f;
  padding: 15px;

  @media (min-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
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
        {data.data.map((el) => (
          <ComponentAnime key={el.mal_id} el={el} />
        ))}
      </Main>
    </>
  );
};

export default Anime;
