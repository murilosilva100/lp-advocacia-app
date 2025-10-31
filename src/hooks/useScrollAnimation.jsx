import { useEffect } from "react";

export default function useScrollAnimation(selector, options = { threshold: 0.2 }) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, options]);
}
