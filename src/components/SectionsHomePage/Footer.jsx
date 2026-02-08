import React from "react";
import { FaBalanceScale } from "react-icons/fa";
import "../../styles/StylesAdvHomePage/Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <section id="footer-container">
        <div id="footer-grid-container">
          <div className="item-footer">
            <h3 className="footer-title">Fique à vontade!</h3>
            <p>
              Soluções legais personalizadas com foco em resultados e na sua
              tranquilidade.
            </p>
          </div>

          <div className="item-footer Navegar">
            <h3 className="footer-title">Navegar</h3>
            <ul className="footer-links" aria-label="Links de navegação">
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#questions">Perguntas</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
            </ul>
          </div>

          <div className="item-footer">
            <h3 className="footer-title">Contatos</h3>
            <p>
              <a>+55 61 98888-8888</a>
            </p>
            <p>
              <a>Advogado@contato.com</a>
            </p>
            <p>
              <a>@advogadoinsta</a>
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
