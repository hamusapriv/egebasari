import React from "react";
import akademik from "/assets/akademik-destek.png";
import gelisim from "/assets/gelisim-ve-takip.png";
import güvenli from "/assets/güvenli-ortam.png";
import vr from "/assets/vr.png";

const Section3 = () => {
  return (
    <section className="why-choose-us-section" id="neden-biz">
      <div className="why-choose-header">
        <h2>Neden Ege Başarı'yı Seçmelisiniz?</h2>
        <p className="why-choose-description">
          Deneyimli kadromuz, modern teknolojimiz ve kişiselleştirilmiş
          yaklaşımımızla öğrencilerinizin başarısı için en iyisini sunuyoruz.
        </p>
      </div>

      <div className="advantages-grid">
        <div className="advantage-card academic-support-card">
          <div className="advantage-image-container">
            <img
              src={akademik}
              alt="Akademik destek hizmetleri - ödev takibi ve birebir dersler"
              className="advantage-image"
            />
          </div>
          <div className="advantage-content">
            <h3 className="advantage-title">Akademik Destek</h3>
            <ul className="advantage-features">
              <li className="feature-item">
                <span className="feature-icon">📝</span>
                <div className="feature-text">
                  <strong>Ödev Takibi</strong>
                  <p>Günlük ödev kontrolü ve rehberlik</p>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-icon">👨‍🏫</span>
                <div className="feature-text">
                  <strong>Birebir Dersler</strong>
                  <p>Kişiselleştirilmiş öğrenme desteği</p>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-icon">📊</span>
                <div className="feature-text">
                  <strong>Düzenli Deneme Sınavları</strong>
                  <p>Haftalık başarı ölçümü ve analizi</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="advantage-card progress-tracking-card">
          <div className="advantage-image-container">
            <img
              src={gelisim}
              alt="Öğrenci gelişim takip sistemi - raporlar ve analizler"
              className="advantage-image"
            />
          </div>
          <div className="advantage-content">
            <h3 className="advantage-title">Gelişim ve Takip</h3>
            <ul className="advantage-features">
              <li className="feature-item">
                <span className="feature-icon">📈</span>
                <div className="feature-text">
                  <strong>Değerlendirme Raporları</strong>
                  <p>Aylık detaylı performans raporları</p>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-icon">🎯</span>
                <div className="feature-text">
                  <strong>Deneme Sınavları ve Analizleri</strong>
                  <p>Eksik konuların tespiti ve güçlendirme</p>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-icon">📱</span>
                <div className="feature-text">
                  <strong>Bireysel Gelişim Takibi</strong>
                  <p>Dijital takip ve veli bilgilendirme</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="advantage-card safe-environment-card">
          <div className="advantage-image-container">
            <img
              src={güvenli}
              alt="Güvenli eğitim ortamı - deneyimli kadro ve güvenlik sistemi"
              className="advantage-image"
            />
          </div>
          <div className="advantage-content">
            <h3 className="advantage-title">Güvenli Ortam</h3>
            <ul className="advantage-features">
              <li className="feature-item">
                <span className="feature-icon">👩‍🎓</span>
                <div className="feature-text">
                  <strong>Deneyimli Kadro</strong>
                  <p>Pedagojik eğitim almış öğretmenler</p>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-icon">🔐</span>
                <div className="feature-text">
                  <strong>Parmak İzi Giriş-Çıkış Sistemi</strong>
                  <p>Güvenli erişim ve veli bilgilendirme</p>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-icon">✅</span>
                <div className="feature-text">
                  <strong>Şeffaf Kayıt Süreci</strong>
                  <p>Net fiyat politikası ve sözleşme</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="advantage-card technology-card">
          <div className="advantage-image-container">
            <img
              src={vr}
              alt="Teknoloji destekli eğitim - VR ve interaktif araçlar"
              className="advantage-image"
            />
          </div>
          <div className="advantage-content">
            <h3 className="advantage-title">Teknoloji Destekli Eğitim</h3>
            <ul className="advantage-features">
              <li className="feature-item">
                <span className="feature-icon">🥽</span>
                <div className="feature-text">
                  <strong>Sanal Gerçeklik (VR)</strong>
                  <p>3D görsellerle immersive öğrenme</p>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-icon">📱</span>
                <div className="feature-text">
                  <strong>Sınıf İçi Mobil Cihaz Kullanımı</strong>
                  <p>Tablet ve smart board entegrasyonu</p>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-icon">🎮</span>
                <div className="feature-text">
                  <strong>Etkileşimli Quiz ve Mini Oyunlar</strong>
                  <p>Gamification ile eğlenceli öğrenme</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="success-metrics">
        <div className="metrics-header">
          <h3>Başarı İstatistiklerimiz</h3>
        </div>
        <div className="metrics-grid">
          <div className="metric-item">
            <div className="metric-number">95%</div>
            <div className="metric-label">Öğrenci Memnuniyeti</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">8+</div>
            <div className="metric-label">Yıllık Deneyim</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">500+</div>
            <div className="metric-label">Başarılı Öğrenci</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">Uzman</div>
            <div className="metric-label"> Öğretmen Kadrosu</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
