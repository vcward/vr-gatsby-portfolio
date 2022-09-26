import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    line-height: 1.5rem;
    font-weight: 400;
    background-color: #010E1B;
    color: #F9F9F9;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: 0;
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: normal;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    color: #21EDC1;
    line-height: normal;
  }

  .section-title {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: #21EDC1A3;
    font-size: 3rem;
  }

  .error-page a {
    color: #21EDC1;
  }
`

export default GlobalStyle