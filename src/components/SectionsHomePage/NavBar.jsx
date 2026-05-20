import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { HiOutlineBars3, HiScale } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useMenuMobile } from "../../hooks/useMenuMobile";
import { useServicesMenu } from "../../hooks/useServicesMenu";
import "../../styles/StylesAdvHomePage/Header.css";

const serviceLinks = [
  { label: "Cível", path: "/advogadocivel" },
  { label: "Criminal", path: "/advogadocriminalista" },
  { label: "Trabalhista", path: "/advogadotrabalhista" },
];

export default function NavBar() {
  const { openMenu, handleOpenMenu, handleCloseMenu, menuOptions } = useMenuMobile();
  const { showServices, isClosing, handleToggleServices, handleCloseServices } = useServicesMenu();

  const handleScrollTo = (path) => {
    handleCloseMenu();
    const section = document.querySelector(path);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="header">
      <nav id="navbar">
        <a href="#home">
          <i id="nav_logo">
            <HiScale size={30} />
            Adv Thiago F. S.
          </i>
        </a>

        <div className="navbar-list-container" aria-label="Links de navegação">
          <a href="#home">Início</a>

          <Link
            to="/servicos"
            onClick={(e) => {
              e.preventDefault();
              handleToggleServices();
            }}
          >
            Serviços
          </Link>

          <a href="#process">Atendimento</a>
          <a href="#questions">Perguntas</a>
          <a href="#about">Sobre</a>

          <a href="#contacts">
            <button className="btn-contatos">
              Contatos <FiArrowUpRight className="btn-contatos-icon" />
            </button>
          </a>
        </div>

        <button className="navbar-menu-container" onClick={handleOpenMenu} aria-label="Abrir menu">
          <HiOutlineBars3 />
        </button>
      </nav>

      {showServices && (
        <div
          className={`services-menu-bar ${isClosing ? "closing" : "open"}`}
          onMouseLeave={handleCloseServices}
        >
          {serviceLinks.map((service) => (
            <span key={service.path}>
              <Link to={service.path}>{service.label}</Link>
            </span>
          ))}
        </div>
      )}

      <Drawer
        open={openMenu}
        onClose={handleCloseMenu}
        anchor="right"
        slotProps={{
          paper: {
            sx: {
              width: "min(88vw, 360px)",
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          },
        }}
      >
        <Box className="mobile-menu-panel" role="presentation">
          <div className="mobile-menu-header">
            <div className="mobile-menu-brand">
              <HiScale size={26} />
              <span>Adv Thiago F. S.</span>
            </div>
            <button className="mobile-menu-close" onClick={handleCloseMenu} aria-label="Fechar menu">
              <FiX />
            </button>
          </div>

          <nav className="mobile-menu-links" aria-label="Navegação principal">
            {menuOptions.map((item) => (
              <button type="button" key={item.text} onClick={() => handleScrollTo(item.path)}>
                <span className="mobile-menu-icon">{item.icon}</span>
                <span>{item.text}</span>
              </button>
            ))}
          </nav>

          <div className="mobile-services-block">
            <span className="mobile-menu-label">Áreas de atuação</span>
            <div className="mobile-services-grid">
              {serviceLinks.map((service) => (
                <Link key={service.path} to={service.path} onClick={handleCloseMenu}>
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <a className="mobile-menu-cta" href="#contacts" onClick={() => handleScrollTo("#contacts")}>
            Falar com o advogado <FiArrowUpRight />
          </a>
        </Box>
      </Drawer>
    </div>
  );
}
