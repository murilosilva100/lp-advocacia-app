import { FiArrowUpRight, FiInstagram, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { HiScale } from "react-icons/hi2";
import "../../../styles/home/Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <section id="footer-container">
        <div className="footer-topline">
          <div className="footer-mark">
            <HiScale />
            <span>Adv Thiago F. S.</span>
          </div>
          <a className="footer-cta" href="#contacts">
            Solicitar orientação <FiArrowUpRight />
          </a>
        </div>

        <div id="footer-grid-container">
          <div className="item-footer footer-brand">
            <h3 className="footer-title">Atuação jurídica com clareza</h3>
            <p>
              Advocacia autônoma com atendimento técnico, comunicação objetiva
              e acompanhamento próximo em demandas que exigem responsabilidade.
            </p>
          </div>

          <div className="item-footer Navegar">
            <h3 className="footer-title">Navegar</h3>
            <ul className="footer-links" aria-label="Links de navegação">
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#process">Atendimento</a>
              </li>
              <li>
                <a href="#questions">Perguntas</a>
              </li>
            </ul>
          </div>

          <div className="item-footer footer-contact">
            <h3 className="footer-title">Contatos</h3>
            <a href="tel:+5561999777736">
              <FiPhone />
              +55 (61) 99977-7736
            </a>
            <a href="mailto:advogadothiagofs@gmail.com">
              <FiMail />
              advogadothiagofs@gmail.com
            </a>
            <a href="https://www.instagram.com/thiago.silva04" target="_blank" rel="noopener noreferrer">
              <FiInstagram />
              @thiago.silva04
            </a>
            <span>
              <FiMapPin />
              Brasília - DF
            </span>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} - Todos os direitos reservados.</span>
          <span>OAB/DF 76.106</span>
        </div>
      </section>
    </footer>
  );
}
