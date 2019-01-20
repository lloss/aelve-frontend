import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Segoe UI';
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