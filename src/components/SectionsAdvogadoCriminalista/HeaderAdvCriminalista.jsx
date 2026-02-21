import { HiScale } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/StylesAdvCriminalista/advcriminalista.css";

export default function HeaderAdvTrabalhista() {
  const navigate = useNavigate();
  return (
    <div id="tpcriminalista-header">
      <nav id="tpcriminalista-navbar">
        <Link to="/">
          <i id="tpcriminalista-nav_logo">
            <HiScale size="22px" />
            Adv Thiago F. S.
          </i>
        </Link>
        
        <div
          className="tpcriminalista-navbar-container"
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
