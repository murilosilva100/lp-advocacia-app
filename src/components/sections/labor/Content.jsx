import { useState } from "react";
import { FaBriefcase, FaBusinessTime, FaChevronDown, FaClock, FaFileContract, FaHandHoldingUsd, FaUserTie } from "react-icons/fa";
import serviceContentImageOne from "../../../assets/civil-content-image-1.webp";
import serviceContentImageTwo from "../../../assets/civil-content-image-2.webp";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "../../../styles/services/labor.css";

const LaborItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`labor-item ${isOpen ? "open" : ""}`}>
      <button className="labor-question-button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span className="labor-question-text">{title}</span>
        <FaChevronDown className="labor-icon" />
      </button>

      <div className="labor-answer-container">
        <p className="labor-answer-text">{description}</p>
      </div>
    </div>
  );
};

export default function LaborContent() {
  useScrollAnimation(".area-content-header, .area-accordion-grid, .area-insight", { threshold: 0.14 });

  const laborContent = [
    {
      id: 1,
      title: (
        <>
          <FaHandHoldingUsd className="labor-icons" /> Verbas rescisórias
        </>
      ),
      description:
        "Análise de saldo de salário, aviso-prévio, férias, 13º salário, FGTS, multa rescisória e demais parcelas devidas.",
    },
    {
      id: 2,
      title: (
        <>
          <FaClock className="labor-icons" /> Horas extras e jornada
        </>
      ),
      description:
        "Atuação em jornada excessiva, intervalo não concedido, adicional noturno, banco de horas irregular e horas não pagas.",
    },
    {
      id: 3,
      title: (
        <>
          <FaFileContract className="labor-icons" /> Reconhecimento de vínculo
        </>
      ),
      description:
        "Orientação em casos de trabalho sem registro, com subordinação, habitualidade, pessoalidade e remuneração.",
    },
    {
      id: 4,
      title: (
        <>
          <FaUserTie className="labor-icons" /> Assédio e discriminação
        </>
      ),
      description:
        "Apoio em situações de abuso, perseguição, humilhação, constrangimento ou conduta discriminatória no ambiente laboral.",
    },
    {
      id: 5,
      title: (
        <>
          <FaBriefcase className="labor-icons" /> Acidente de trabalho e estabilidade
        </>
      ),
      description:
        "Atuação em acidente, doença ocupacional, afastamentos, estabilidade provisória e indenizações relacionadas ao trabalho.",
    },
    {
      id: 6,
      title: (
        <>
          <FaBusinessTime className="labor-icons" /> Consultoria preventiva
        </>
      ),
      description:
        "Assessoria para empresas em contratos, rotinas internas, políticas trabalhistas e prevenção de riscos judiciais.",
    },
  ];

  return (
    <div id="labor-content">
      <section id="labor-container-content">
        <div id="labor-text">
          <header className="area-content-header">
            <span className="area-content-kicker">Atuação trabalhista</span>
            <h2 id="labor-section-title">
              Relações de trabalho com <span id="labor-section-title-span">clareza e equilíbrio</span>
            </h2>
            <p className="area-content-lead">
              A atuação trabalhista exige leitura cuidadosa de documentos,
              prazos e provas. O objetivo é orientar decisões com segurança,
              seja para trabalhadores, seja para empresas.
            </p>
          </header>

          <div className="area-accordion-grid">
            {laborContent.map((item) => (
              <LaborItem key={item.id} title={item.title} description={item.description} />
            ))}
          </div>

          <div className="area-insight bg-labor-1">
            <div className="area-insight-copy">
              <h3>Proteção e prevenção nas relações de trabalho</h3>
              <p>
                Demandas trabalhistas envolvem documentos, prazos e fatos que
                precisam ser organizados com precisão. Uma análise técnica ajuda
                a identificar direitos, riscos e caminhos possíveis.
              </p>
              <p>
                O atendimento pode ser contencioso, quando já existe conflito,
                ou preventivo, para evitar passivos e estruturar relações mais
                seguras.
              </p>
              <ul className="area-insight-list">
                <li>Demissão, verbas rescisórias e FGTS</li>
                <li>Horas extras, jornada e adicionais</li>
                <li>Assédio, acidente de trabalho e estabilidade</li>
              </ul>
            </div>
            <div className="area-insight-media">
              <img src={serviceContentImageOne} alt="Atendimento em Direito Trabalhista" />
            </div>
          </div>

          <div className="area-insight reverse bg-labor-2">
            <div className="area-insight-media">
              <img src={serviceContentImageTwo} alt="Análise trabalhista de documentos" />
            </div>
            <div className="area-insight-copy">
              <h3>Quando procurar orientação trabalhista</h3>
              <p>
                Busque orientação ao notar irregularidades no contrato, nos
                pagamentos, na jornada, no ambiente de trabalho ou quando houver
                demissão, acordo proposto ou dúvida sobre direitos e deveres.
              </p>
              <p>
                Quanto mais cedo a situação é analisada, melhores são as
                condições para reunir documentos, preservar provas e escolher um
                caminho juridicamente adequado.
              </p>
              <ul className="area-insight-list">
                <li>Análise de documentos e histórico da relação</li>
                <li>Definição de estratégia judicial ou extrajudicial</li>
                <li>Orientação para trabalhadores e empresas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
