import React from "react";
import SEOHead from "../components/SEOHead";

function About() {
  return (
    <>
      <SEOHead
        title="Hakkımızda | Ege Başarı Kurs Merkezi | Seferihisar İzmir"
        description="Ege Başarı Kurs Merkezi hakkında. Deneyimli öğretmen kadromuz, modern eğitim yöntemlerimiz ve başarı hikayelerimiz."
        keywords="ege başarı hakkında, seferihisar kurs merkezi hakkında, eğitim kalitesi, öğretmen kadrosu, başarı hikayeleri"
        canonical="/about"
      />
      <div>
        <h2>About Page</h2>
        <p>This is the about page.</p>
      </div>
    </>
  );
}

export default About;
