import useScrollAnimation from "../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { FaBriefcase, FaFileAlt, FaGavel } from "react-icons/fa";
import "../../styles/StylesAdvHomePage/Services.css";

const serviceAreas = [
  {
    title: "Direito Trabalhista",
    icon: <FaBriefcase className="card-icon" />,
    text:
      "Atuação em verbas trabalhistas, rescisões, horas extras, acordos, reclamações e orientação preventiva para relações de trabalho conduzidas com segurança.",
    path: "/advogadotrabalhista",
    label: "Ver área trabalhista",
  },
  {
    title: "Direito Criminal",
    icon: <FaGavel className="card-icon" />,
    text:
      "Defesa técnica desde a fase investigatória, com análise cuidadosa dos fatos, atuação estratégica e acompanhamento em cada etapa do procedimento.",
    path: "/advogadocriminalista",
    label: "Ver área criminal",
  },
  {
    title: "Direito Cível",
    icon: <FaFileAlt className="card-icon" />,
    text:
      "Apoio jurídico em contratos, cobranças, indenizações, responsabilidade civil e conflitos patrimoniais, com foco em clareza e previsibilidade.",
    path: "/advogadocivel",
    label: "Ver área cível",
  },
];

export default function Services() {
  useScrollAnimation(".item-services");

  return (
    <div id="services">
      <section id="services-container">
        <div id="services-text">
          <span className="section-kicker">Áreas de atuação</span>
          <h2 id="sections-title">
            Serviços <span id="sections-title-span">jurídicos</span>
          </h2>
          <p id="sections-subtitle">
            Atendimento técnico e próximo em demandas trabalhistas, criminais e
            cíveis, com orientação objetiva para decisões mais seguras.
          </p>
        </div>
        <div className="services-grid-container">
          {serviceAreas.map((service) => (
            <article className="item-services" key={service.title}>
              <div className="card-top">{service.icon}</div>
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.text}</p>
                <Link to={service.path} className="btn-services-card">
                  {service.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
