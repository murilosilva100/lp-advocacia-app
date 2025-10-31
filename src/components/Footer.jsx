import React from "react";
import { FaBalanceScale } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <section id="footer-container">
        <div id="footer-grid-container">
          <div className="item-footer">
            <h3 className="footer-title">
              <FaBalanceScale className="footer-icon" /> Email
            </h3>
            <p>
              (Seção em duas frases). Soluções legais personalizadas com foco em resultados e
              na sua tranquilidade. Defendemos seus direitos com ética.
            </p>
          </div>

          <div className="item-footer Navegar">
            <h3 className="footer-title">Navegar</h3>
            <ul className="footer-links" aria-label="Links de navegação">
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#faq">Perguntas</a></li>
            </ul>
          </div>

          <div className="item-footer">
            <h3 className="footer-title">Contatos</h3>
            <p><a href="tel:+5561988888888">+55 61 98888-8888</a></p>
            <p><a href="mailto:Advogado@contato.com">Advogado@contato.com</a></p>
            <p>
              <a
                href="https://instagram.com/advogadoinsta"
                target="_blank"
                rel="noopener noreferrer"
              >
                @advogadoinsta
              </a>
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          © {new Date().getFullYear()} - Todos os direitos reservados.
        </div>
      </section>
    </footer>
  );
}