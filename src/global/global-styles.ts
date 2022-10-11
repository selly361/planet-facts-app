import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        -webkit-tap-highlight-color: none;
    }

    body, #root {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }
`