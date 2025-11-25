import { RiMedalLine } from "react-icons/ri";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Services.css";

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
              <RiMedalLine className="card-icon" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Direito de Família e Sucessões</h3>
              <p className="card-text">
                Defesa dos seus direitos em processos de divórcio, união
                estável, guarda e visitação. Acompanhamento próximo e
                estratégico para proteger você e sua família em todas as etapas
                do processo.
                <br />
                <br />
                Planejamento e execução de inventários, testamentos e doações
                com segurança jurídica. Soluções eficientes para organizar e
                proteger o patrimônio familiar de forma planejada.
                <br />
                <br />
                Advocacia que compreende a sensibilidade dos momentos
                familiares. Compromisso com resultados justos e atendimento
                acolhedor quando você mais precisa de apoio jurídico.
              </p>

              <Link to="/advogadodefamilia" className="btn-services-card">
                Clique para saber mais!
              </Link>
            </div>
          </div>

          <div className="item-services">
            <div className="card-top">
              <RiMedalLine className="card-icon" />
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
                Clique para saber mais!
              </Link>
            </div>
          </div>

          <div className="item-services">
            <div className="card-top">
              <RiMedalLine className="card-icon" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Direito Trabalhista</h3>
              <p className="card-text">
                Defesa dos seus direitos trabalhistas em ações contra
                empregadores. Atuamos em casos de rescisão indevida, horas
                extras, assédio moral, FGTS e demais verbas trabalhistas com
                estratégia focada em resultados.
                <br />
                <br />
                Assessoria completa para trabalhadores em negociações, acordos e
                processos judiciais. Análise detalhada do seu caso e busca
                incansável pela reparação justa dos seus direitos violados.
                <br />
                <br />
                Advocacia comprometida com a dignidade do trabalhador.
                Atendimento acessível e transparente, lutando para que você
                receba tudo aquilo que lhe é devido por lei.
              </p>

              <Link to="/advogadotrabalhista" className="btn-services-card">
                Clique para saber mais!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
