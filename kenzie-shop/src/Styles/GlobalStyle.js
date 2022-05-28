import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, header, main, div, footer, a, figure, hr, img, svg, ::before, p, h1, h2, h3, h4, section{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: var(--gray0);
    }

    :root{
        --gray0: #f5f5f2;
        --gray1: #a2a3a0;
        --blue: #3d50b3;
        font-size: 8px;
    }
`