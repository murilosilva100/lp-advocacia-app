import { useState } from "react";
import { FaChevronDown, FaHandshake, FaUniversity, FaUserShield } from "react-icons/fa";
import { FaFileSignature, FaMoneyBillWave } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import CivelContentImgN1 from "../../assets/civel-content-img-n1.webp";
import CivelContentImgN2 from "../../assets/civel-content-img-n2.webp";
import "../../styles/StylesAdvCivel/advcivel.css";

const CivelItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`civel-item ${isOpen ? "open" : ""}`}>
      <button className="civel-question-button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span className="civel-question-text">{title}</span>
        <FaChevronDown className="civel-icon" />
      </button>

      <div className="civel-answer-container">
        <p className="civel-answer-text">{description}</p>
      </div>
    </div>
  );
};

export default function ConteudoAdvCivel() {
  const civelContent = [
    {
      id: 1,
      title: (
        <>
          <FaFileSignature className="icones-civel" /> Inventário e sucessões
        </>
      ),
      description:
        "Organização da documentação, definição do caminho adequado e condução da transmissão de bens com segurança jurídica.",
    },
    {
      id: 2,
      title: (
        <>
          <FaUserShield className="icones-civel" /> Família, divórcio e alimentos
        </>
      ),
      description:
        "Atuação em divórcio, guarda, convivência, alimentos e partilha, com atenção ao impacto humano e patrimonial da decisão.",
    },
    {
      id: 3,
      title: (
        <>
          <FaExclamationTriangle className="icones-civel" /> Responsabilidade civil
        </>
      ),
      description:
        "Análise de danos, descumprimentos e prejuízos para avaliar medidas de reparação ou defesa em demandas indenizatórias.",
    },
    {
      id: 4,
      title: (
        <>
          <FaMoneyBillWave className="icones-civel" /> Ações indenizatórias
        </>
      ),
      description:
        "Atuação em danos morais, materiais e lucros cessantes, com apuração cuidadosa de provas, valores e riscos processuais.",
    },
    {
      id: 5,
      title: (
        <>
          <FaHandshake className="icones-civel" /> Contratos e consultoria
        </>
      ),
      description:
        "Elaboração, revisão e negociação de contratos para prevenir conflitos e estabelecer obrigações claras entre as partes.",
    },
    {
      id: 6,
      title: (
        <>
          <FaUniversity className="icones-civel" /> Responsabilidade do Estado
        </>
      ),
      description:
        "Demandas envolvendo danos causados por agentes públicos ou falhas de serviço da Administração Pública.",
    },
  ];

  return (
    <div id="tpcivel-conteudo">
      <section id="tpcivel-container-conteudo">
        <div id="tpcivel-text">
          <header className="area-content-header">
            <span className="area-content-kicker">Atuação cível</span>
            <h2 id="tpcivel-section-title">
              Soluções para conflitos <span id="tpcivel-section-title-span">patrimoniais e familiares</span>
            </h2>
            <p className="area-content-lead">
              O trabalho começa pela compreensão dos fatos, leitura dos
              documentos e definição de uma estratégia compatível com o risco,
              o tempo e o objetivo do cliente.
            </p>
          </header>

          <div className="area-accordion-grid">
            {civelContent.map((item) => (
              <CivelItem key={item.id} title={item.title} description={item.description} />
            ))}
          </div>

          <div className="area-insight bg-civel-1">
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
              <img src={CivelContentImgN1} alt="Atendimento em Direito Cível" />
            </div>
          </div>

          <div className="area-insight reverse bg-civel-2">
            <div className="area-insight-media">
              <img src={CivelContentImgN2} alt="Análise de documentos cíveis" />
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
