import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background:#07bae8;
    font-family: Open-Sans, Helvetica, Sans-Serif;
   font-size: larger;
   text-align: center;
  }
  h1{text-align:center;
    padding-top: 1em;
    font-family: caption;
  }
  
`;

export default GlobalStyle;
