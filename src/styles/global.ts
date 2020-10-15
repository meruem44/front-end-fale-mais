import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    body {
        background-color: #312e28;
        font-family: 'Ubuntu', sans-serif;
        color: #fff;
    }

    body , input , button {
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;