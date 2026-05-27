import { useState } from "react";
import { FaChevronDown, FaHandshake, FaUniversity, FaUserShield } from "react-icons/fa";
import { FaFileSignature, FaMoneyBillWave } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import serviceContentImageOne from "../../../assets/civil-content-image-1.webp";
import serviceContentImageTwo from "../../../assets/civil-content-image-2.webp";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "../../../styles/services/civil.css";

const CivilItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`civil-item ${isOpen ? "open" : ""}`}>
      <button className="civil-question-button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span className="civil-question-text">{title}</span>
        <FaChevronDown className="civil-icon" />
      </button>

      <div className="civil-answer-container">
        <p className="civil-answer-text">{description}</p>
      </div>
    </div>
  );
};

export default function CivilContent() {
  useScrollAnimation(".area-content-header, .area-accordion-grid, .area-insight", { threshold: 0.14 });

  const civilContent = [
    {
      id: 1,
      title: (
        <>
          <FaFileSignature className="civil-icons" /> Inventário e sucessões
        </>
      ),
      description:
        "Organização da documentação, definição do caminho adequado e condução da transmissão de bens com segurança jurídica.",
    },
    {
      id: 2,
      title: (
        <>
          <FaUserShield className="civil-icons" /> Família, divórcio e alimentos
        </>
      ),
      description:
        "Atuação em divórcio, guarda, convivência, alimentos e partilha, com atenção ao impacto humano e patrimonial da decisão.",
    },
    {
      id: 3,
      title: (
        <>
          <FaExclamationTriangle className="civil-icons" /> Responsabilidade civil
        </>
      ),
      description:
        "Análise de danos, descumprimentos e prejuízos para avaliar medidas de reparação ou defesa em demandas indenizatórias.",
    },
    {
      id: 4,
      title: (
        <>
          <FaMoneyBillWave className="civil-icons" /> Ações indenizatórias
        </>
      ),
      description:
        "Atuação em danos morais, materiais e lucros cessantes, com apuração cuidadosa de provas, valores e riscos processuais.",
    },
    {
      id: 5,
      title: (
        <>
          <FaHandshake className="civil-icons" /> Contratos e consultoria
        </>
      ),
      description:
        "Elaboração, revisão e negociação de contratos para prevenir conflitos e estabelecer obrigações claras entre as partes.",
    },
    {
      id: 6,
      title: (
        <>
          <FaUniversity className="civil-icons" /> Responsabilidade do Estado
        </>
      ),
      description:
        "Demandas envolvendo danos causados por agentes públicos ou falhas de serviço da Administração Pública.",
    },
  ];

  return (
    <div id="civil-content">
      <section id="civil-container-content">
        <div id="civil-text">
          <header className="area-content-header">
            <span className="area-content-kicker">Atuação cível</span>
            <h2 id="civil-section-title">
              Soluções para conflitos <span id="civil-section-title-span">patrimoniais e familiares</span>
            </h2>
            <p className="area-content-lead">
              O trabalho começa pela compreensão dos fatos, leitura dos
              documentos e definição de uma estratégia compatível com o risco,
              o tempo e o objetivo do cliente.
            </p>
          </header>

          <div className="area-accordion-grid">
            {civilContent.map((item) => (
              <CivilItem key={item.id} title={item.title} description={item.description} />
            ))}
          </div>

          <div className="area-insight bg-civil-1">
            <div className="area-insight-copy">
              <h3>Quando o Direito Cível se torna necessário</h3>
              <p>
                Nem todo conflito precisa começar no Judiciário. Em muitos
                casos, uma orientação técnica permite organizar documentos,
                medir riscos e buscar uma solução negociada antes que o problema
                se torne maior.
              </p>
              <p>
                Quando o acordo não é possível, a atuação judicial deve ser
                construída com precisão: prova adequada, pedido bem delimitado e
                acompanhamento constante.
              </p>
              <ul className="area-insight-list">
                <li>Contratos descumpridos ou mal redigidos</li>
                <li>Prejuízos materiais, morais ou patrimoniais</li>
                <li>Inventário, partilha, divórcio e questões familiares</li>
              </ul>
            </div>
            <div className="area-insight-media">
              <img src={serviceContentImageOne} alt="Atendimento em Direito Cível" />
            </div>
          </div>

          <div className="area-insight reverse bg-civil-2">
            <div className="area-insight-media">
              <img src={serviceContentImageTwo} alt="Análise de documentos cíveis" />
            </div>
            <div className="area-insight-copy">
              <h3>Orientação antes da decisão</h3>
              <p>
                Procurar orientação cedo ajuda a preservar provas, evitar
                acordos prejudiciais e compreender as alternativas disponíveis
                antes de assumir custos, prazos ou riscos desnecessários.
              </p>
              <p>
                A atuação cível busca transformar cenários incertos em decisões
                mais claras, com previsibilidade e responsabilidade.
              </p>
              <ul className="area-insight-list">
                <li>Análise inicial de documentos e riscos</li>
                <li>Estratégia para negociação ou ação judicial</li>
                <li>Acompanhamento próximo durante cada etapa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
