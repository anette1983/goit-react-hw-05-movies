import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
max-width: 1200px;
margin: 0 auto;
`

export const StyledHeader = styled.header`
padding: 0 16px;
border-bottom: 1px solid #ececec;
box-shadow: 0px 1px 1px rgba(0,0,0,.12), 0px 4px 4px rgba(0,0,0,.06), 1px 4px 6px rgba(0,0,0,.16);
& ul {
    display: flex;
    
}
& li {
    margin-right: 32px;
}

`

export const StyledNavLink = styled(NavLink)`
  color: #212121;
  font-size: 22px;
  display: block;
  padding-top: 16px;
  padding-bottom: 16px;
  &.active {
    color: orangered;
  }
`;