import React from "react";

const PricingSection = () => {
  return (
    <section className="pricing-section" id="bilgi">
      <h2>Kurslarımız ve Fiyatlar</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>İlkokul Programı</h3>
          <div className="price">
            <span className="currency">₺</span>
            <span className="amount">800</span>
            <span className="period">/ay</span>
          </div>
          <ul className="features">
            <li>Tüm temel dersler</li>
            <li>Ödev takibi</li>
            <li>Aylık değerlendirme</li>
            <li>Veli toplantıları</li>
          </ul>
          <a href="tel:+905392145589" className="btn pricing-btn">
            Bilgi Al
          </a>
        </div>

        <div className="pricing-card featured">
          <div className="popular-badge">En Popüler</div>
          <h3>Ortaokul + İngilizce</h3>
          <div className="price">
            <span className="currency">₺</span>
            <span className="amount">1200</span>
            <span className="period">/ay</span>
          </div>
          <ul className="features">
            <li>Tüm ortaokul dersleri</li>
            <li>İngilizce kursu dahil</li>
            <li>Deneme sınavları</li>
            <li>Birebir görüşmeler</li>
            <li>Online takip sistemi</li>
          </ul>
          <a href="tel:+905392145589" className="btn pricing-btn">
            Bilgi Al
          </a>
        </div>

        <div className="pricing-card">
          <h3>LGS Hazırlık</h3>
          <div className="price">
            <span className="currency">₺</span>
            <span className="amount">1500</span>
            <span className="period">/ay</span>
          </div>
          <ul className="features">
            <li>Yoğun LGS hazırlığı</li>
            <li>Haftalık deneme sınavları</li>
            <li>Soru bankası dahil</li>
            <li>Motivasyon desteği</li>
            <li>Hedef lise analizi</li>
          </ul>
          <a href="tel:+905392145589" className="btn pricing-btn">
            Bilgi Al
          </a>
        </div>
      </div>

      <div className="pricing-note">
        <p>
          <strong>Not:</strong> İlk ders ücretsizdir! Kayıt ücreti ve materyal
          giderleri ayrıca hesaplanır. Detaylı bilgi için bizi arayın.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
