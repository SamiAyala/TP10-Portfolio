import "./Layout.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from './Footer';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useContext } from "react";
import { favoritosContext } from "../context/context";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -14,
    top: 8,
    paddingRight:8,
  },
}));

const Layout = () => {
  const favoritosC = useContext(favoritosContext);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/misCreaciones">Mis proyectos</NavLink>
              </li>
              <li>
                <StyledBadge badgeContent={favoritosC.favoritos.length} color="primary">
                  <NavLink to="/favoritos">Favoritos</NavLink>
                </StyledBadge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
