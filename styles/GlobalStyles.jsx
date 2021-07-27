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
        position: relative;
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

    a{
        text-decoration : none;
        color: none;
    }

    footer {
        position: absolute;
        width: 60%;
        height: 5rem;
        background-color: #0070f3;
        top: 100%; 
        left: 50%;
        transform: translateX(-55%);
        display: flex;
        ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;

            li{
                margin-right: 1rem;
            }
            
        }
        ul :nth-child(2n) {
                    margin-right: 1.5rem;
                }
                ul :nth-child(3n) {
                    margin-left: 1.5rem;
                }
    }

    .button-up-to-page {
        position: absolute;
        left: 50%;
        bottom: 3rem;
        transform: translateX(-80%);
        border-style: none;
        
        button {
            border-style: none;
            padding: 1rem .5rem;
        }
        
    }

`;

export default GlobalStyes;
