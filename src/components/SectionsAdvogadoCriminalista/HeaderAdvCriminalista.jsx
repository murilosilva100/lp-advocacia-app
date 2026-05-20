import { FiArrowUpRight } from "react-icons/fi";
import { HiScale } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "../../styles/StylesAdvCriminalista/advcriminalista.css";

export default function HeaderAdvCriminalista() {
  return (
    <div id="tpcriminalista-header">
      <nav id="tpcriminalista-navbar">
        <Link to="/">
          <i id="tpcriminalista-nav_logo">
            <HiScale size={30} />
            Adv Thiago F. S.
          </i>
        </Link>

        <div className="tpcriminalista-navbar-container" aria-label="Links de navegação">
          <div className="service-nav-links" aria-label="Áreas de atuação">
            <Link to="/advogadocivel" className="service-nav-link">
              Cível
            </Link>
            <Link to="/advogadocriminalista" className="service-nav-link active" aria-current="page">
              Criminal
            </Link>
            <Link to="/advogadotrabalhista" className="service-nav-link">
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
