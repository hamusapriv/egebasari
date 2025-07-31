import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preconnect to external domains for faster loading
    const preconnectLinks = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.google.com",
      "https://maps.googleapis.com",
    ];

    preconnectLinks.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      document.head.appendChild(link);
    });

    // Add DNS prefetch for Instagram
    const dnsPrefetch = document.createElement("link");
    dnsPrefetch.rel = "dns-prefetch";
    dnsPrefetch.href = "https://www.instagram.com";
    document.head.appendChild(dnsPrefetch);

    // Lazy load images after initial page load
    const lazyLoadImages = () => {
      const images = document.querySelectorAll("img[data-src]");
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Run lazy loading after a short delay
    setTimeout(lazyLoadImages, 100);

    // Cleanup function
    return () => {
      // Remove added links on unmount if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
