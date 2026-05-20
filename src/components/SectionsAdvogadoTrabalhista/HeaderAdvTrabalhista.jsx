import { FiArrowUpRight } from "react-icons/fi";
import { HiScale } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "../../styles/StylesAdvTrabalhista/advtrabalhista.css";

export default function HeaderAdvTrabalhista() {
  return (
    <div id="tptrabalhista-header">
      <nav id="tptrabalhista-navbar">
        <Link to="/">
          <i id="tptrabalhista-nav_logo">
            <HiScale size={30} />
            Adv Thiago F. S.
          </i>
        </Link>

        <div className="tptrabalhista-navbar-container" aria-label="Links de navegação">
          <div className="service-nav-links" aria-label="Áreas de atuação">
            <Link to="/advogadocivel" className="service-nav-link">
              Cível
            </Link>
            <Link to="/advogadocriminalista" className="service-nav-link">
              Criminal
            </Link>
            <Link to="/advogadotrabalhista" className="service-nav-link active" aria-current="page">
              Trabalhista
            </Link>
          </div>

          <a href="#contacts">
            <button className="btn-contatos">
              Contatos <FiArrowUpRight className="btn-contatos-icon" />
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
}
