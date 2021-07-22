import styled from "styled-components";

const AboutStyled = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  position: relative;

  section {
    min-height: 85vh;
  }

  .profile {
    display: flex;
    align-items: center;
    width: 35%;

    .profile-image {
      width: 240px;
      height: auto;
      position: relative;
    }

    .square-deco {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 100%;
      height: 100%;
      background: transparent;
      border: 3px solid #0070f3;
    }
  }

  .description {
    width: 60%;
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .presentation {
      margin-bottom: 2rem;
      color: #fff;
      strong {
        color: #0070f3;
      }
    }

    .profile-phrase {
      margin-bottom: 2rem;
      color: #fff;
      strong {
        color: #0070f3;
      }
    }

    .description-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        display: flex;
        flex-direction: column;
        width: 40%;
        margin-bottom: 1rem;
        color: #fff;
        span {
          color: #0070f3;
          font-weight: 600;
        }
      }
    }
    @media (max-width: 700px) {
      
      margin-top: 0;
    }

    
  }
  @media (max-width: 1160px) {
      width: 95%;
      justify-content: start;
    }
    @media (max-width: 850px) {
      width: 100%;
      justify-content: space-around;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;
export default AboutStyled;
