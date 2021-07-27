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

    ul.phone-email {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      width: 50%;
      position: relative;

      li {
        width: 30%;
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
          left: -3%;
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

      div {
        width: 35%;
      }

      .identity {
        div {
          height: 4rem;
          margin-bottom: 1.5rem;
          width: 100%;
          padding-top: 4%;

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
        textarea {
          height: 95%;
          background-color: transparent;
          border-style: hidden;
          border: 1px solid #4a4a4a;
          padding-left: 5%;
          padding-top: 10%;
          color: #fff;
        }
      }

      .button-submit {
        position: absolute;
        bottom: -15%;
        left: 50%;
        transform: translateX(-35%);
        
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
