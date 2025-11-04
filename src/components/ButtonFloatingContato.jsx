import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "../styles/App.css";

const ButtonFloatingContato = () => {
  useScrollAnimation(".floating-btn");
  const numeroWhatsApp = "5561999777736";
  const mensagemPredefinida = "Olá! Gostaria de saber mais sobre os serviços...";
  const mensagemCodificada = encodeURIComponent(mensagemPredefinida);
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  return (
    <a
      className="floating-btn"
      href={linkWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
    >
      Contatar
      <FaWhatsapp size="25px" style={{ marginLeft: "12px" }} />{" "}
    </a>
  );
};

export default ButtonFloatingContato;
