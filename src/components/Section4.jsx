import React from "react";

const Section4 = () => {
  return (
    <section className="contact-cta-section" id="contact-cta">
      <div className="cta-container">
        <h2>Hemen Başlayın!</h2>
        <p className="cta-description">
          Çocuğunuzun eğitim yolculuğunda fark yaratmaya hazır mısınız? Ücretsiz
          danışmanlık için bugün bizi arayın!
        </p>

        <div className="cta-buttons">
          <a href="tel:+905392145589" className="btn primary-cta">
            📞 Hemen Ara
          </a>
          <a href="tel:+905323116293" className="btn primary-cta">
            📞 Hemen Ara
          </a>
          <a
            href="https://wa.me/905524050843"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary-cta"
          >
            💬 WhatsApp
          </a>
        </div>

        <div className="opening-hours">
          <h3>Çalışma Saatleri</h3>
          <div className="hours-grid">
            <div className="hours-item">
              <span className="day">Pazartesi - Cuma</span>
              <span className="time">12:30 - 19:00</span>
            </div>
            <div className="hours-item">
              <span className="day">Cumartesi</span>
              <span className="time">09:30 - 18:00</span>
            </div>
            <div className="hours-item">
              <span className="day">Pazar</span>
              <span className="time">11:00 - 13:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
