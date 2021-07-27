import { createGlobalStyle } from "styled-components";

const GlobalStyes = createGlobalStyle`
    
    html {
        
  scroll-behavior: smooth;
  width: 100vw;
}
    body {
        width: 100%;
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
  color: inherit;
        text-decoration : none;
        color: none;
        transition: all .5s ease-in ;
    }

    footer {
        position: absolute;
        width: 60%;
        height: 3rem;
        background-color: #0070f3;
        top:100%; 
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

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
        bottom: 3.5rem;
        transform: translateX(-80%);
        border-style: none;
        
        button {
            border-style: none;
            width: 2rem;
            height: 3rem;
            background-image: url("/images/up.svg");
            background-position: center;
            background-size: 80% cover;
            background-repeat: no-repeat;
            cursor: pointer;
        }
        
    }

`;

export default GlobalStyes;
