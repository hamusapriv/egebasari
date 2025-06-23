import React from "react";
import sphere from "/assets/sphere.mov";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-content">
        <h1>
          <span className="shape E">E</span>ge'yi{" "}
          <span className="shape B">B</span>aşarı'ya <br />
          Taşıyoruz
        </h1>
        <p>
          Ege Başarı Kurs Merkezi olarak, Seferihisar’da her öğrencinin
          potansiyelini ortaya çıkarmasına ve başarıya ulaşmasına yardımcı
          oluyoruz. Birebir ilgi, sıcak bir ortam ve doğru rehberlikle,
          öğrencilerimizi sadece sınavlara değil, hayata hazırlıyoruz. Çünkü
          bizim için başarı, birlikte büyümektir.
        </p>
        <HashLink smooth to="#footer" className="btn hero-btn">
          Şimdi Başvur{" "}
        </HashLink>
      </div>
      <div className="hero-video-container">
        <video
          className="hero-video"
          src={sphere}
          type="video/mp4"
          playsInline
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  );
};

export default HeroSection;
