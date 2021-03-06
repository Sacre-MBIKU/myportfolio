import styled from "styled-components";

const SidebarStyled = styled.aside`

position: absolute;
top : ${({topPosition}) => topPosition ? `${topPosition}%` : "25%"};
left : ${({horizontalPosition}) => horizontalPosition ? `${horizontalPosition}%` : "0%"};
width: 15%;
height: 450px;
background-color: #0070f3;

@media (max-width : 950px ) {
    display: none;
}
`;

export default SidebarStyled;