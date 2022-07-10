import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Gantari:wght@300;400;500;600;700&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    /* background-color: #f1f5f8 ; */
    background-color: #b1d8f7 ;
    font-size: 1rem;
  }

  ul{
    list-style-type: none;
    padding:0;
    margin: 0;
  }

  a{
    text-decoration:none;
  }
`;