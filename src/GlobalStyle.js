import { createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&family=Nunito:wght@200;300;400;600;700&display=swap');
    :root {
        --purple-primary: #554DDE);
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavender-secondary: #6A6D9E;
        --dark-primary: #16194F;
        --border-colour: #CAB6F1;
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
    }

    body {
        background-color: var(--neutral-light);
        color: var(--lavender-secondary);
        font-size: 1.2rem;
    }

    a {
        color: inherit;
    }
    p{
        font-size: 1rem; 
        line-height: 1.5;
        text-align: left;
    }
    .small-heading {
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        span {
            color: var(--accent-pink);
        }
    }
`

export default GlobalStyle




