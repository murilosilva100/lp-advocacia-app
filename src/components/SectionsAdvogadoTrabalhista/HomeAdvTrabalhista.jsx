import { MdPhoneEnabled, MdPhoneIphone } from "react-icons/md";
import "../../styles/StylesAdvTrabalhista/advtrabalhista.css";

export default function HomeAdvTrabalhista() {
  return (
    <div id="tptrabalhista-home">
      <section id="tptrabalhista-container-home">
        <span className="area-hero-eyebrow">Direito Trabalhista</span>
        <h1 id="tptrabalhista-title">
          Orientação trabalhista para <span>decisões seguras</span>
        </h1>
        <p id="tptrabalhista-description">
          Atendimento para trabalhadores e empresas em rescisões, verbas,
          jornada, vínculo empregatício, assédio e prevenção de riscos.
        </p>
        <div className="area-hero-highlights">
          <span>Verbas rescisórias</span>
          <span>Horas extras</span>
          <span>Assédio e estabilidade</span>
        </div>
        <div id="cta-services-buttons">
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
