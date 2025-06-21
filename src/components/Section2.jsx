import React from "react";
import ilkokul from "/assets/ilkokul.png";
import ortaokul from "/assets/ortaokul.png";
import ingilizce from "/assets/ingilizce.png";
import lgshazırlık from "/assets/lgshazırlık.png";
const Section2 = () => {
  return (
    <section className="section-2">
      <h2>Programlarımız</h2>
      <div className="cards-container">
        <div className="card">
          <div className="card-image-container">
            <img src={ilkokul} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">İlkokul</h3>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={ortaokul} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">Ortaokul</h3>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={ingilizce} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">İngilizce</h3>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={lgshazırlık} alt="" className="card-image" />
          </div>
          <h3 className="card-h3"> LGS Hazırlık</h3>
        </div>
      </div>
    </section>
  );
};

export default Section2;
