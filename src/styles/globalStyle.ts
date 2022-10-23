import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.global.defaultFontFamily} sans-serif;
    font-size: ${({ theme }) => theme.global.defaultFontSize};
  }
`;

export default GlobalStyle;