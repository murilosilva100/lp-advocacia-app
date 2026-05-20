import useScrollAnimation from "../../hooks/useScrollAnimation";
import "../../styles/StylesAdvHomePage/Testimonials.css";

const testimonials = [
  {
    quote:
      "Recebi orientação clara desde o primeiro contato. O atendimento foi objetivo, cuidadoso e passou segurança durante todo o processo.",
    author: "Cliente em demanda cível",
  },
  {
    quote:
      "A condução foi séria e transparente. As etapas foram explicadas com calma, sem promessas irreais e com atenção aos detalhes.",
    author: "Cliente em orientação trabalhista",
  },
  {
    quote:
      "O caso foi tratado com discrição e responsabilidade. A comunicação fez diferença para entender os riscos e próximos passos.",
    author: "Cliente em acompanhamento criminal",
  },
];

export default function Testimonials() {
  useScrollAnimation(".testimonial-card");

  return (
    <div id="testimonials">
      <section id="testimonials-container">
        <div id="testimonials-text">
          <span className="section-kicker">Confiança</span>
          <h2 id="sections-title">
            Atendimento <span id="sections-title-span">humano e discreto</span>
          </h2>
          <p id="sections-subtitle">
            Relatos resumidos, preservando identidade e confidencialidade, sobre
            a experiência de quem buscou orientação jurídica.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.author}>
              <p>“{testimonial.quote}”</p>
              <span>{testimonial.author}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
