import styled from "styled-components";

export const StyledDiv = styled.div`
padding: 16px;

ul {
    list-style: inside;


    
}
li {
    margin-bottom: 8px;
}

a {
    color: inherit;
    font-size: 18px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),transform 250ms cubic-bezier(0.4, 0, 0.2, 1),-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus, &:active {
        color: red;
        
    }
}

`