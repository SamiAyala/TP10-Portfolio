import "./Layout.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from './Footer';

const Layout = () => {
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
              <NavLink to="/misCreaciones">Mis Creaciones</NavLink>
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
