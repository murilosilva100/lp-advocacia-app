import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "../../../styles/App.css";

const FloatingContactButton = () => {
  const [isCompact, setIsCompact] = useState(false);
  useScrollAnimation(".floating-btn");

  useEffect(() => {
    const timer = window.setTimeout(() => setIsCompact(true), 4200);
    return () => window.clearTimeout(timer);
  }, []);

  const numeroWhatsApp = "5561999777736";
  const mensagemPredefinida =
    "Olá! Gostaria de saber mais sobre os serviços...";
  const mensagemCodificada = encodeURIComponent(mensagemPredefinida);
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  return (
    <a
      className={`floating-btn ${isCompact ? "compact" : ""}`}
      href={linkWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      title="Conversar pelo WhatsApp"
    >
      <span className="floating-btn-text">WhatsApp</span>
      <FaWhatsapp className="floating-btn-icon" />
    </a>
  );
};

export default FloatingContactButton;
