import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="expand">
      <NavLink to="/contacto">Contacto</NavLink>
      </div>
    </div>
  );
};

export default Footer;
