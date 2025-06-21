import React from "react";

const Section4 = () => {
  return (
    <section className="section-4">
      <h2>Bize Ulaşın</h2>
      <div className="contact-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.557490765342!2d26.83541937662646!3d38.1969517877279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbf2feb9b13021%3A0x143fc7ebeabb9d29!2sSeferihisar%20Ege%20Ba%C5%9Far%C4%B1%20Kurs%20Merkezi!5e0!3m2!1sen!2str!4v1750541017424!5m2!1sen!2str"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Seferihisar Ege Başarı Kurs Merkezi"
          ></iframe>
        </div>
        <div className="contact-info">
          <a href="tel:+905555555555">Telefon: +90 555 555 55 55</a>
          <a
            href="https://wa.me/905555555555"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href="mailto:info@egebasari.com">info@egebasari.com</a>
          <a
            href="https://www.instagram.com/egebasarikurs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section4;
