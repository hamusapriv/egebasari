import React, { useEffect, useState } from "react";

const DEFAULT_URLS = [
  "https://www.instagram.com/reel/C_TxDk0oJBu/",
  "https://www.instagram.com/reel/ChNVVuegi01/",
  "https://www.instagram.com/reel/DLDRK6eIKTZ/",
  "https://www.instagram.com/reel/DLAVHWrI9ql/",
  "https://www.instagram.com/reel/DHT-XsaMfyy/",
  "https://www.instagram.com/reel/C9XEKTZoeBv/",
];

async function fetchPost(url) {
  const res = await fetch(`https://r.jina.ai/${url}`);
  const text = await res.text();

  const imageMatch = text.match(/https:\/\/[^"']*cdninstagram[^"']*/);
  const captionMatch = text.match(/Title: .*? on Instagram: "([^"]+)/);

  // username in format [username](https://www.instagram.com/username/)
  const usernameMatch = text.match(/\[([A-Za-z0-9_.]+)\]\(https:\/\/www\.instagram\.com\/\1\//);

  // likes count in format [123 likes](https://www.instagram.com/p/...)
  const likesMatch = text.match(/\[(\d+(?:,\d+)*) likes\]/);

  // Optional original audio link
  const audioMatch = text.match(/\[Original audio\]\(([^)]+)\)/);

  const post = {
    url,
    image: imageMatch ? imageMatch[0] : null,
    caption: captionMatch ? captionMatch[1] : "",
    username: usernameMatch ? usernameMatch[1] : "",
    likes: likesMatch ? parseInt(likesMatch[1].replace(/,/g, ""), 10) : 0,
    audio: audioMatch ? audioMatch[1] : null,
  };

  // Log each fetched post for debugging purposes
  console.log("Fetched", post);

  return post;
}

export default function InstagramPosts({ posts = DEFAULT_URLS }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const results = await Promise.all(posts.map(fetchPost));
      console.log("Fetched posts", results);
      setData(results);
    }
    load();
  }, [posts]);

  return (
    <div className="instagram-posts">
      {data.map((post, idx) => (
        <a
          className="instagram-card"
          key={idx}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {post.image && <img src={post.image} alt={post.caption} />}
          <p>{post.caption}</p>
        </a>
      ))}
    </div>
  );
}
