import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-family: 'Fraunces', serif;
        weight: 800;
        color: var(--white);
    }

    h2, h3, h4, h5, h6 {
        font-family: 'Fraunces', serif;
        weight: 700;
    }

    p, span {
        font-family: 'Barlow', sans-serif;
        weight: 600;
    }

    :root {
        --soft-red: hsl(7, 99%, 70%);
        --yellow:  hsl(51, 100%, 49%);
        --desatured-cyan: hsl(167, 40%, 24%);
        --dark-blue: hsl(198, 62%, 26%);
        --moderate-cyan: hsl(168, 34%, 41%);

        --desatured-blue: hsl(212, 27%, 19%);
        --darkest-grayish-blue: hsl(213, 9%, 39%);
        --dark-grayish-blue: hsl(232, 10%, 55%);
        --grayish-blue: hsl(210, 4%, 67%);
        --white: hsl(0, 0%, 100%);
    }
`

export default GlobalStyle