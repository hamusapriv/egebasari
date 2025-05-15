import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import styles from "../styles/components/Button.module.css";

export default function Home() {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Hoş geldiniz — Ege Başarı Seferihisar</h1>
      <p>Bu site üzerinden sanal sınıf deneyimini keşfedebilirsiniz.</p>
      <Link to="/classroom">
        <button className={styles.btn}>3D Sınıfa Git</button>
      </Link>
    </div>
  );
}
