import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "../styles/Contacts.css";

export default function Contacts() {
  useScrollAnimation(".contact-item");

  const EMAIL_CONTATO = "thiago.silva04082000@gmail.com";
  const USER_INSTAGRAM = "thiago.silva04";
  const NUMERO_WHATSAPP = "5561999777736";
  const MENSAGEM_WHATSAPP = "Olá! Tenho interesse em uma consulta jurídica.";

  const linkEmail = `mailto:${EMAIL_CONTATO}`;
  
  const linkInstagram = `https://www.instagram.com/${USER_INSTAGRAM}`;
  
  const mensagemCodificada = encodeURIComponent(MENSAGEM_WHATSAPP);
  const linkWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagemCodificada}`;

  return (
    <div id="contacts">
      <section id="contacts-container">
        <div id="contacts-text">
          <h2 id="sections-title">Contatos</h2>
          <p className="contacts-subtitle">
            Está pronto para entrar em contato com um Advogado Especialista?
            Fique à vontade!
          </p>
        </div>
        <div id="contacts-grid-container">
          
          <div className="contact-item">
            <div className="contact-icon-box">
              <MdOutlineMail />
            </div>
            <p className="contact-label">Email</p>
            <a href={linkEmail} className="contact-info">
              {EMAIL_CONTATO}
            </a>
          </div>

          <div className="contact-item">
            <div className="contact-icon-box">
              <FiInstagram />
            </div>
            <p className="contact-label">Instagram</p>
            <a
              href={linkInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info"
            >
              @{USER_INSTAGRAM}
            </a>
          </div>

          <div className="contact-item">
            <div className="contact-icon-box">
              <FaWhatsapp />
            </div>
            <p className="contact-label">WhatsApp</p>
            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info"
            >
              +55 61 999777736 
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}