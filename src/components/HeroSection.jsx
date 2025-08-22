import React from "react";
import HeroVideo from "/assets/hero-video-education-reduced.mp4";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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

        <blockquote>
          <p>
            "VR destekli eğitim modelimizle tanışın, geleceğinizi
            şekillendirin!"
          </p>
        </blockquote>
        <button
          onClick={() => scrollToSection("bilgi")}
          className="btn hero-btn"
        >
          Şimdi Başvur{" "}
        </button>
      </div>
      <div className="hero-video-container">
        <video
          className="hero-video"
          src={HeroVideo}
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
