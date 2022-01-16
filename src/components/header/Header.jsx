import { Link } from "react-router-dom";
import { Logo } from "../logo/Logo";
import { AccessForm } from "../accessForm/AccessForm";
import "./header.scss";

export const Header = () => {
  return (
    <div className="headerWrapper">
      <AccessForm />
      <div className="logo">
        <Logo />
      </div>
      <div className="navigation">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/documentacion">
            <li>Documentacion</li>
          </Link>

          <Link to="/contact-form">
            <li>Contact</li>
          </Link>
          {/* <Link to="/complains-form">
						<li>Formulario de quejas</li>
					</Link> */}
        </ul>
      </div>
    </div>
  );
};
