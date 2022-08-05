import React from "react";
import styled from "styled-components";
import { useAnime } from "../../Context/contex";

const Main = styled.main`
  background-color: #0a1c2c;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
`;

const SectionOne = styled.section`
  width: 100%;
  padding: 10px;
`;
const SectionTwo = styled.section`
  width: 100%;
  padding: 10px;
`;
const Img = styled.img`
  width: 80%;
  height: 450px;
  border-radius: 5px;
  display: flex;
  margin: auto;
`;

const SectionLanguaje = styled.section`
  height: auto;
  background-color: #172c3f;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: 15px;
`;
const H3 = styled.h3`
  padding: 5px;
  font-family: "Montserrat", sans-serif;
`;
const Languaje = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  padding: 5px;
`;
const Country = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  padding: 5px;
  font-weight: lighter;
`;

const DivOne = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #172c3f;
  border-radius: 5px;
  width: 80%;
  margin: auto;
  margin-top: 15px;
  padding: 5px;
`;

const DivTwo = styled.div`
  margin-top: 15px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: lighter;
  letter-spacing: 0.5px;
`;
const Users = styled.span`
  font-weight: lighter;
`;
const ScoreP = styled.p`
  font-size: 24px;
`;

const ScorePoints = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

const Details = styled.p`
  width: 100%;
  display: flex;
  margin-top: 10px;
  border-radius: 2px;
`;

const SectionInfo = styled.section`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background-color: #172c3f;
  padding: 5px;
  margin-top: 25px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: 15px;
`;

const SpanInfo = styled.span`
  font-size: 14px;
  font-weight: lighter;
  padding-top: 10px;
`;

const Parragraph = styled.p`
  font-weight: bold;
  padding: 5px;
`;

const Description = () => {
  const { anime, parseLocalAnime } = useAnime();

  console.log(anime);
  const {
    title,
    title_english,
    title_japanese,
    score,
    scored_by,
    rank,
    popularity,
    members,
    synopsis,
    type,
    episodes,
    status,
    source,
    duration,
    rating,
    season,
  } = parseLocalAnime;
  const img = parseLocalAnime.images.webp.large_image_url;
  const broadcast = Object.values(parseLocalAnime.broadcast);
  console.log(broadcast);
  const newBroadcast = [broadcast.join("-")];
  const aired = parseLocalAnime.aired.from;
  const producers = parseLocalAnime.producers.map((el) => el.name);
  const licensors = parseLocalAnime.licensors.map((el) => el.name);
  const studios = parseLocalAnime.studios.map((el) => el.name);
  const genres = parseLocalAnime.genres.map((el) => el.name);
  const newGenres = [genres.join(", ")];
  const themes = parseLocalAnime.themes.map((el) => el.name);
  const nameThemes = [themes.join(", ")];
  const demographic = parseLocalAnime.demographics.map((el) => el.name);
  const premiered = parseLocalAnime.aired.prop.from.year;

  return (
    <>
      <Main>
        <SectionOne>
          <Img alt={title} src={img} />

          <SectionLanguaje>
            <H3>Idiomas</H3>
            <Languaje>Nombre:</Languaje>
            <Country>{title}</Country>
            <Languaje>Ingles:</Languaje>
            <Country>{title_english}</Country>
            <Languaje>Japone:</Languaje>
            <Country>{title_japanese}</Country>
          </SectionLanguaje>

          <DivOne>
            <ScoreP>Score</ScoreP>
            <ScorePoints>{score}</ScorePoints>
            <p>
              {scored_by} <Users>users</Users>
            </p>

            <Details>Ranked #{rank}</Details>
            <Details>Popularity #{popularity}</Details>
            <Details>Members #{members}</Details>
          </DivOne>

          <SectionInfo>
            <h4>Information:</h4>
            <Parragraph>
              Type: <SpanInfo>{type}</SpanInfo>
            </Parragraph>
            <Parragraph>
              Episodes: <SpanInfo>{episodes} </SpanInfo>
            </Parragraph>
            <Parragraph>
              Status: <SpanInfo>{status}</SpanInfo>
            </Parragraph>
            <Parragraph>
              Aired: <SpanInfo>{aired} </SpanInfo>
            </Parragraph>
            <Parragraph>
              Premiered:
              <SpanInfo>
                {season} {premiered}
              </SpanInfo>
            </Parragraph>
            <Parragraph>
              Broadcast:{" "}
              <SpanInfo>{`${
                broadcast.length === 0 ? "No tiene" : newBroadcast
              }`}</SpanInfo>
            </Parragraph>
            <Parragraph>
              Producers:
              <SpanInfo>{`${
                producers.length === 0 ? "No tiene" : producers
              }`}</SpanInfo>
            </Parragraph>
            <Parragraph>
              Licensors: <SpanInfo>{licensors} </SpanInfo>
            </Parragraph>
            <Parragraph>
              Studios: <SpanInfo>{studios} </SpanInfo>
            </Parragraph>
            <Parragraph>
              Source: <SpanInfo>{source}</SpanInfo>
            </Parragraph>
            <Parragraph>
              Genres: <SpanInfo>{newGenres}</SpanInfo>
            </Parragraph>
            <Parragraph>
              Themes: <SpanInfo>{nameThemes} </SpanInfo>
            </Parragraph>
            <Parragraph>
              Demographic: <SpanInfo>{demographic}</SpanInfo>
            </Parragraph>
            <Parragraph>
              Duration: <SpanInfo>{duration}</SpanInfo>
            </Parragraph>
            <Parragraph>
              Rating: <SpanInfo>{rating}</SpanInfo>
            </Parragraph>
          </SectionInfo>
        </SectionOne>

        <SectionTwo>
          <DivTwo>
            <h4>Synopsis:</h4>
            <p>{synopsis}</p>
          </DivTwo>
        </SectionTwo>
      </Main>
    </>
  );
};

export default Description;
