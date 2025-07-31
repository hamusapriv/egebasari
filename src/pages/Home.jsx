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
        title="Ege Başarı Kurs Merkezi | Seferihisar İzmir Kurs Merkezi | İngilizce Kursu"
        description="Seferihisar'da en kaliteli eğitim hizmeti. İngilizce kursu, matematik kursu, etüt ve dersane hizmetleri. Deneyimli öğretmen kadrosu ile akademik başarı garantisi."
        keywords="seferihisar kurs merkezi, izmir kurs merkezi, ingilizce kursu, matematik kursu, etüt, dersane, seferihisar dersane, izmir dersane, özel ders, akademik destek"
        canonical="/"
      />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/*  <PricingSection /> */}
      <Footer />
    </>
  );
}

export default Home;
