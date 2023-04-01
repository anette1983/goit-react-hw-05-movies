import styled from "styled-components";

export const StyledForm = styled.form`
padding: 16px;
input {
    padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
}
button {
    padding: 8px 32px;
    border-radius: 4px;
    font: inherit;
    margin-left: 4px;
    background-color: transparent;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),transform 250ms cubic-bezier(0.4, 0, 0.2, 1),-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus, &:active {
        color: orangered;
}

}

`