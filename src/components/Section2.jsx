import React from "react";
import ilkokul from "/assets/ilkokul.png";
import ortaokul from "/assets/ortaokul.png";
import ingilizce from "/assets/ingilizce.png";
import lgshazırlık from "/assets/lgshazırlık.png";

const Section2 = () => {
  return (
    <section className="programs-section" id="programlarimiz">
      <div className="programs-header">
        <h2>Eğitim Programlarımız</h2>
        <p className="programs-description">
          Her yaş grubuna özel olarak tasarlanmış programlarımızla
          öğrencilerinizin akademik başarısını destekliyoruz.
        </p>
      </div>

      <div className="programs-grid">
        <div className="program-card elementary-program">
          <div className="program-image-container">
            <img
              src={ilkokul}
              alt="İlkokul eğitimi programları"
              className="program-image"
            />
          </div>
          <div className="program-content">
            <h3 className="program-title">İlkokul (2-4. Sınıf)</h3>
            <ul className="program-features">
              <li>Temel matematik ve Türkçe</li>
              <li>Okuma yazma geliştirme</li>
              <li>Fen bilimleri temelleri</li>
              <li>Ödev yapma alışkanlığı</li>
              <li>Sosyal beceri geliştirme</li>
            </ul>
            <div className="program-age">Yaş: 7-10</div>
          </div>
        </div>

        <div className="program-card middle-school-program">
          <div className="program-image-container">
            <img
              src={ortaokul}
              alt="Ortaokul eğitimi programları"
              className="program-image"
            />
          </div>
          <div className="program-content">
            <h3 className="program-title">Ortaokul (5-8. Sınıf)</h3>
            <ul className="program-features">
              <li>Matematik, Fen, Türkçe, Sosyal</li>
              <li>Sınav teknikleri öğretimi</li>
              <li>Analitik düşünme geliştirme</li>
              <li>Proje ve ödev desteği</li>
              <li>LGS ön hazırlık</li>
            </ul>
            <div className="program-age">Yaş: 10-14</div>
          </div>
        </div>

        <div className="program-card english-program">
          <div className="program-image-container">
            <img
              src={ingilizce}
              alt="İngilizce dil kursu programları"
              className="program-image"
            />
          </div>
          <div className="program-content">
            <h3 className="program-title">İngilizce Kursu</h3>
            <ul className="program-features">
              <li>Konuşma ve dinleme becerileri</li>
              <li>Gramer ve kelime dağarcığı</li>
              <li>Interactive oyunlar</li>
              <li>Seviye grupları</li>
              <li>Sertifika programı</li>
            </ul>
            <div className="program-age">Tüm Seviyeler</div>
          </div>
        </div>

        <div className="program-card lgs-program">
          <div className="program-image-container">
            <img
              src={lgshazırlık}
              alt="LGS sınav hazırlık programları"
              className="program-image"
            />
          </div>
          <div className="program-content">
            <h3 className="program-title">LGS Hazırlık</h3>
            <ul className="program-features">
              <li>Yoğun sınav hazırlığı</li>
              <li>Haftalık deneme sınavları</li>
              <li>Konu eksiği tespiti</li>
              <li>Motivasyon ve rehberlik</li>
              <li>Hedef lise analizi</li>
            </ul>
            <div className="program-age">8. Sınıf</div>
          </div>
        </div>
      </div>

      <div className="programs-footer">
        <div className="schedule-info">
          <h3>Ders Saatleri</h3>
          <div className="schedule-grid">
            <div className="schedule-item">
              <span className="schedule-day">Hafta İçi</span>
              <span className="schedule-time">15:00 - 19:00</span>
            </div>
            <div className="schedule-item">
              <span className="schedule-day">Cumartesi</span>
              <span className="schedule-time">10:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
