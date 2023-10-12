import "./Layout.css";
import { Link, NavLink, Outlet } from "react-router-dom";

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
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
