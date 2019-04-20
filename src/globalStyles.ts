import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background-color: #242e33;
    font-size: 100%;
    color: #b8ced9;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const Container = styled.div`
  width: 950px;
  margin: 0 auto;
`

export const AppWrap = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1 0 auto;
`