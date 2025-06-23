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
    img: "/assets/post-1.jpg",
    title: "Sabah Sürüşü",
    text: "Ege Başarı Kurs Merkezi ile geleceğinize yön verin! Başarıya giden yolda yanınızdayız. Profesyonel eğitim kadromuz, kişiye özel ders programlarımız ve modern öğrenme yöntemlerimizle hedeflerinize ulaşmanız artık çok daha kolay. Siz de bizimle başarının bir parçası olun! 👩‍🎓💯👨‍🎓",
    link: "https://www.instagram.com/reel/C_TxDk0oJBu/",
  },
  {
    img: "/assets/post-2.jpg",
    title: "Kıyı Rotası",
    text: "Yeni dönem ara sınıf kursları ve sınava hazırlık kurslarımız başlamıştır. İçtenlik, özveri ve kaliteli eğitimle biz hazırız. 💯📖",
    link: "https://www.instagram.com/reel/ChNVVuegi01/",
  },
  {
    img: "/assets/post-3.jpg",
    title: "Kıyı Rotası",
    text: "Öğrencilerimizle yalnızca akademik başarıları değil, güzel anıları da paylaşıyoruz. 🌟 Bugün birlikte nefes aldık, doğada bir aradaydık. 🌿☀️ Ege Başarı ailesi olarak her an birlikteyiz. 💚",
    link: "https://www.instagram.com/reel/DLDRK6eIKTZ/",
  },
  {
    img: "/assets/post-4.png",
    title: "Kıyı Rotası",
    text: "🎓 Minik yürekler büyük adımlar attı! Bu yıl hepiniz harikaydınız! Yeni yolculuklara hazırız 💙",
    link: "https://www.instagram.com/reel/DLAVHWrI9ql/",
  },
  {
    img: "/assets/post-5.jpg",
    title: "Kıyı Rotası",
    text: "Demokrasi Küçük Yaşta Öğrenilir! 🗳️✨ Özel eğitim kurumumuzda öğrencilerimize erken yaşta demokrasiyi deneyimleme fırsatı sunuyoruz! 🏫📚 Öğrencilerimiz, Öğrenci Temsilcisi Seçimi süreciyle seçim yapmayı, aday olmayı ve demokratik değerleri uygulamalı olarak öğreniyor. 💬 Öğrencilerimizin özgüvenle kendilerini ifade ettiği, adil ve şeffaf bir seçim süreci yaşadığı bu etkinlik, onların geleceğin bilinçli bireyleri olmalarına katkı sağlıyor! 💙👏📍 Siz de çocuğunuzun katılımcı, bilinçli ve özgüvenli bireyler olarak yetişmesini istiyorsanız, bizi tercih edin! 🌟",
    link: "https://www.instagram.com/reel/DHT-XsaMfyy/",
  },
  {
    img: "/assets/post-6.jpg",
    title: "Kıyı Rotası",
    text: "Çocuklarınızın geleceğine yatırım yapmanın en etkili yollarından biri, onlara İngilizce öğretmektir. Erken yaşta dil öğrenmenin faydaları saymakla bitmez: 📚 Akademik Başarı: İngilizce, dünya genelinde en çok konuşulan ve eğitimde en çok kullanılan dildir. Erken yaşta öğrenmek, akademik başarıyı artırır. 🌍 Kültürel Farkındalık: Farklı kültürleri ve yaşam biçimlerini tanıyarak çocuklarınızın dünya görüşü genişler. 🗣️ İletişim Becerileri: Dil öğrenimi, çocukların iletişim becerilerini ve kendine güvenini artırır. 🎓 Kariyer Olanakları: İyi derecede İngilizce bilen bireyler, kariyerlerinde daha geniş fırsatlara sahip olur. Çocuklarınızın eğitimi için en doğru adımları birlikte atmaya ne dersiniz? 💪🌟",
    link: "https://www.instagram.com/reel/C9XEKTZoeBv/",
  },

  // ⚑ Add as many as you like ⬆️
];

export default function InstagramPosts() {
  return (
    <>
      <h3>Ege Başarı Sosyalde!</h3>
      <div className="insta-cards-container">
        {posts.map(({ img, title, text, link }, i) => (
          <article className="insta-card" key={i}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                position: "relative",
                bottom: "0",
                left: "0",
                padding: "4px",
                color: "#fff",
                backdropFilter: "blur(5px)",
                borderRadius: "8px",
                overflow: "hidden",
                textDecoration: "none",
              }}
            >
              <img
                src={instaLogo}
                alt="insta-logo"
                style={{
                  width: "24px",
                  height: "24px",
                  bottom: "10px",
                  right: "10px",
                  borderRadius: "50%",
                }}
              />
              <div>
                <p>egebasarikursu </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  Follow
                  <svg
                    fill="rgb(0, 149, 246)"
                    height="12"
                    role="img"
                    viewBox="0 0 40 40"
                    width="12"
                  >
                    <path
                      d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </p>
              </div>
            </a>
            <div className="insta-card-image-container">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "relative",
                  display: "flex",
                  height: "100%",
                }}
              >
                <img className="insta-card-image" src={img} alt={title} />
              </a>
            </div>
            <p
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "#fff",
              }}
            >
              {text}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
