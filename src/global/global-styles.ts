import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        -webkit-tap-highlight-color: none;
    }

    body {
        width: 100vw;
        min-height: 100vh;
    }

    a {
        text-decoration: none;
    }
`