//InstagramPosts.jsx

import React from "react";

const INSTAGRAM_URLS = [
  "https://www.instagram.com/reel/C_TxDk0oJBu/",
  "https://www.instagram.com/reel/ChNVVuegi01/",
  "https://www.instagram.com/reel/DLDRK6eIKTZ/",
  "https://www.instagram.com/reel/DLAVHWrI9ql/",
  "https://www.instagram.com/reel/DHT-XsaMfyy/",
  "https://www.instagram.com/reel/C9XEKTZoeBv/",
];

const posts = [
  {
    img: "/assets/post-1.jpg",
    title: "Sabah Sürüşü",
    text: "Güne martılar kadar özgür başlıyoruz!",
    link: "https://www.instagram.com/reel/C_TxDk0oJBu/",
  },
  {
    img: "/assets/post-2.jpg",
    title: "Kıyı Rotası",
    text: "Foça sahilinde tuzlu rüzgâr eşliğinde mola.",
    link: "https://www.instagram.com/reel/ChNVVuegi01/",
  },
  {
    img: "/assets/post-3.jpg",
    title: "Kıyı Rotası",
    text: "Foça sahilinde tuzlu rüzgâr eşliğinde mola.",
    link: "https://www.instagram.com/reel/DLDRK6eIKTZ/",
  },
  {
    img: "/assets/post-4.png",
    title: "Kıyı Rotası",
    text: "Foça sahilinde tuzlu rüzgâr eşliğinde mola.",
    link: "https://www.instagram.com/reel/DLAVHWrI9ql/",
  },
  {
    img: "/assets/post-5.jpg",
    title: "Kıyı Rotası",
    text: "Foça sahilinde tuzlu rüzgâr eşliğinde mola.",
    link: "https://www.instagram.com/reel/DHT-XsaMfyy/",
  },
  {
    img: "/assets/post-6.jpg",
    title: "Kıyı Rotası",
    text: "Foça sahilinde tuzlu rüzgâr eşliğinde mola.",
    link: "https://www.instagram.com/reel/C9XEKTZoeBv/",
  },

  // ⚑ Add as many as you like ⬆️
];

export default function InstagramPosts() {
  return (
    <>
      <h3>Ege Başarı Sosyalde!</h3>
      <div className="insta-cards-container">
        {posts.map(({ img, title, text, link }, i) => (
          <article className="insta-card" key={i}>
            <div className="insta-card-image-container">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img className="insta-card-image" src={img} alt={title} />
              </a>
            </div>
            <h3 className="insta-card-h3">{title}</h3>
            <p className="insta-card-p">{text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
