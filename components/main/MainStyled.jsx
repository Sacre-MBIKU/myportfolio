import styled from "styled-components";

const MainStyled = styled.main`
  position: relative;
  min-width: 20rem;
  min-height: 25rem;
  margin-left: 20%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15rem;
  justify-content: center;
  transform: translateY(25%);

  section {
    justify-content: center;
  }
  .go-down-button {
    position: absolute;
    right: 14%;
    bottom: 5%;
    background-image: url('/images/go_down.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 1.5rem;
    height: 2rem;
    animation: goDown .4s infinite alternate;
  }


@keyframes goDown {
  from {
    transform: translateY(-2%);
  }

  to {
    transform: translateY(12%);
  }
}

  .self-presentation {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      margin-bottom: 2rem;
      color: #4a4a4a;
      font-size: 2rem;
      font-weight: bold;
        width: 90%;
    }

    h1 {
      margin-bottom: 2rem;
      color: #fff;
      font-size: 2.5rem;
      font-weight: bold;
      position: relative;
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h2 {
      margin-bottom: 2rem;
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      display: flex;
      flex-wrap: wrap;
      width: 90%;

      span {
        width: 100%;
      }
    }

    button {
      width: 9rem;
      padding: 0.5rem 1rem;
      background-color: #0070f3;
      color: #fff;
      font-weight: 700;
      font-size: 0.9rem;
    }
  }

  .ui-ux-section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    @media (max-width : 950px ) {
      padding: 0 35%;
    }

  }

  @media (max-width : 950px ) {
    margin-left: 0;
    min-width: 100%;
    justify-content: center;
    }
`;

export default MainStyled;
