import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/Contacts.css";

export default function Contacts() {
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
            <a href="" className="contact-info">
              advogado@contato.com
            </a>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box">
              <FiInstagram />
            </div>
            <p className="contact-label">Instagram</p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info"
            >
              @advogadoinsta
            </a>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box">
              <FaWhatsapp />
            </div>
            <p className="contact-label">WhatsApp</p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info"
            >
              +55 61 98888-8888
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
