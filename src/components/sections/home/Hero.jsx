import useScrollAnimation from "../../../hooks/useScrollAnimation";
import heroSectionBanner from "../../../assets/home-cta-img.png";
import { MdPhoneEnabled, MdPhoneIphone } from "react-icons/md";
import "../../../styles/home/Hero.css";

export default function Hero() {
  useScrollAnimation(".cta");

  return (
    <div id="home">
      <section id="home-container">
        <div id="cta" className="cta">
          <span className="hero-eyebrow hero-sequence">OAB/DF 76.106</span>
          <h1 className="title hero-sequence">
            Atuação jurídica estratégica <span>com foco em segurança</span>
          </h1>
          <p className="description hero-sequence">
            Orientação clara, atuação técnica e acompanhamento próximo em
            momentos que exigem responsabilidade, discrição e preparo.
            <span>
              <i> Segurança jurídica começa com uma estratégia bem definida.</i>
            </span>
          </p>
          <div id="cta_buttons" className="hero-sequence">
            <a href="https://wa.me/5561999777736?text=Olá! Gostaria de saber mais sobre os serviços...">
              <button className="btn-default">
                Entrar em contato <MdPhoneIphone size="25px" />
              </button>
            </a>
            <a href="tel:+5561996172502" id="phone_button">
              <button className="btn-default">
                +55 (61) 99977-7736 <MdPhoneEnabled size="25px" />
              </button>
            </a>
          </div>
        </div>
        <div id="banner">
          <img src={heroSectionBanner} alt="Advogado em traje profissional" />
        </div>
      </section>
    </div>
  );
}
