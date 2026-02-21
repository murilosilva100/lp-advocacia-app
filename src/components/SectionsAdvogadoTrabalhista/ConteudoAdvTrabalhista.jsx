import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import CivelImg1 from "../../assets/imgCiveln1.jpg";
import CivelImg2 from "../../assets/imgCiveln2.jpg";
import "../../styles/StylesAdvTrabalhista/advtrabalhista.css";

const TrabalhistaItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`trabalhista-item ${isOpen ? "open" : ""}`}>
      <button
        className="trabalhista-question-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="trabalhista-question-text">{title}</span>
        <FaChevronDown className="trabalhista-icon" />
      </button>

      <div className="trabalhista-answer-container">
        <p className="trabalhista-answer-text">{description}</p>
      </div>
    </div>
  );
};

export default function ConteudoAdvTrabalhista() {
  const trabalhistaContent = [
    {
      id: 1,
      title: "Inventário, Partilha e Sucessões",
      description:
        "Apoio jurídico na organização, condução e formalização da transmissão de bens, sempre buscando segurança e regularidade no processo sucessório.",
    },
    {
      id: 2,
      title: "Direito de Família: Divórcio, Guarda e Alimentos",
      description:
        "Atuação em questões familiares envolvendo dissolução do vínculo, definição de guarda, visitas e obrigações alimentares.",
    },
    {
      id: 3,
      title: "Responsabilidade Civil: Danos Contratuais e Extracontratuais",
      description:
        "Assessoria em conflitos decorrentes do descumprimento de contratos ou de danos causados fora de relações contratuais.",
    },
    {
      id: 4,
      title: "Ações Indenizatórias",
      description:
        "Atuação em demandas relacionadas a dano moral, material ou lucros cessantes, com foco na adequada apuração e defesa dos direitos.",
    },
    {
      id: 5,
      title: "Consultoria e Contratos",
      description:
        "Elaboração, revisão e orientação jurídica na celebração de contratos, prevenindo riscos e assegurando clareza nas obrigações.",
    },
    {
      id: 6,
      title: "Responsabilidade Civil do Estado",
      description:
        "Atuação em casos envolvendo danos causados por agentes públicos ou pela Administração, conforme as regras da responsabilidade estatal.",
    },
  ];

  return (
    <div id="tptrabalhista-conteudo">
      <section id="tptrabalhista-container-conteudo">
        <div id="tptrabalhista-text">
          <h2 id="tptrabalhista-section-title">
            Atuamos nos seguintes segmentos do{" "}
            <span id="tptrabalhista-section-title-span">Direito Cível</span>
          </h2>
          {trabalhistaContent.map((item) => (
            <TrabalhistaItem
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}

          <h2 id="tptrabalhista-section-title">
            O que faz um advogado trabalhista?
          </h2>

          <div className="tptrabalhista-group-objects bg-trabalhista-1">
            <div id="tptrabalhista-group-item1">
              <p id="sections-texts">
                Um advogado trabalhista é o profissional especializado em
                questões entre empregado e empregador, atuando na defesa de
                trabalhadores ou empresas. Ele cuida de casos como demissões sem
                justa causa, verbas rescisórias não pagas, horas extras não
                reconhecidas, acidentes de trabalho, assédio moral ou sexual,
                desvio de função e FGTS não depositado.
                <br />
                <br />
                Também atua em reconhecimento de vínculo empregatício para quem
                trabalha sem carteira assinada, questões de estabilidade no
                emprego como gestantes e acidentados, férias não concedidas e
                negociações de acordos trabalhistas. No dia a dia, analisa
                documentos como contracheques e carteira de trabalho, elabora
                reclamações para a Justiça do Trabalho, representa clientes em
                audiências e negocia acordos.
                <br />
                <br />
                Pode atuar preventivamente, orientando empresas sobre como
                cumprir a legislação e evitar processos, ou de forma
                contenciosa, buscando reparação através de ações judiciais. É o
                profissional que você procura quando seus direitos como
                trabalhador foram desrespeitados, quando foi demitido e não
                recebeu corretamente, quando sofre abuso no trabalho ou precisa
                regularizar sua situação profissional.
              </p>
            </div>

            <div id="tptrabalhista-group-item2">
              <img src={CivelImg1} alt="" />
            </div>
          </div>

          <h2 id="tptrabalhista-section-title">
            Quando devo buscar um advogado trabalhista?
          </h2>

          <div className="tptrabalhista-group-objects bg-trabalhista-2">
            <div id="tptrabalhista-group-item2">
              <img src={CivelImg2} alt="" />
            </div>

            <div id="tptrabalhista-group-item1">
              <p id="sections-texts">
                Uma pessoa deve buscar um advogado trabalhista quando seus
                direitos como trabalhador forem desrespeitados ou quando tiver
                dúvidas sobre sua situação profissional. Isso inclui casos de
                demissão sem receber todas as verbas devidas, trabalho sem
                carteira assinada por período prolongado, horas extras não
                pagas, não concessão de férias, FGTS não depositado ou quando
                sofrer qualquer tipo de desconto indevido no salário.
                <br />
                <br />
                Situações de assédio moral ou sexual, discriminação, acidentes
                de trabalho sem o devido amparo, desvio de função onde você
                executa atividades diferentes do seu cargo sem reconhecimento
                salarial, ou quando a empresa exige jornadas abusivas também
                demandam assistência jurídica. Se você está em licença médica e
                sofre pressão para retornar, está grávida e teme demissão, ou
                foi dispensado durante estabilidade garantida por lei, é
                fundamental procurar esse profissional.
                <br />
                <br />O ideal é buscar um advogado trabalhista assim que
                identificar irregularidades na relação de trabalho, mesmo antes
                de ser demitido, pois ele pode orientar sobre como documentar as
                violações e proteger seus direitos. Após a demissão, é
                importante procurar orientação rapidamente para não perder
                prazos, já que ações trabalhistas têm prazo de dois anos após o
                término do contrato para serem ajuizadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
