import styled, { css } from "styled-components";

const NavbarStyled = styled.header`
  width: 100%;
  min-height: 7rem;
  border-bottom: 3px solid #0070f3;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  transition: all 0.5s ease-in;

  nav {
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-in;
    position: relative;
    transition: all 0.5s ease-in;

    @media (max-width: 873.5px) {
      width: 95%;
    }
  }

  ul {
    display: flex;
    width: 60%;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
    transition: all 0.5s ease-in;

    @media (max-width: 873.5px) {
      width: 80%;
      align-items: center;
      transition: all 0.5s ease-in;
    }
    @media (max-width: 570px) {
      flex-direction: column;
      padding: 5%;
      height: 15rem;
      display: ${({ navDisplay }) => (navDisplay ? "flex" : "none")};
      transition: all 0.5s ease-in;
    }
  }
`;

export const ListLink = styled.li`
  margin-bottom: 1.5rem;
  color: ${({ listColor }) => (listColor ? "#0070f3" : "#fff")};
  font-weight: 500;
`;

export const Button = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  background-image: url(${({ image }) => (image ? image : "")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-self: flex-end;
  margin-bottom: 1.5rem;
  cursor: pointer;
  display: none;
  transition: all 0.5s ease-in;

  @media (max-width: 570px) {
    display: ${({ navDisplay }) => (!navDisplay ? "flex" : "none")};
    ${({ crossButton }) =>
      !crossButton
        ? ""
        : css`
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: 2%;
            right: 5%;
            transition: all 0.5s ease-in;
          `}
  }
`;

export default NavbarStyled;
