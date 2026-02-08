import { MdPhoneEnabled } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import "../../styles/StylesAdvCivel/advcivel.css";

export default function HomeAdvTrabalhista() {
  return (
    <div id="tpcivel-home">
      <section id="tpcivel-container-home">
        <h1 id="tpcivel-title">
          Advogado <span>Cível</span>
        </h1>
        <p id="tpcivel-description">
          Quando seus interesses estão em jogo, você precisa de orientação
          segura. Estamos ao seu lado em cada etapa do processo.
        </p>
        <div id="cta_services_buttons">
          <a href="https://wa.me/5561999777736?text=Olá! Gostaria de saber mais sobre os serviços...">
            <button className="btn-default">
              Entrar em Contato! <MdPhoneIphone size="25px" />
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
