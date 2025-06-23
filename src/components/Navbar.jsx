import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "/assets/logo.png"; // adjust if needed
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          fontSize: "1rem",
          gap: "0.5rem",
          padding: "0.5rem",
          borderRadius: "8px",
        }}
        className="nav-brand"
      >
        <img className="nav-logo" src={logo} alt="Ege Başarı Logo" />{" "}
        <p>Ege Başarı Kurs Merkezi</p>
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
          <HashLink smooth to="#section-1">
            Hakkımızda
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#section-2">
            Programlarımız
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#section-3">
            Neden Biz?
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#footer">
            İletişim
          </HashLink>
        </li>
        <li style={{ fontSize: "1.5rem" }}>
          <HashLink smooth to="#hero-section">
            &uarr;
          </HashLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
