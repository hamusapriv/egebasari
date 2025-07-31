import { useEffect } from "react";

const SEOHead = ({
  title,
  description,
  keywords,
  ogImage = "/assets/logo.png",
  canonical,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute("content", `https://egebasari.com${ogImage}`);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector(
      'meta[property="twitter:title"]'
    );
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    const twitterDesc = document.querySelector(
      'meta[property="twitter:description"]'
    );
    if (twitterDesc) {
      twitterDesc.setAttribute("content", description);
    }

    const twitterImg = document.querySelector('meta[property="twitter:image"]');
    if (twitterImg) {
      twitterImg.setAttribute("content", `https://egebasari.com${ogImage}`);
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", `https://egebasari.com${canonical}`);
    }

    // Update og:url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && canonical) {
      ogUrl.setAttribute("content", `https://egebasari.com${canonical}`);
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl && canonical) {
      twitterUrl.setAttribute("content", `https://egebasari.com${canonical}`);
    }
  }, [title, description, keywords, ogImage, canonical]);

  return null; // This component doesn't render anything
};

export default SEOHead;
