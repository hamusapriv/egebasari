import React from "react";
import InstagramPosts from "./InstagramPosts";

const Section1 = () => {
  const posts = [
    "https://www.instagram.com/reel/C9XEKTZoeBv/?utm_source=ig_embed&amp;utm_campaign=loading",
  ];

  return (
    <section className="section-1" id="section-1">
      <h2>Ege Başarı'yı Keşfedin</h2>
      <blockquote
        style={{
          fontSize: "0.8rem",
          margin: "0 auto 1rem",
          fontStyle: "italic",
          lineHeight: 1.4,
          color: "#555",
          maxWidth: "600px",
        }}
      >
        “İyi bir başlangıç, işin yarısının yapılması demektir.”
        <footer
          style={{
            textAlign: "right",
            marginTop: "0.5rem",
            fontSize: "0.75rem",
            fontStyle: "normal",
            color: "#333",
          }}
        >
          — André Gide
        </footer>
      </blockquote>

      <p className="section-1-text">
        Ege Başarı Kurs Merkezi olarak Seferihisar'da 2-8. sınıf öğrencilerinin
        hem akademik hem de kişisel gelişimlerini desteklemeyi amaçlıyoruz.
        Kurumumuzda birebir ilgi ve takip, ödevlerden konu tekrarına, deneme
        sınavlarından aylık gelişim raporlarına kadar her adımı düzenli olarak
        takip ediyoruz. Alanında uzman kadromuz, her çocuğun öğrenme stiline
        uygun yöntemlerle bireysel başarıyı hedefliyor. Teknoloji destekli
        eğitim anlayışımızla akıllı tahtalar ve interaktif uygulamalar
        kullanıyoruz. Güvenli ve sıcak ortamımızda, parmak izi giriş sistemiyle
        güvenliği sağlarken samimi atmosferimizle öğrencilerimizin kendilerini
        evlerinde hissetmesini amaçlıyoruz. Aile iş birliği kapsamında düzenli
        veli geri bildirim seansları ve çevrim içi bildirim sistemi sayesinde
        aileler sürece her an dahil olabiliyor. Bizim için başarı yalnızca sınav
        sonuçları değil; özgüveni yüksek, meraklı ve sorumluluk sahibi bireyler
        yetiştirmektir. Ege Başarı ailesine katılın, çocuğunuzun potansiyelini
        birlikte kesfedelim!
      </p>
      <InstagramPosts posts={posts} />
    </section>
  );
};

export default Section1;
