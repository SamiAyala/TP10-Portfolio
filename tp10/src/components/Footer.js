import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="expand">
        <ul className="ul">
          <li><NavLink to="/contacto">Contacto</NavLink></li>
          <li><NavLink className={"linkedIn"} onClick={() => window.location.replace('https://www.linkedin.com/in/samir-ayala-301798277/')}>LinkedIn</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
