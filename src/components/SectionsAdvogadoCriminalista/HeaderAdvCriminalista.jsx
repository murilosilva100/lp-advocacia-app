import { HiScale } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/StylesAdvCriminalista/advcriminalista.css";

export default function HeaderAdvCriminalista() {
  const navigate = useNavigate();
  return (
    <div id="tpcriminal-header">
      <nav id="tpcriminal-navbar">
        <Link to="/">
          <i id="tpcriminal-nav_logo">
            <HiScale /> Advocacia
          </i>
        </Link>
        <a href="">Área Criminalista</a>
        <a href="#contacts">
          <button className="btn-contatos">Contatos</button>{" "}
        </a>
      </nav>
    </div>
  );
}
