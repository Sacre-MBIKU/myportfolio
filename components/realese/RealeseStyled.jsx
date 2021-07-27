import styled from "styled-components";

const RealeseStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .realese {
    padding-top: 15%;
    padding-bottom: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      width: 80%;

      li {
        width: 300px;
        height: auto;
        box-shadow: 0px 0px 4px 4px #4a4a4a;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        margin-right: 1rem;
        position: relative;

        h4 {
          position: absolute;
          width: 100%;
          height: 50px;
          top: 0;
          left: 0;
          background-color: #1d1c1c;
          color: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          display: none;
          transition: all .5s ease-in;
          animation: project-title 1s;
        }

        @keyframes project-title{
          from {
            height: 0;
            color: transparent;
          } to {
            height: 50px;
            color: #fff;
          }
        }
        &:hover > h4, &:hover > a {
          display: flex;
        }

        a:hover {
          background-color: #0070f3;
          color: #fff;
        }

        a {
          position: absolute;
          bottom: -10%;
          left: 20%;
          transform: translateX(-10%);
          display: flex;
          justify-content: center;
          width: 80%;
          color: #0070f3;
          font-size: 0.8rem;
          justify-content: center;
          align-items: center;
          align-content: center;
          text-align: center;
          background-color: #ffffff;
          height: 40px;
          display: none;
          box-shadow: 0 4px 8px 0px #4a4a4a;
          transition: all .5s ease-in;
        }
      }
    }
  }
`;

export default RealeseStyled;
