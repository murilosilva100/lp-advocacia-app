import { MdPhoneEnabled, MdPhoneIphone } from "react-icons/md";
import "../../styles/StylesAdvCriminalista/advcriminalista.css";

export default function HomeAdvCriminalista() {
  return (
    <div id="tpcriminalista-home">
      <section id="tpcriminalista-container-home">
        <span className="area-hero-eyebrow">Direito Criminal</span>
        <h1 id="tpcriminalista-title">
          Defesa técnica para situações <span>urgentes e sensíveis</span>
        </h1>
        <p id="tpcriminalista-description">
          Atuação estratégica em investigações, prisões, audiências e ações
          penais, com discrição, preparo e orientação objetiva desde o primeiro
          contato.
        </p>
        <div className="area-hero-highlights">
          <span>Flagrante e custódia</span>
          <span>Investigação</span>
          <span>Ação penal</span>
        </div>
        <div id="cta-services-buttons">
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
