import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*:focus, *:active {
      -webkit-tap-highlight-color: transparent;
    }


    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
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