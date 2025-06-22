import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "/assets/logo.png"; // adjust if needed

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <>
      <div className="nav-brand">
        <img className="nav-logo" src={logo} alt="Ege Başarı Logo" />
      </div>

      <nav className="navbar">
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={toggleMenu}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>
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
    </>
  );
}

export default Navbar;
