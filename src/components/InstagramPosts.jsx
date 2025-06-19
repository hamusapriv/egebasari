import React, { useEffect } from "react";

const InstagramPosts = ({ posts }) => {
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

  return (
    <div className="instagram-posts">
      {posts.map((url) => (
        <div
          key={url}
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${url}" data-instgrm-version="14" style="width:100%;max-width:540px;margin:auto;"></blockquote>`,
          }}
        />
      ))}
    </div>
  );
};

export default InstagramPosts;
