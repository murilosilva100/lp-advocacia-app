import React from "react";
import homeImage from "../assets/homeImage.jpg";
import { FaArrowRight } from "react-icons/fa";
import "../styles/home.css";

export default function Home() {
  return (
    <div id="content">
      <section id="home-container">
        <div id="cta">
          <h1 className="title">
            Sua liberdade e dignidade <span>merecem a melhor defesa</span>
          </h1>
          <p className="description">
            Advogado criminalista experiente, pronto para proteger você em
            processos criminais com estratégia jurídica sólida e atendimento
            humanizado.
            <span>Sua tranquilidade começa com a defesa certa.</span>
          </p>
          <div id="cta_buttons">
            <button className="btn-default">Entrar em Contato agora!</button>
            <a href="tel:+5561996172502" id="phone_button">
              <button className="btn-default">(55) 9988776655</button>
            </a>
          </div>
        </div>
        <div id="banner">
          <img src={homeImage} alt="" />
        </div>
      </section>
    </div>
  );
}
