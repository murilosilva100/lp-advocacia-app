import React from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "../../styles/StylesAdvHomePage/About.css";

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
            Minha atuação na Advocacia é guiada por um propósito objetivo:
            resolver problemas jurídicos com técnica, estratégia e
            responsabilidade.
          </p>
        </div>
        <div className="about-grid-container">
          <div className="item-about card-about">
            <h2>Princípios</h2>
            <p>
              Minha escolha pela advocacia foi orientada pelo compromisso de
              atuar em áreas que impactam diretamente a vida das pessoas:
              Direito de Família, Direito Penal e Direito do Trabalho. São
              campos em que estão em jogo liberdade, patrimônio, estabilidade
              profissional e estrutura familiar, o que exige precisão,
              equilíbrio e postura firme.
            </p>
          </div>
          <div className="item-about box-imagem-central">
            <div className="info-adicional">OAB/DF 76.106</div>
          </div>
          <div className="item-about card-about">
            <h2>Propósito</h2>
            <p>
              Cada demanda é tratada com estudo criterioso dos fatos, definição
              de estratégia adequada e acompanhamento próximo do cliente. O
              objetivo é oferecer direção clara, atuação consistente e segurança
              na tomada de decisões, sempre com ética e responsabilidade
              profissional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
