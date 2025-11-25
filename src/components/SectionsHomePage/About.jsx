import React from "react";
import imageabout from "../../assets/imageabout.jpg";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "../../styles/About.css";

export default function About() {
  useScrollAnimation(".item-about");

  return (
    <div id="about">
      <section id="about-container">
        <div id="about-text">
          <h2 id="sections-title">
            Sobre <span id="sections-title-span">o Advogado</span>
          </h2>
          <p id="sections-subtitle">
            Sou Thiago Farias da Silva, advogado inscrito na OAB/DF 76.106.
            Minha trajetória no Direito nasceu de um propósito claro: defender
            pessoas e causas com verdade, coragem e empatia.
          </p>
        </div>
        <div className="about-grid-container">
          <div className="item-about card-about">
            <h2>Experiência</h2>
            <p>
              Acredito que cada caso é único e que o papel do advogado vai muito
              além dos processos — é sobre restaurar a dignidade, trazer
              segurança e entregar soluções reais.
            </p>
          </div>
          <div className="item-about box-imagem-central">
            <img src={imageabout} alt="Pessoa de terno" />
            <div className="info-adicional">OAB/DF: 0000/00</div>
          </div>
          <div className="item-about card-about">
            <h2>Experiência</h2>
            <p>
              O que me levou a escolher a advocacia foi o desejo de fazer a
              diferença na vida das pessoas, principalmente nas áreas em que as
              dores humanas são mais sensíveis: Família, Direito Criminal e
              Direito do Trabalho.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
