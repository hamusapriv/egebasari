import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "/assets/logo.png"; // adjust if needed

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const rootElement = document.getElementById("root");
      const isScrolled = rootElement && rootElement.scrollTop > 50;
      setScrolled(isScrolled);
    };

    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.addEventListener("scroll", handleScroll);
      return () => rootElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-brand">
          <img className="nav-logo" src={logo} alt="Ege Başarı Logo" />{" "}
          <p>
            Ege Başarı <br /> Kurs Merkezi
          </p>
        </div>
        <ul
          className={`nav-menu ${open ? "open" : ""}`}
          onClick={() => setOpen(false)}
        >
          <li>
            <button onClick={() => scrollToSection("hakkimizda")}>
              Hakkımızda
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("programlarimiz")}>
              Programlarımız
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("neden-biz")}>
              Neden Biz?
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("iletisim")}>
              İletişim
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("bilgi")}>Bilgi</button>
          </li>
        </ul>
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
    </>
  );
}

export default Navbar;
