import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: red;
  }
`;

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <StyledNavLink
                
                to="/"
              >
                Home
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                
                to="/movies"
              >
                Movies
              </StyledNavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
