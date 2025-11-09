import { HiScale } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/StylesAdvFamilia/advdefamilia.css";

export default function HeaderAdvFamilia() {
  const navigate = useNavigate();
  return (
    <div id="tpfamilia-header">
      <nav id="tpfamilia-navbar">
        <Link to="/">
          <i id="tpfamilia-nav_logo">
            <HiScale /> Advocacia
          </i>
        </Link>
        <a href="">Área de Família</a>
        <a href="#contacts">
          <button className="btn-contatos">Contatos</button>{" "}
        </a>
      </nav>
    </div>
  );
}
