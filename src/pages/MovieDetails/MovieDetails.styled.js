import styled from "styled-components";

export const StyledWrapperDiv = styled.div`
padding: 16px;
display: flex;
align-items: flex-start;
gap: 16px;
max-width: 80%;

`
export const StyledAdditionalDiv = styled.div`
padding: 16px;
border-top: 1px solid #ececec;
border-bottom: 1px solid #ececec;
ul {
    /* list-style: inside; */
    margin: 16px;
}
li {
    margin-bottom: 8px;
}
a {
    /* color: inherit;
    font-size: 18px; */
    color: black;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),transform 250ms cubic-bezier(0.4, 0, 0.2, 1),-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus, &:active {
        color: orangered;
}
}
`