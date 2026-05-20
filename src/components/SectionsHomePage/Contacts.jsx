import { MdLocationOn, MdOutlineMail, MdPhoneEnabled } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "../../styles/StylesAdvHomePage/Contacts.css";

export default function Contacts() {
  useScrollAnimation(".contact-item");

  const EMAIL_CONTATO = "advogadothiagofs@gmail.com";
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
        <div id="contacts-contorno">
          <div id="contacts-text">
            <span className="section-kicker">Contato</span>
            <h2 id="sections-title">Fale com o advogado</h2>
            <p id="sections-subtitle">
              Envie uma mensagem com breve descrição do caso para receber uma
              orientação inicial sobre os próximos passos.
            </p>
          </div>
          <div id="contacts-grid-container">
            <div className="contact-item">
              <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="contact-info">
                <div className="contact-icon-box">
                  <FaWhatsapp />
                </div>
                <p className="contact-label">WhatsApp</p>
                <span>Atendimento inicial</span>
              </a>
            </div>

            <div className="contact-item">
              <a href="tel:+5561999777736" className="contact-info">
                <div className="contact-icon-box">
                  <MdPhoneEnabled />
                </div>
                <p className="contact-label">Telefone</p>
                <span>+55 (61) 99977-7736</span>
              </a>
            </div>

            <div className="contact-item">
              <a href={linkEmail} className="contact-info">
                <div className="contact-icon-box">
                  <MdOutlineMail />
                </div>
                <p className="contact-label">E-mail</p>
                <span>{EMAIL_CONTATO}</span>
              </a>
            </div>

            <div className="contact-item">
              <a href={linkInstagram} target="_blank" rel="noopener noreferrer" className="contact-info">
                <div className="contact-icon-box">
                  <FiInstagram />
                </div>
                <p className="contact-label">Instagram</p>
                <span>@{USER_INSTAGRAM}</span>
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-info">
                <div className="contact-icon-box">
                  <MdLocationOn />
                </div>
                <p className="contact-label">Localização</p>
                <span>Brasília - DF</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
