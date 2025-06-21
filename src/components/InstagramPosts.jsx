//InstagramPosts.jsx 

import React, { useEffect } from "react";

const INSTAGRAM_URLS = [
  "https://www.instagram.com/reel/C_TxDk0oJBu/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/reel/ChNVVuegi01/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/reel/DLDRK6eIKTZ/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/reel/DLAVHWrI9ql/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/reel/DHT-XsaMfyy/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/reel/C9XEKTZoeBv/?utm_source=ig_embed&utm_campaign=loading",
];

const INSTAGRAM_COMMON = {
  version: "14",
  captioned: true,
  style: {
    background: "#FFF",
    border: 0,
    borderRadius: "3px",
    boxShadow: "0 0 1px rgba(0,0,0,0.5), 0 1px 10px rgba(0,0,0,0.15)",
    margin: "1px auto",
    maxWidth: "540px",
    minWidth: "326px",
    padding: 0,
    width: "calc(100% - 2px)",
  },
};

export default function InstagramPosts() {
  useEffect(() => {
    const scriptId = "instagram-embed-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "/embed.js";
      s.async = true;
      document.body.appendChild(s);
      s.onload = () => window.instgrm?.Embeds.process();
    } else {
      window.instgrm?.Embeds.process();
    }
  }, []); // only run once on mount

  return (
    <div className="instagram-posts">
      {INSTAGRAM_URLS.map((url, idx) => (
        <blockquote
          key={idx}
          className="instagram-media"
          data-instgrm-captioned={INSTAGRAM_COMMON.captioned}
          data-instgrm-permalink={url}
          data-instgrm-version={INSTAGRAM_COMMON.version}
          style={INSTAGRAM_COMMON.style}
        />
      ))}
    </div>
  );
}
