import styled from "styled-components";

const ContactStyled = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: auto;
  padding-top: 10%;

  .contact {
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 50vh;
    position: relative;
    border: 1px solid white;
    flex-wrap: wrap;
    padding-top: 5%;
    padding-bottom: 5%;

    @media (max-width: 850px) {
      flex-direction: column;
    }

    @media (max-width: 630px) {
      margin-top: 3rem;
    }

    ul.phone-email {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      min-width: 10%;
      position: relative;

      @media (max-width: 850px) {
        width: 70%;
        flex-wrap: wrap;
        flex-direction: row;
      }

      li {
        width: 100%;
        height: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        color: #fff;
        position: relative;
        padding-left: 2%;

        &::before {
          position: absolute;
          content: "";
          top: 4%;
          left: -20%;
          width: 10px;
          height: 10px;
          background-color: #0070f3;
        }
      }
    }

    form {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      position: relative;

      @media (max-width: 1042px) {
      }

      @media (max-width: 850px) {
        width: 100%;
      }

      .identity {
        @media (max-width: 850px) {
          display: flex;
          width: 85%;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        div {
          height: 4rem;
          margin-bottom: 1.5rem;
          width: 100%;
          padding-top: 4%;

          @media (max-width: 850px) {
            width: 40%;
          }

          input {
            width: 100%;
            border-style: none;
            height: 100%;
            background-color: transparent;
            border: 1px solid #4a4a4a;
            padding-left: 5%;
            color: #fff;
          }
        }
      }

      .message {
        height: 9.5rem;
        margin-top: -2rem;
        textarea {
          height: 100%;
          background-color: transparent;
          border-style: hidden;
          border: 1px solid #4a4a4a;
          padding-left: 5%;
          padding-top: 10%;
          color: #fff;
        }
        @media (max-width: 1042px) {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          justify-content: center;
          padding-left: 1rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 850px) {
          margin-bottom: 10rem;
        }
      }

      .button-submit {
        position: absolute;
        bottom: -25%;
        right: 4%;
        transform: translateX(-35%);

        @media (max-width: 1042px) {
          bottom: -2rem;
          left: 10%;
        }

        @media (max-width: 850px) {
          bottom: -0rem;
         left: 55%;
      }

        button {
          background-color: #fff;
          padding: 0.5rem 1rem;
          color: #0070f3;
          cursor: pointer;
        }
      }
    }
  }
`;

export default ContactStyled;
