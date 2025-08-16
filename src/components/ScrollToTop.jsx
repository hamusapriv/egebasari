import { useState, useEffect } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const rootElement = document.getElementById("root");
      if (rootElement && rootElement.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.addEventListener("scroll", toggleVisibility);
      return () => rootElement.removeEventListener("scroll", toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Yukarı kaydır"
      title="Yukarı kaydır"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
