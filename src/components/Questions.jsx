import React, { useState } from "react";
import faqContent from "../data/faqContent.json";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "../styles/Questions.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        className="faq-question-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="faq-question-text">{question}</span>
        {isOpen ? (
          <FaChevronUp className="faq-icon" />
        ) : (
          <FaChevronDown className="faq-icon" />
        )}
      </button>

      <div className="faq-answer-container">
        <p className="faq-answer-text">{answer}</p>
      </div>
    </div>
  );
};

export default function Questions() {
  useScrollAnimation(".faq-category-section");
  return (
    <div id="questions">
      <section id="questions-container">
        <div id="questions-text">
          <h2 id="sections-title">
            Perguntas <span id="sections-title-span">Frequentes</span>
          </h2>
          <p className="questions-subtitle">
            Encontre rapidamente as respostas para as dúvidas mais comuns sobre
            nossos produtos e serviços.
          </p>
        </div>
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
      </section>
    </div>
  );
}
