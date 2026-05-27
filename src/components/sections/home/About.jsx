import { FiCheckCircle } from "react-icons/fi";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "../../../styles/home/About.css";

const values = [
  {
    title: "Análise cuidadosa",
    text: "Cada caso é estudado a partir dos fatos, documentos e riscos envolvidos, sem respostas automáticas ou promessas irreais.",
  },
  {
    title: "Comunicação clara",
    text: "O cliente recebe orientação objetiva sobre etapas, alternativas e possíveis desdobramentos antes de cada decisão relevante.",
  },
  {
    title: "Atuação responsável",
    text: "A estratégia jurídica é construída com discrição, técnica e atenção ao impacto prático de cada encaminhamento.",
  },
];

export default function About() {
  useScrollAnimation(".item-about");

  return (
    <div id="about">
      <section id="about-container">
        <div id="about-text">
          <span className="section-kicker">Sobre o advogado</span>
          <h2 id="sections-title">
            Técnica jurídica com <span id="sections-title-span">presença e responsabilidade</span>
          </h2>
          <p id="sections-subtitle">
            A atuação é guiada por estudo cuidadoso, comunicação clara e
            acompanhamento próximo, para que cada decisão seja tomada com
            segurança e consciência dos próximos passos.
          </p>
        </div>

        <div className="about-grid-container">
          <div className="item-about about-portrait-card" aria-label="Advogado Thiago F. S.">
            <div className="about-portrait-badge">OAB/DF 76.106</div>
            <div className="about-portrait-info">
              <span>Advocacia autônoma</span>
              <strong>Atendimento direto, técnico e personalizado.</strong>
            </div>
          </div>

          <div className="about-content-column">
            <article className="item-about about-statement">
              <span className="about-statement-kicker">Postura profissional</span>
              <h3>Direção jurídica para decisões mais seguras</h3>
              <p>
                O trabalho começa pela escuta do contexto e pela leitura técnica
                do cenário jurídico. A partir disso, são definidos os caminhos
                possíveis, os riscos envolvidos e a estratégia mais adequada
                para proteger os interesses do cliente.
              </p>
            </article>

            <div className="about-values-grid">
              {values.map((value) => (
                <article className="item-about about-value" key={value.title}>
                  <FiCheckCircle className="about-value-icon" />
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
