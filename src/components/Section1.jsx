import React, { useEffect } from "react";

const Section1 = () => {
  useEffect(() => {
    const scriptId = "instagram-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  const embedHtml = `
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C9XEKTZoeBv/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="width:100%;max-width:540px;margin:auto;"></blockquote>
  `;

  return (
    <section className="section-1">
      <h2>Bizimle Tanışın</h2>
      <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
    </section>
  );
};

export default Section1;
