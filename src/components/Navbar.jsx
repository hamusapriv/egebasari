import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "/assets/logo.png"; // Adjust the path as necessary

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img className="nav-logo" src={logo} alt="Ege Basari Logo" />
      </div>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <ul
        className={`nav-menu ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
