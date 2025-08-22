//InstagramPosts.jsx

import React from "react";
import instaLogo from "/assets/insta-logo.jpg";

const INSTAGRAM_URLS = [
  "https://www.instagram.com/reel/C_TxDk0oJBu/",
  "https://www.instagram.com/reel/ChNVVuegi01/",
  "https://www.instagram.com/reel/DLDRK6eIKTZ/",
  "https://www.instagram.com/reel/DLAVHWrI9ql/",
  "https://www.instagram.com/reel/DHT-XsaMfyy/",
  "https://www.instagram.com/reel/C9XEKTZoeBv/",
];

const posts = [
  {
    img: "/assets/post-7.jpg",
    title: "VR Destekli Eğitim",
    text: "📌 Eğitimde bir adım öndeyiz 🚀 VR destekli derslerimizle öğrencilerimiz artık sadece öğrenmiyor, yaşıyor 👓✨ Siz de çocuğunuzun geleceğini teknolojiyle buluşturun!",
    link: "https://www.instagram.com/p/DNp7OQSC9Wx/",
    hashtags:
      "#EğitimdeTeknoloji #VREğitim #YeniNesilEğitim #EgeBaşarı #kursmerkezi #Seferihisar #İzmirEğitim #LGS2026 #ÖğrenciHayatı #StudyMotivation #VRders",
  },
  {
    img: "/assets/post-1.jpg",
    title: "Başarıya Giden Yol",
    text: "Ege Başarı Kurs Merkezi ile geleceğinize yön verin! Başarıya giden yolda yanınızdayız. Profesyonel eğitim kadromuz, kişiye özel ders programlarımız ve modern öğrenme yöntemlerimizle hedeflerinize ulaşmanız artık çok daha kolay. Siz de bizimle başarının bir parçası olun! 👩‍🎓💯👨‍🎓",
    link: "https://www.instagram.com/reel/C_TxDk0oJBu/",
    hashtags: "#EğitimdeKalite #Başarı #ÖğrenciMemnuniyeti",
  },
  {
    img: "/assets/post-2.jpg",
    title: "Yeni Dönem Başlıyor",
    text: "Yeni dönem ara sınıf kursları ve sınava hazırlık kurslarımız başlamıştır. İçtenlik, özveri ve kaliteli eğitimle biz hazırız. 💯📖",
    link: "https://www.instagram.com/reel/ChNVVuegi01/",
    hashtags: "#YeniDönem #SınavHazırlık #KaliteliEğitim",
  },
  {
    img: "/assets/post-3.jpg",
    title: "Doğada Birlikte",
    text: "Öğrencilerimizle yalnızca akademik başarıları değil, güzel anıları da paylaşıyoruz. 🌟 Bugün birlikte nefes aldık, doğada bir aradaydık. 🌿☀️ Ege Başarı ailesi olarak her an birlikteyiz. 💚",
    link: "https://www.instagram.com/reel/DLDRK6eIKTZ/",
    hashtags: "#EgeBasarıAilesi #DoğadaEğitim #BirlikteGüçlü",
  },
  {
    img: "/assets/post-4.png",
    title: "Mezuniyet Sevinci",
    text: "🎓 Minik yürekler büyük adımlar attı! Bu yıl hepiniz harikaydınız! Yeni yolculuklara hazırız 💙",
    link: "https://www.instagram.com/reel/DLAVHWrI9ql/",
    hashtags: "#Mezuniyet #Başarı #GururluAnlar",
  },
  {
    img: "/assets/post-5.jpg",
    title: "Demokrasi Eğitimi",
    text: "Demokrasi Küçük Yaşta Öğrenilir! 🗳️✨ Özel eğitim kurumumuzda öğrencilerimize erken yaşta demokrasiyi deneyimleme fırsatı sunuyoruz! 🏫📚 Öğrencilerimiz, Öğrenci Temsilcisi Seçimi süreciyle seçim yapmayı, aday olmayı ve demokratik değerleri uygulamalı olarak öğreniyor. 💬",
    link: "https://www.instagram.com/reel/DHT-XsaMfyy/",
    hashtags: "#Demokrasi #ÖğrenciTemsilcisi #BilinçliNesil",
  },
  {
    img: "/assets/post-6.jpg",
    title: "İngilizce'nin Önemi",
    text: "Çocuklarınızın geleceğine yatırım yapmanın en etkili yollarından biri, onlara İngilizce öğretmektir. Erken yaşta dil öğrenmenin faydaları saymakla bitmez: 📚 Akademik Başarı, 🌍 Kültürel Farkındalık, 🗣️ İletişim Becerileri, 🎓 Kariyer Olanakları",
    link: "https://www.instagram.com/reel/C9XEKTZoeBv/",
    hashtags: "#İngilizce #DilEğitimi #Gelecek",
  },
];

export default function InstagramPosts() {
  return (
    <section className="instagram-social-section" id="instagram-posts">
      <div className="instagram-header">
        <h3>Ege Başarı Sosyal Medyada!</h3>
        <p className="instagram-subtitle">
          Son paylaşımlarımız, etkinliklerimiz ve öğrenci başarı hikayelerimiz
        </p>
        <a
          href="https://www.instagram.com/egebasarikursu"
          target="_blank"
          rel="noopener noreferrer"
          className="main-instagram-link"
        >
          <img
            src={instaLogo}
            alt="Instagram"
            className="instagram-main-logo"
          />
          <span>@egebasarikursu</span>
          <span className="follow-badge">Takip Et</span>
        </a>
      </div>

      <div className="instagram-posts-grid">
        {posts.map(({ img, title, text, link, hashtags }, i) => (
          <article className="instagram-post-card" key={i}>
            <div className="post-header">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="post-account-link"
              >
                <img
                  src={instaLogo}
                  alt="Ege Başarı Instagram"
                  className="post-account-avatar"
                />
                <div className="post-account-info">
                  <span className="account-name">egebasarikursu</span>
                  <div className="verified-badge">
                    <span>Takip Et</span>
                    <svg
                      fill="rgb(0, 149, 246)"
                      height="12"
                      role="img"
                      viewBox="0 0 40 40"
                      width="12"
                      className="verified-icon"
                    >
                      <path
                        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <div className="post-image-container">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="post-image-link"
              >
                <img className="post-image" src={img} alt={title} />
                <div className="post-overlay">
                  <div className="instagram-play-icon">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="24"
                        fill="rgba(255,255,255,0.9)"
                      />
                      <path d="M20 16v16l12-8-12-8z" fill="#000" />
                    </svg>
                  </div>
                  <span className="post-type">Reel</span>
                </div>
              </a>
            </div>

            <div className="post-content">
              <h4 className="post-title">{title}</h4>
              <p className="post-text">{text}</p>
              {hashtags && <p className="post-hashtags">{hashtags}</p>}

              <div className="post-actions">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-post-btn"
                >
                  Instagram'da Gör →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="instagram-footer">
        <a
          href="https://www.instagram.com/egebasarikursu"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-posts-btn"
        >
          Tüm Paylaşımları Gör
        </a>
      </div>
    </section>
  );
}
