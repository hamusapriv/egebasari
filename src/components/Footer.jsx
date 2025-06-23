import React from "react";
import PhoneSVG from "./svgs/PhoneSVG";
import WhatsappSVG from "./svgs/WhatsappSVG";
import MailSVG from "./svgs/MailSVG";
import InstagramSVG from "./svgs/InstagramSVG";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <h2>İletişim</h2>
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
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="tel:+905392145589"
          >
            <PhoneSVG /> 0539 214 55 89
          </a>
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="tel:+905323116293"
          >
            {" "}
            <PhoneSVG /> 0532 311 62 93
          </a>
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="https://wa.me/905524050843"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappSVG /> 0532 405 08 43
          </a>
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="mailto: egebasari@gmail.com"
          >
            <MailSVG /> egebasari@gmail.com
          </a>
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="https://www.instagram.com/egebasarikursu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramSVG /> @egebasarikursu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
