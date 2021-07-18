import { createGlobalStyle } from "styled-components";

const GlobalStyes = createGlobalStyle`
    
    body {
        width: 100vw;
        height: auto;
        overflow-x: hidden;
        background-color: #282828;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    * {
        padding: 0;
        margin: 0;
    }

    li{
        list-style: none;
    }
    button {
        border-style: none;
    }

`;

export default GlobalStyes;
