import { MdPhoneEnabled, MdPhoneIphone } from "react-icons/md";
import "../../../styles/services/civil.css";

export default function CivilHero() {
  return (
    <div id="civil-home">
      <section id="civil-container-home">
        <span className="area-hero-eyebrow service-hero-sequence">Direito Cível</span>
        <h1 id="civil-title" className="service-hero-sequence">
          Segurança jurídica para <span>patrimônio, contratos e família</span>
        </h1>
        <p id="civil-description" className="service-hero-sequence">
          Atuação técnica em conflitos civis, relações familiares, contratos,
          indenizações e questões patrimoniais, com orientação clara desde a
          análise inicial.
        </p>
        <div className="area-hero-highlights service-hero-sequence">
          <span>Contratos</span>
          <span>Família e sucessões</span>
          <span>Indenizações</span>
        </div>
        <div id="cta-services-buttons" className="service-hero-sequence">
          <a href="https://wa.me/5561999777736?text=Olá! Gostaria de orientação em Direito Cível.">
            <button className="btn-default">
              Solicitar orientação <MdPhoneIphone size="25px" />
            </button>
          </a>
          <a href="tel:+5561996172502" id="phone_button">
            <button className="btn-default">
              +55 (61) 99977-7736 <MdPhoneEnabled size="25px" />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
