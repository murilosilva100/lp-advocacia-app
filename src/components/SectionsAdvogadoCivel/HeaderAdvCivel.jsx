import { HiScale } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/StylesAdvCivel/advcivel.css";

export default function HeaderAdvTrabalhista() {
  const navigate = useNavigate();
  return (
    <div id="tpcivel-header">
      <nav id="tpcivel-navbar">
        <Link to="/">
          <i id="tpcivel-nav_logo">
            <HiScale size={30} />
            Adv Thiago F. S.
          </i>
        </Link>

        <div
          className="tpcivel-navbar-container"
          aria-label="Links de navegação"
        >
          <a href="#contacts">
            <button className="btn-contatos">
              Contatos <FiArrowUpRight className="btn-contatos-icon" />
            </button>{" "}
          </a>
        </div>
      </nav>
    </div>
  );
}
