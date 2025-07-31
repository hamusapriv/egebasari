import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sections.forEach((sec) => {
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);
}
