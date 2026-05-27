import { MdPhoneEnabled, MdPhoneIphone } from "react-icons/md";
import "../../../styles/services/labor.css";

export default function LaborHero() {
  return (
    <div id="labor-home">
      <section id="labor-container-home">
        <span className="area-hero-eyebrow service-hero-sequence">Direito Trabalhista</span>
        <h1 id="labor-title" className="service-hero-sequence">
          Orientação trabalhista para <span>decisões seguras</span>
        </h1>
        <p id="labor-description" className="service-hero-sequence">
          Atendimento para trabalhadores e empresas em rescisões, verbas,
          jornada, vínculo empregatício, assédio e prevenção de riscos.
        </p>
        <div className="area-hero-highlights service-hero-sequence">
          <span>Verbas rescisórias</span>
          <span>Horas extras</span>
          <span>Assédio e estabilidade</span>
        </div>
        <div id="cta-services-buttons" className="service-hero-sequence">
          <a href="https://wa.me/5561999777736?text=Olá! Gostaria de orientação em Direito Trabalhista.">
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
