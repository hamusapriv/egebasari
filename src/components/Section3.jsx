import React from "react";
import akademik from "/assets/akademik-destek.png";
import gelisim from "/assets/gelisim-ve-takip.png";
import güvenli from "/assets/güvenli-ortam.png";
import vr from "/assets/vr.png";
const Section3 = () => {
  return (
    <section className="section-3" id="section-3">
      {" "}
      <h2>Neden Bizi Seçmelisiniz?</h2>
      <div className="cards-container">
        <div className="card">
          <div className="card-image-container">
            <img src={akademik} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">Akademik Destek</h3>
          <ul className="card-ul">
            <li className="card-li">
              {" "}
              <p className="card-p">Ödev Takibi</p>
            </li>
            <li className="card-li">
              {" "}
              <p className="card-p">Birebir Dersler</p>
            </li>
            <li className="card-li">
              {" "}
              <p className="card-p">Düzenli Deneme Sınavları</p>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={gelisim} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">Gelişim ve Takip</h3>
          <ul className="card-ul">
            <li className="card-li">
              {" "}
              <p className="card-p">Değerlendirme Raporları</p>
            </li>
            <li className="card-li">
              {" "}
              <p className="card-p">Deneme Sınavları ve Analizleri</p>
            </li>
            <li className="card-li">
              {" "}
              <p className="card-p">Bireysel Gelişim Takibi</p>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={güvenli} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">Güvenli Ortam</h3>
          <ul className="card-ul">
            <li className="card-li">
              {" "}
              <p className="card-p">Deneyimli Kadro</p>
            </li>
            <li className="card-li">
              {" "}
              <p className="card-p">Parmak İzi Giriş-Çıkış Sistemi</p>
            </li>
            <li className="card-li">
              {" "}
              <p className="card-p">Şeffaf Kayıt Süreci</p>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card-image-container">
            <img src={vr} alt="" className="card-image" />
          </div>
          <h3 className="card-h3">Teknoloji Destekli Eğitim</h3>
          <ul className="card-ul">
            <li className="card-li">
              {" "}
              <p className="card-p">Sanal Gerçeklik (VR)</p>
            </li>
            <li className="card-li">
              {" "}
              <p className="card-p">Sınıf İçi Mobil Cihaz Kullanımı</p>
            </li>
            <li className="card-li">
              {" "}
              <p className="card-p">Etkileşimli Quiz ve Mini Oyunlar</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section3;
