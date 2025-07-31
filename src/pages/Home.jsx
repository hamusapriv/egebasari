import React from "react";
import HeroSection from "../components/HeroSection";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

function Home() {
  return (
    <>
      <SEOHead
        title="Ege Başarı Kurs Merkezi - Seferihisar İzmir | En İyi Eğitim Kursu"
        description="Seferihisar'ın en kaliteli kurs merkezi. İngilizce, matematik, fen, sosyal bilgiler kursu ve akademik destek hizmetleri. Deneyimli öğretmen kadrosu ile başarı garantisi. İlkokul ve ortaokul öğrencileri için özel programlar."
        keywords="seferihisar kurs merkezi, ege başarı, izmir kurs merkezi, ingilizce kursu seferihisar, matematik kursu, fen kursu, sosyal bilgiler, etüt merkezi, özel ders, akademik destek, ilkokul kursu, ortaokul kursu, LGS hazırlık, dersane seferihisar"
        canonical="/"
      />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <PricingSection /> */}
      <Footer />
    </>
  );
}

export default Home;
