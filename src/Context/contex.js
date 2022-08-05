import { useContext, createContext, useState } from "react";

const getContext = createContext();

export const useAnime = () => {
  const context = useContext(getContext);

  return context;
};

export function TheContext({ children }) {
  const [anime, setAnime] = useState([]);
  const [dragonBall, setDragonBall] = useState(true);
  const [naruto, setNaruto] = useState(false);

  const getAnime = (el) => {
    setAnime(el);
    localStorage.setItem("AnimeDescription", JSON.stringify(el));
  };

  const getLocalAnime = localStorage.getItem("AnimeDescription");
  const parseLocalAnime = JSON.parse(getLocalAnime);

  return (
    <getContext.Provider
      value={{
        getAnime,
        anime,
        parseLocalAnime,
        dragonBall,
        naruto,
        setDragonBall,
        setNaruto,
      }}
    >
      {children}
    </getContext.Provider>
  );
}
