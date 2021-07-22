import styled from "styled-components";

const SectionTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: -4%;
  transform: translateX(-25%);

  h2 {
    font-size: 4rem;
    color: #4a4a4a;

    @media (max-width : 1160px ) {
      font-size: 3rem;
    }

    @media (max-width : 775px ) {
      font-size: 2.3rem;
    }
  }

  h3 {
    display: flex;
    justify-content: center;
    font-size: 1.7rem;
    color: #0070f3;

    
  }

  @media (max-width : 775px ) {
  transform: translateX(-50%);
    }
`;

export default SectionTitleStyled;
