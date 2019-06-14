import { createGlobalStyle } from 'styled-components';

import reset from './reset';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet');

  ${reset};

  p, button, input, h1, a {
    font-family: 'Roboto';
    font-size: 1.8rem;
  }

  h1 {
    text-align: left;
    font-weight: bold;
    font-size: 3rem;
  }

  button {
    background-color: azure;
    color: blueviolet;
    border: 0.1rem solid blueviolet;
    border-radius: 0.5rem;

    &:hover {
      background-color: blueviolet;
      color: azure;
    }
  }

  input {
    border: 0.1rem solid blueviolet;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
`;

export default GlobalStyles;
