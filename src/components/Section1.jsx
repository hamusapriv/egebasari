import React from "react";
import InstagramPosts from "./InstagramPosts";
import image1 from "/assets/1.png";
import image2 from "/assets/2.png";
import image3 from "/assets/3.png";
import image4 from "/assets/4.png";
import image5 from "/assets/5.png";
import image6 from "/assets/6.png";

const Section1 = () => {
  const posts = [
    "https://www.instagram.com/reel/C9XEKTZoeBv/?utm_source=ig_embed&amp;utm_campaign=loading",
  ];

  return (
    <section className="about-section" id="hakkimizda">
      <div className="about-header">
        <h2>Ege Başarı'yı Keşfedin</h2>
        <blockquote className="inspiring-quote">
          "İyi bir başlangıç, yarı yarıya başarı demektir."
          <footer className="quote-author">— André Gide</footer>
        </blockquote>
      </div>

      <div className="about-content-grid">
        <div className="mission-card">
          <div className="mission-icon">
            <img src={image1} className="section1-image" alt="Misyon" />
          </div>
          <h3>Misyonumuz</h3>
          <p>
            Ege Başarı Kurs Merkezi olarak Seferihisar'da 2-8. sınıf
            öğrencilerinin hem akademik hem de kişisel gelişimlerini
            desteklemeyi amaçlıyoruz.
          </p>
        </div>

        <div className="approach-card">
          <div className="approach-icon">
            <img
              src={image2}
              className="section1-image"
              alt="Eğitim Yaklaşımımız"
            />
          </div>
          <h3>Eğitim Yaklaşımımız</h3>
          <p>
            Birebir ilgi ve takip, ödevlerden konu tekrarına, deneme
            sınavlarından aylık gelişim raporlarına kadar her adımı düzenli
            olarak takip ediyoruz. Alanında uzman kadromuz, her çocuğun öğrenme
            stiline uygun yöntemlerle bireysel başarıyı hedefliyor.
          </p>
        </div>

        <div className="technology-card">
          <div className="tech-icon">
            <img
              src={image3}
              className="section1-image"
              alt="Teknoloji Entegrasyonu"
            />
          </div>
          <h3>Teknoloji Entegrasyonu</h3>
          <p>
            Teknoloji destekli eğitim anlayışımızla akıllı tahtalar ve
            interaktif uygulamalar kullanıyoruz. Modern eğitim araçlarıyla
            öğrenmeyi daha eğlenceli ve etkili hale getiriyoruz.
          </p>
        </div>

        <div className="environment-card">
          <div className="env-icon">
            <img
              src={image4}
              className="section1-image"
              alt="Güvenli ve Sıcak Ortam"
            />
          </div>
          <h3>Güvenli ve Sıcak Ortam</h3>
          <p>
            Parmak izi giriş sistemiyle güvenliği sağlarken samimi
            atmosferimizle öğrencilerimizin kendilerini evlerinde hissetmesini
            amaçlıyoruz. Güvenlik ve konfor bizim önceliğimizdir.
          </p>
        </div>

        <div className="family-card">
          <div className="family-icon">
            <img
              src={image5}
              className="section1-image"
              alt="Aile İş Birliği"
            />
          </div>
          <h3>Aile İş Birliği</h3>
          <p>
            Düzenli veli geri bildirim seansları ve çevrim içi bildirim sistemi
            sayesinde aileler sürece her an dahil olabiliyor. Şeffaf iletişim
            politikamızla velilerimizi sürekli bilgilendiriz.
          </p>
        </div>

        <div className="goal-card">
          <div className="goal-icon">
            <img src={image6} className="section1-image" alt="Hedefimiz" />
          </div>
          <h3>Hedefimiz</h3>
          <p>
            Bizim için başarı yalnızca sınav sonuçları değil; özgüveni yüksek,
            meraklı ve sorumluluk sahibi bireyler yetiştirmektir. Her öğrencinin
            potansiyelini keşfetmesine yardımcı oluyoruz.
          </p>
        </div>
      </div>

      <div className="final-cta">
        <p className="cta-message">
          <strong>
            Ege Başarı ailesine katılın, çocuğunuzun potansiyelini birlikte
            keşfedelim!
          </strong>
        </p>
      </div>

      <div className="social-media-section">
        <h3>Instagram'da Bizi Takip Edin</h3>
        <p className="social-description">
          Günlük aktivitelerimizi, başarı hikayelerimizi ve eğitim ipuçlarımızı
          Instagram hesabımızdan takip edebilirsiniz.
        </p>
        <div className="instagram-link-container">
          <a
            href="https://www.instagram.com/egebasarikursu/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-profile-link"
          >
            📸 @egebasarikursu
          </a>
        </div>
        <InstagramPosts posts={posts} />
      </div>
    </section>
  );
};

export default Section1;
