import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }

  html, border-style, #root {
    height: 100%auto;
  }

  *, input, button {
    border: 0;
    text-decoration: none;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
