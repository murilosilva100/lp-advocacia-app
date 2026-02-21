import { HiScale } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/StylesAdvTrabalhista/advtrabalhista.css";

export default function HeaderAdvTrabalhista() {
  const navigate = useNavigate();
  return (
    <div id="tptrabalhista-header">
      <nav id="tptrabalhista-navbar">
        <Link to="/">
          <i id="tptrabalhista-nav_logo">
            <HiScale size="22px" />
            Adv Thiago F. S.
          </i>
        </Link>
        
        <div
          className="tptrabalhista-navbar-container"
          aria-label="Links de navegação"
        >
          <a href="#contacts">
            <button className="btn-contatos">Contatos</button>{" "}
          </a>
        </div>
      </nav>
    </div>
  );
}
