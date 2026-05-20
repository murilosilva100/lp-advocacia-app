import { MdPhoneEnabled, MdPhoneIphone } from "react-icons/md";
import "../../styles/StylesAdvCivel/advcivel.css";

export default function HomeAdvCivel() {
  return (
    <div id="tpcivel-home">
      <section id="tpcivel-container-home">
        <span className="area-hero-eyebrow">Direito Cível</span>
        <h1 id="tpcivel-title">
          Segurança jurídica para <span>patrimônio, contratos e família</span>
        </h1>
        <p id="tpcivel-description">
          Atuação técnica em conflitos civis, relações familiares, contratos,
          indenizações e questões patrimoniais, com orientação clara desde a
          análise inicial.
        </p>
        <div className="area-hero-highlights">
          <span>Contratos</span>
          <span>Família e sucessões</span>
          <span>Indenizações</span>
        </div>
        <div id="cta-services-buttons">
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
