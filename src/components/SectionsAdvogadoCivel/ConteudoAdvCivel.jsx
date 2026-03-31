import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import CivelContentImgN1 from "../../assets/civel-content-img-n1.webp";
import CivelContentImgN2 from "../../assets/civel-content-img-n2.webp";
import "../../styles/StylesAdvCivel/advcivel.css";

import { FaFileSignature } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";

const CivelItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`civel-item ${isOpen ? "open" : ""}`}>
      <button
        className="civel-question-button"
        onClick={() => setIsOpen(!isOpen)}
      >
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
          <FaFileSignature className="icones-civel" /> Inventário, Partilha e
          Sucessões
        </>
      ),
      description:
        "Apoio jurídico na organização, condução e formalização da transmissão de bens, sempre buscando segurança e regularidade no processo sucessório.",
    },
    {
      id: 2,
      title: (
        <>
          <FaUserShield className="icones-civel" /> Direito de Família:
          Divórcio, Guarda e Alimentos
        </>
      ),
      description:
        "Atuação em questões familiares envolvendo dissolução do vínculo, definição de guarda, visitas e obrigações alimentares.",
    },
    {
      id: 3,
      title: (
        <>
          <FaExclamationTriangle className="icones-civel" /> Responsabilidade
          Civil: Danos Contratuais e Extracontratuais
        </>
      ),
      description:
        "Assessoria em conflitos decorrentes do descumprimento de contratos ou de danos causados fora de relações contratuais.",
    },
    {
      id: 4,
      title: (
        <>
          <FaMoneyBillWave className="icones-civel" /> Ações Indenizatórias
        </>
      ),
      description:
        "Atuação em demandas relacionadas a dano moral, material ou lucros cessantes, com foco na adequada apuração e defesa dos direitos.",
    },
    {
      id: 5,
      title: (
        <>
          <FaHandshake className="icones-civel" /> Consultoria e Contratos
        </>
      ),
      description:
        "Elaboração, revisão e orientação jurídica na celebração de contratos, prevenindo riscos e assegurando clareza nas obrigações.",
    },
    {
      id: 6,
      title: (
        <>
          <FaUniversity className="icones-civel" /> Responsabilidade Civil do
          Estado
        </>
      ),
      description:
        "Atuação em casos envolvendo danos causados por agentes públicos ou pela Administração, conforme as regras da responsabilidade estatal.",
    },
  ];

  return (
    <div id="tpcivel-conteudo">
      <section id="tpcivel-container-conteudo">
        <div id="tpcivel-text">
          <h2 id="tpcivel-section-title">
            Atuamos nos seguintes segmentos do{" "}
            <span id="tpcivel-section-title-span">Direito Cível</span>
          </h2>
          {civelContent.map((item) => (
            <CivelItem
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}

          <h2 id="tpcivel-section-title">O que faz um advogado cível?</h2>

          <div className="tpcivel-group-objects bg-civel-1">
            <div id="tpcivel-group-item1">
              <p id="sections-texts">
                Um advogado cível é o profissional que resolve conflitos do dia
                a dia entre pessoas, empresas ou instituições, sem envolver
                questões criminais. Ele atua em situações como cobranças de
                dívidas, contratos descumpridos, disputas entre vizinhos,
                problemas condominiais, direito do consumidor, indenizações por
                danos materiais ou morais, inventários e partilha de bens.
                <br />
                <br />
                Também cuida de questões imobiliárias como despejo e discussões
                sobre propriedade, além de diversos outros casos onde há
                desacordos que precisam ser resolvidos. O trabalho começa
                analisando o caso, reunindo documentos e provas, tentando
                acordos extrajudiciais quando possível e, se necessário,
                ingressando com ação judicial.
                <br />
                <br />
                No dia a dia, esse profissional elabora petições, comparece a
                audiências, negocia acordos e acompanha processos. Diferente do
                criminalista que lida com crimes e prisões, o advogado cível
                busca principalmente reparação financeira, cumprimento de
                obrigações ou reconhecimento de direitos.
                <br />
                <br />É o profissional que você procura quando tem problemas
                relacionados ao seu patrimônio, contratos, relações comerciais
                ou familiares, ou quando alguém lhe causou prejuízo e você quer
                ser ressarcido através de uma sentença judicial.
              </p>
            </div>

            <div id="tpcivel-group-item2">
              <img src={CivelContentImgN1} alt="" />
            </div>
          </div>

          <h2 id="tpcivel-section-title">
            Quando devo buscar um advogado cível?
          </h2>

          <div className="tpcivel-group-objects bg-civel-2">
            <div id="tpcivel-group-item2">
              <img src={CivelContentImgN2} alt="" />
            </div>

            <div id="tpcivel-group-item1">
              <p id="sections-texts">
                Uma pessoa deve buscar um advogado cível quando se sentir lesada
                em seus direitos ou patrimônio e não conseguir resolver a
                situação amigavelmente. Isso inclui casos como produtos ou
                serviços defeituosos não resolvidos pela empresa, acidentes que
                causaram prejuízos por culpa de terceiros, nome negativado
                indevidamente, cobranças injustas ou contratos não cumpridos.
                <br />
                <br />
                Questões familiares e patrimoniais também demandam esse
                profissional. Divórcio com partilha de bens, inventário,
                disputas de herança, pensão alimentícia, problemas com imóveis,
                disputas de vizinhança ou cobranças condominiais abusivas são
                exemplos comuns que requerem assistência jurídica especializada.
                <br />
                <br />O ideal é procurar um advogado cível assim que perceber um
                conflito que pode se agravar ou quando tentativas de resolver
                sozinho falharam. Quanto mais cedo buscar orientação, maiores as
                chances de proteger seus direitos, reunir provas adequadas e
                encontrar a melhor solução, seja por negociação ou ação
                judicial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
