import React from "react";
import InstagramPosts from "./InstagramPosts";

const Section1 = () => {
  const posts = [
    "https://www.instagram.com/reel/C9XEKTZoeBv/?utm_source=ig_embed&amp;utm_campaign=loading",
  ];

  return (
    <section className="section-1">
      <h2>Bizimle Tanışın</h2>
      <InstagramPosts posts={posts} />
    </section>
  );
};

export default Section1;
