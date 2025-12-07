import useScrollAnimation from "../../hooks/useScrollAnimation";
import bannerImage1 from "../../assets/imageBanner.png";
import { MdPhoneEnabled } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import "../../styles/Home.css";

export default function Home() {
  useScrollAnimation(".cta");

  return (
    <div id="home">
      <section id="home-container">
        <div id="cta" className="cta">
          <h1 className="title">
            Sua integridade e dignidade <span>merecem a melhor defesa</span>
          </h1>
          <p className="description">
            Advocacia comprometida com seus direitos e sua tranquilidade. Defesa
            estratégica e atendimento humanizado quando você mais precisa.
            <span> Sua tranquilidade começa com a defesa certa.</span>
          </p>
          <div id="cta_buttons">
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
        </div>
        <div id="banner">
          <img src={bannerImage1} alt="" />
        </div>
      </section>
    </div>
  );
}
