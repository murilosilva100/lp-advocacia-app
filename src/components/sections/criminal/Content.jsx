import { useState } from "react";
import { FaBalanceScale, FaChevronDown, FaGavel, FaHouseDamage, FaSearch, FaShieldAlt, FaUserLock } from "react-icons/fa";
import serviceContentImageOne from "../../../assets/civil-content-image-1.webp";
import serviceContentImageTwo from "../../../assets/civil-content-image-2.webp";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "../../../styles/services/criminal.css";

const CriminalItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`criminal-item ${isOpen ? "open" : ""}`}>
      <button className="criminal-question-button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span className="criminal-question-text">{title}</span>
        <FaChevronDown className="criminal-icon" />
      </button>

      <div className="criminal-answer-container">
        <p className="criminal-answer-text">{description}</p>
      </div>
    </div>
  );
};

export default function CriminalContent() {
  useScrollAnimation(".area-content-header, .area-accordion-grid, .area-insight", { threshold: 0.14 });

  const criminalContent = [
    {
      id: 1,
      title: (
        <>
          <FaUserLock className="criminal-icons" /> Audiência de custódia e flagrante
        </>
      ),
      description:
        "Atuação rápida em prisões em flagrante, análise da legalidade da prisão, pedidos de liberdade e medidas cautelares.",
    },
    {
      id: 2,
      title: (
        <>
          <FaSearch className="criminal-icons" /> Inquérito policial e investigação
        </>
      ),
      description:
        "Acompanhamento da fase investigativa, orientação antes de depoimentos e proteção das garantias do investigado.",
    },
    {
      id: 3,
      title: (
        <>
          <FaGavel className="criminal-icons" /> Defesa em ação penal
        </>
      ),
      description:
        "Estratégia defensiva, resposta à acusação, acompanhamento de audiências, memoriais, recursos e demais atos processuais.",
    },
    {
      id: 4,
      title: (
        <>
          <FaHouseDamage className="criminal-icons" /> Crimes contra o patrimônio
        </>
      ),
      description:
        "Defesa em casos de furto, roubo, estelionato, receptação, apropriação indébita e outras acusações patrimoniais.",
    },
    {
      id: 5,
      title: (
        <>
          <FaShieldAlt className="criminal-icons" /> Violência doméstica e medidas protetivas
        </>
      ),
      description:
        "Atuação em procedimentos da Lei Maria da Penha, medidas protetivas, audiências e acompanhamento processual.",
    },
    {
      id: 6,
      title: (
        <>
          <FaBalanceScale className="criminal-icons" /> Execução penal
        </>
      ),
      description:
        "Pedidos de progressão de regime, livramento condicional, remição de pena e acompanhamento do cumprimento da pena.",
    },
  ];

  return (
    <div id="criminal-content">
      <section id="criminal-container-content">
        <div id="criminal-text">
          <header className="area-content-header">
            <span className="area-content-kicker">Atuação criminal</span>
            <h2 id="criminal-section-title">
              Defesa técnica com <span id="criminal-section-title-span">urgência e discrição</span>
            </h2>
            <p className="area-content-lead">
              Em matéria criminal, as primeiras decisões importam. A atuação
              busca preservar direitos, orientar cada passo e construir uma
              defesa compatível com a realidade do caso.
            </p>
          </header>

          <div className="area-accordion-grid">
            {criminalContent.map((item) => (
              <CriminalItem key={item.id} title={item.title} description={item.description} />
            ))}
          </div>

          <div className="area-insight bg-criminal-1">
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
              <img src={serviceContentImageOne} alt="Defesa criminal técnica" />
            </div>
          </div>

          <div className="area-insight reverse bg-criminal-2">
            <div className="area-insight-media">
              <img src={serviceContentImageTwo} alt="Orientação jurídica criminal" />
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
