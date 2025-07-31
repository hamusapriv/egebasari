import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "/assets/logo.png"; // adjust if needed
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-brand">
          <img className="nav-logo" src={logo} alt="Ege Başarı Logo" />{" "}
          <p>Ege Başarı Kurs Merkezi</p>
        </div>
      </nav>
      <ul
        className={`nav-menu ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <li>
          <HashLink smooth to="#about">
            Hakkımızda
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#programs">
            Programlarımız
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#why-choose-us">
            Neden Biz?
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact-cta">
            İletişim
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#footer">
            Bilgi
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
