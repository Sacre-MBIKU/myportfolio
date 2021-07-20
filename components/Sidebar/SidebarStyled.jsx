import styled from "styled-components";

const SidebarStyled = styled.aside`

position: absolute;
top : ${({topPosition}) => topPosition ? `${topPosition}%` : "25%"};
left : ${({horizontalPosition}) => horizontalPosition ? `${horizontalPosition}%` : "0%"};
width: 180px;
height: 60%;
background-color: #0070f3;
`;

export default SidebarStyled;