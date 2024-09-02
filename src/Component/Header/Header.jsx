import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container ">
        <span className="brand-name">
          <Link to="/">Ace Store</Link>
        </span>
        <ul className="nav-link_container">
          <li className="nav-link">
            <NavLink className="" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/explore/all" aria-current="page">
              Explore All
            </NavLink>
          </li>
        </ul>

        <div className="nav-overlay"></div>
      </nav>
    </header>
  );
};

export default Header;
