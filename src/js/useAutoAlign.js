import { useEffect } from 'react';

export default function useAutoAlign() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    if (!sections.length) return;

    let manual = false;
    let manualTimeout;

    const setManual = () => {
      manual = true;
      clearTimeout(manualTimeout);
      manualTimeout = setTimeout(() => {
        manual = false;
        alignCurrentSection();
      }, 1000); // restart after 1s of no input
    };

    const alignSection = (section) => {
      setTimeout(() => {
        if (!manual) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // 0.5s delay
    };

    const alignCurrentSection = () => {
      const { innerHeight } = window;
      const target = sections.find((sec) => {
        const rect = sec.getBoundingClientRect();
        const visible = Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 0);
        return visible >= rect.height * 0.6;
      });
      if (target) alignSection(target);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          alignSection(entry.target);
        }
      });
    }, { threshold: 0.6 });

    sections.forEach((sec) => observer.observe(sec));

    window.addEventListener('wheel', setManual, { passive: true });
    window.addEventListener('touchmove', setManual, { passive: true });
    window.addEventListener('keydown', setManual, { passive: true });

    return () => {
      observer.disconnect();
      clearTimeout(manualTimeout);
      window.removeEventListener('wheel', setManual);
      window.removeEventListener('touchmove', setManual);
      window.removeEventListener('keydown', setManual);
    };
  }, []);
}
