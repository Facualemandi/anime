import React from "react";
import Anime from "../../Components/Anime/Anime";
import Naruto from "../../Components/Anime/Naruto";
import NavBar from "../../Components/NavBar/NavBar";
import { useAnime } from "../../Context/contex";

const Home = () => {
  const { dragonBall, naruto } = useAnime();
  return (
    <>
      <NavBar />
      {dragonBall && <Anime />}
      {naruto && <Naruto />}
    </>
  );
};

export default Home;
