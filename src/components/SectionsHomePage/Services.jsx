import { RiMedalLine } from "react-icons/ri";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { Link} from "react-router-dom";
import { FaGavel } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import "../../styles/StylesAdvHomePage/Services.css";

export default function Services() {
  useScrollAnimation(".item-services");
  return (
    <div id="services">
      <section id="services-container">
        <div id="services-text">
          <h2 id="sections-title">
            Serviços <span id="sections-title-span">e Áreas de atuação</span>
          </h2>
          <p id="sections-subtitle">
            Defesa jurídica completa nas áreas de família e sucessões, criminal
            e trabalhista, combinando expertise e atendimento personalizado. Seu
            problema merece uma solução profissional e eficiente.
          </p>
        </div>
        <div className="services-grid-container">
          <div className="item-services">
            <div className="card-top">
              <FaBriefcase className="card-icon" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Direito Trabalhista</h3>
              <p className="card-text">
                Proteção dos seus direitos nas relações de trabalho, desde a
                contratação até o desligamento. Atuação em rescisões
                contratuais, verbas trabalhistas, horas extras e demais direitos
                garantidos pela CLT e legislação vigente.
                <br />
                <br />
                Acompanhamento em ações judiciais trabalhistas, negociações de
                acordos e defesa em reclamações. Análise técnica de contratos,
                convenções coletivas e assessoria preventiva para evitar
                litígios e garantir seus direitos.
                <br />
                <br />
                Advocacia comprometida com a dignidade do trabalhador e a
                justiça nas relações de trabalho. Atendimento personalizado para
                defender seus interesses com competência e dedicação em todas as
                fases do processo.
              </p>

              <Link to="/advogadotrabalhista" className="btn-services-card">
                Ir para a página -{">"} Trabalhista
              </Link>
            </div>
          </div>

          <div className="item-services">
            <div className="card-top">
              <FaGavel className="card-icon" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Direito Criminal</h3>
              <p className="card-text">
                Advocacia criminal completa desde a fase investigatória até
                recursos em tribunais superiores. Defesa técnica qualificada em
                casos de todas as naturezas, garantindo proteção aos seus
                direitos fundamentais.
                <br />
                <br />
                Atuação em júri popular, habeas corpus, revisão criminal e
                liberdade provisória. Estratégia personalizada para cada
                situação, buscando sempre o melhor resultado jurídico possível
                para você.
                <br />
                <br />
                Defesa que une experiência, ética e comprometimento com sua
                tranquilidade. Estamos preparados para proteger você com
                seriedade e discrição em todos os momentos do processo.
              </p>

              <Link to="/advogadocriminalista" className="btn-services-card">
                Ir para a página -{">"} Criminalista
              </Link>
            </div>
          </div>

          <div className="item-services">
            <div className="card-top">
              <FaFileAlt className="card-icon" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Direito Cível</h3>
              <p className="card-text">
                Defesa dos seus direitos em ações de cobrança, indenizações,
                contratos e responsabilidade civil. Atuamos em disputas
                patrimoniais, danos morais e materiais, com estratégia jurídica
                focada na proteção dos seus interesses.
                <br />
                <br />
                Assessoria completa em questões contratuais, reparação de danos
                e resolução de conflitos entre particulares. Análise criteriosa
                do seu caso e busca por soluções eficientes, seja por acordo ou
                via judicial.
                <br />
                <br />
                Advocacia comprometida com a justiça e a reparação de prejuízos.
                Atendimento dedicado e transparente para garantir que seus
                direitos civis sejam respeitados e defendidos com competência.
              </p>

              <Link to="/advogadocivel" className="btn-services-card">
                Ir para a página -{">"} Cível
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
