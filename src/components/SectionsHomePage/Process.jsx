import { FiClipboard, FiMessageCircle, FiSearch, FiShield } from "react-icons/fi";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import "../../styles/StylesAdvHomePage/Process.css";

const processSteps = [
  {
    icon: <FiMessageCircle />,
    title: "Primeiro contato",
    text: "Escuta inicial para entender a situação, urgência e documentos disponíveis.",
  },
  {
    icon: <FiSearch />,
    title: "Análise do caso",
    text: "Leitura técnica dos fatos, riscos e caminhos jurídicos possíveis.",
  },
  {
    icon: <FiClipboard />,
    title: "Estratégia jurídica",
    text: "Definição de prioridades, medidas adequadas e próximos passos.",
  },
  {
    icon: <FiShield />,
    title: "Acompanhamento",
    text: "Comunicação clara durante a condução da demanda e suas etapas.",
  },
];

export default function Process() {
  useScrollAnimation(".process-card");

  return (
    <div id="process">
      <section id="process-container">
        <div id="process-text">
          <span className="section-kicker">Atendimento</span>
          <h2 id="sections-title">
            Um processo <span id="sections-title-span">claro e cuidadoso</span>
          </h2>
          <p id="sections-subtitle">
            Do primeiro contato à condução da estratégia, cada etapa é pensada
            para oferecer previsibilidade, organização e segurança.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="process-number">0{index + 1}</span>
              <div className="process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
