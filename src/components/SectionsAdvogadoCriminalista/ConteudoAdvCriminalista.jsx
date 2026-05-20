import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import CivelContentImgN1 from "../../assets/civel-content-img-n1.webp";
import CivelContentImgN2 from "../../assets/civel-content-img-n2.webp";
import "../../styles/StylesAdvCriminalista/advcriminalista.css";

const CriminalistaItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`criminalista-item ${isOpen ? "open" : ""}`}>
      <button className="criminalista-question-button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span className="criminalista-question-text">{title}</span>
        <FaChevronDown className="criminalista-icon" />
      </button>

      <div className="criminalista-answer-container">
        <p className="criminalista-answer-text">{description}</p>
      </div>
    </div>
  );
};

export default function ConteudoAdvCriminalista() {
  const criminalistaContent = [
    {
      id: 1,
      title: "Audiência de custódia e flagrante",
      description:
        "Atuação rápida em prisões em flagrante, análise da legalidade da prisão, pedidos de liberdade e medidas cautelares.",
    },
    {
      id: 2,
      title: "Inquérito policial e investigação",
      description:
        "Acompanhamento da fase investigativa, orientação antes de depoimentos e proteção das garantias do investigado.",
    },
    {
      id: 3,
      title: "Defesa em ação penal",
      description:
        "Estratégia defensiva, resposta à acusação, acompanhamento de audiências, memoriais, recursos e demais atos processuais.",
    },
    {
      id: 4,
      title: "Crimes contra o patrimônio",
      description:
        "Defesa em casos de furto, roubo, estelionato, receptação, apropriação indébita e outras acusações patrimoniais.",
    },
    {
      id: 5,
      title: "Violência doméstica e medidas protetivas",
      description:
        "Atuação em procedimentos da Lei Maria da Penha, medidas protetivas, audiências e acompanhamento processual.",
    },
    {
      id: 6,
      title: "Execução penal",
      description:
        "Pedidos de progressão de regime, livramento condicional, remição de pena e acompanhamento do cumprimento da pena.",
    },
  ];

  return (
    <div id="tpcriminalista-conteudo">
      <section id="tpcriminalista-container-conteudo">
        <div id="tpcriminalista-text">
          <header className="area-content-header">
            <span className="area-content-kicker">Atuação criminal</span>
            <h2 id="tpcriminalista-section-title">
              Defesa técnica com <span id="tpcriminalista-section-title-span">urgência e discrição</span>
            </h2>
            <p className="area-content-lead">
              Em matéria criminal, as primeiras decisões importam. A atuação
              busca preservar direitos, orientar cada passo e construir uma
              defesa compatível com a realidade do caso.
            </p>
          </header>

          <div className="area-accordion-grid">
            {criminalistaContent.map((item) => (
              <CriminalistaItem key={item.id} title={item.title} description={item.description} />
            ))}
          </div>

          <div className="area-insight bg-criminalista-1">
            <div className="area-insight-copy">
              <h3>Atuação desde o primeiro ato</h3>
              <p>
                A orientação antes de depoimentos, audiências ou cumprimento de
                mandados evita decisões precipitadas e reduz riscos processuais.
                Cada detalhe da fase inicial pode influenciar o restante do
                procedimento.
              </p>
              <p>
                A defesa criminal exige presença técnica, leitura cuidadosa dos
                elementos de prova e comunicação objetiva com o cliente e sua
                família.
              </p>
              <ul className="area-insight-list">
                <li>Prisões, flagrantes e audiência de custódia</li>
                <li>Investigações, intimações e depoimentos</li>
                <li>Ações penais, recursos e execução penal</li>
              </ul>
            </div>
            <div className="area-insight-media">
              <img src={CivelContentImgN1} alt="Defesa criminal técnica" />
            </div>
          </div>

          <div className="area-insight reverse bg-criminalista-2">
            <div className="area-insight-media">
              <img src={CivelContentImgN2} alt="Orientação jurídica criminal" />
            </div>
            <div className="area-insight-copy">
              <h3>Quando buscar defesa criminal</h3>
              <p>
                Procure orientação ao receber intimação, ser citado em processo,
                enfrentar investigação, prisão, busca e apreensão ou qualquer
                situação que possa gerar responsabilização penal.
              </p>
              <p>
                A atuação antecipada permite compreender o cenário, preservar
                direitos e definir uma estratégia antes que o caso avance sem
                preparação adequada.
              </p>
              <ul className="area-insight-list">
                <li>Atendimento discreto e objetivo</li>
                <li>Análise de riscos e medidas cabíveis</li>
                <li>Acompanhamento em cada fase do procedimento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
