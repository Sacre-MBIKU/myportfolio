import styled from "styled-components";

const SkillsStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    min-height: 85vh;
  }

  .skills {
    padding-top: 10%;
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
        width: 250px;
        height: 250px;
        border: 1px solid #4a4a4a;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;

        p {
          display: flex;
          justify-content: center;
          width: 90%;
          color: #fff;
          font-size: .9rem;
          align-content: center;
          text-align: center;
        }
      }
    }
  }
`;

export default SkillsStyled;
