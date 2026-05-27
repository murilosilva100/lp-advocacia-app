import { useState } from "react";
import faqContent from "../../../data/faqContent.json";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "../../../styles/home/Faq.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        className="faq-question-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="faq-question-text">{question}</span>
        <span className="faq-icon-box">
          <FaChevronDown className="faq-icon" />
        </span>
      </button>

      <div className="faq-answer-container">
        <p className="faq-answer-text">{answer}</p>
      </div>
    </div>
  );
};

export default function Faq() {
  useScrollAnimation(".faq-category-section");

  return (
    <div id="questions">
      <section id="questions-container">
        <div id="questions-text">
          <span className="section-kicker">Perguntas frequentes</span>
          <h2 id="sections-title">
            Respostas claras <span id="sections-title-span">para decisões seguras</span>
          </h2>
          <p id="sections-subtitle">
            Informações objetivas sobre dúvidas comuns. Cada caso, porém,
            precisa ser analisado a partir dos documentos e do contexto concreto.
          </p>
        </div>

        <div className="faq-layout">
          <aside className="faq-support-panel">
            <span>Orientação individual</span>
            <h3>Não encontrou sua dúvida?</h3>
            <p>
              Envie uma breve descrição do caso para uma análise inicial sobre
              os caminhos possíveis.
            </p>
            <a href="https://wa.me/5561999777736?text=Olá! Tenho uma dúvida jurídica.">
              Conversar pelo WhatsApp <MdOutlineWhatsapp />
            </a>
          </aside>

          <div id="questions-grid-container">
            {faqContent.map((section, index) => (
              <div key={index} className="faq-category-section">
                <h3 className="faq-category-title">{section.category}</h3>
                {section.questions.map((item) => (
                  <FaqItem key={item.id} question={item.q} answer={item.a} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
