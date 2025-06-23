import React from "react";
import InstagramPosts from "./InstagramPosts";

const Section1 = () => {
  const posts = [
    "https://www.instagram.com/reel/C9XEKTZoeBv/?utm_source=ig_embed&amp;utm_campaign=loading",
  ];

  return (
    <section className="section-1">
      <h2>Ege Başarı'yı Keşfedin</h2>
      <p className="section-1-text">
        Ege Başarı Kurs Merkezi olarak Seferihisar’da 2. – 8. sınıf
        öğrencilerinin hem akademik hem de kişisel gelişimlerini desteklemeyi
        amaçlıyoruz. Kurumumuzda: Birebir İlgi & Takip: Ödevlerden konu
        tekrarına, deneme sınavlarından aylık gelişim raporlarına kadar her
        adımı takip ediyor, gelişim tablolarıyla hem öğrenci hem veliye
        şeffaflık sunuyoruz. Alanında Uzman Kadro: Deneyimli öğretmenlerimiz,
        her çocuğun öğrenme stiline uygun yöntemlerle bireysel başarıyı
        hedefliyor. Teknoloji Destekli Eğitim: Akıllı tahtalar, interaktif
        uygulamalar ve dijital platformlarla dersleri daha etkili ve eğlenceli
        hale getiriyoruz. Güvenli ve Sıcak Ortam: Parmak izi giriş-çıkış
        sistemiyle güvenliği sağlarken, samimi atmosferimizle öğrencilerimizin
        kendilerini evindeymiş gibi hissetmesini sağlıyoruz. Aile İş Birliği:
        Düzenli veli geri bildirim seansları ve online bildirim sistemi
        sayesinde aileler her an süreçten haberdar oluyor. Bizim için başarı;
        yalnızca sınav sonuçları değil, özgüveni yüksek, meraklı ve sorumluluk
        sahibi bireyler yetiştirmektir. Ege Başarı ailesine katılın, çocuğunuzun
        potansiyelini birlikte keşfedelim!
      </p>
      <InstagramPosts posts={posts} />
    </section>
  );
};

export default Section1;
