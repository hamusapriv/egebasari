import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__brand}>Ege Başarı Seferihisar</div>
      <nav className={styles.navbar__links}>
        <Link to="/" className={styles.navbar__link}>
          Home
        </Link>
        <Link to="/classroom" className={styles.navbar__link}>
          3D Sınıf
        </Link>
      </nav>
    </header>
  );
}
