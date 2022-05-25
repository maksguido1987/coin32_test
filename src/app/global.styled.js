import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #242424;
    --black-light: rgba(255, 255, 255, 0.07);
    --gray: #6C6C6C;
    --gray-light: #c7c7c7;
    --white: #E2E2E2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    width: 100%;
    height: 100%;

    background-color: var(--black);
  
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: var(--white);
  }
`;
