import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  line-height: 1.6;
  min-height: 100vh;
  width: 100vw;
  font-family: "Inter";
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: rgba(0, 0, 0, 1);
  background-size: cover;
`;

export const TagLine = styled.h1`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 200;
  color: #ffffff;
  font-family: "Inter";
  span {
    color: #ff8800ff;
  }
  margin-bottom: 40px;
`;
