import React from "react";
import akademik from "/assets/akademik-destek.png";
import gelisim from "/assets/gelisim-ve-takip.png";
import güvenli from "/assets/güvenli-ortam.png";
import lgshazırlık from "/assets/lgshazırlık.png";
const Section3 = () => {
  return (
    <section className="section-3">
      {" "}
      <h2>Programlarımız</h2>
      <div className="cards-container">
        <div className="card">
          <div className="card-image-container">
            <img src={akademik} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">Akademik Destek</h3>
          <p className="card-p"></p>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={gelisim} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">Gelişim ve Takip</h3>
          <p className="card-p"></p>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={güvenli} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">Güvenli Ortam</h3>
          <p className="card-p"></p>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={lgshazırlık} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">Teknoloji Destekli Eğitim</h3>
          <p className="card-p"></p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
