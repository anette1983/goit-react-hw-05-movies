import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import styled from 'styled-components';
import { StyledHeader, StyledNavLink } from './Layout.styled';

// const StyledNavLink = styled(NavLink)`
//   color: #212121;
//   font-size: 22px;
//   display: block;
//   padding-top: 16px;
//   padding-bottom: 16px;
//   &.active {
//     color: red;
//   }
// `;

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <ul>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </ul>
        </nav>
      </StyledHeader>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
