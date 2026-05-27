import { MdPhoneEnabled, MdPhoneIphone } from "react-icons/md";
import "../../../styles/services/criminal.css";

export default function CriminalHero() {
  return (
    <div id="criminal-home">
      <section id="criminal-container-home">
        <span className="area-hero-eyebrow service-hero-sequence">Direito Criminal</span>
        <h1 id="criminal-title" className="service-hero-sequence">
          Defesa técnica para situações <span>urgentes e sensíveis</span>
        </h1>
        <p id="criminal-description" className="service-hero-sequence">
          Atuação estratégica em investigações, prisões, audiências e ações
          penais, com discrição, preparo e orientação objetiva desde o primeiro
          contato.
        </p>
        <div className="area-hero-highlights service-hero-sequence">
          <span>Flagrante e custódia</span>
          <span>Investigação</span>
          <span>Ação penal</span>
        </div>
        <div id="cta-services-buttons" className="service-hero-sequence">
          <a href="https://wa.me/5561999777736?text=Olá! Preciso de orientação em Direito Criminal.">
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
