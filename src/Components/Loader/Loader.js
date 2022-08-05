import React from "react";
import styled from "styled-components";
import "./Loader.css";

const Main = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Main>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Main>
  );
};

export default Loader;
