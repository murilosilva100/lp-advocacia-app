import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { HiOutlineBars3, HiScale } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { homeServiceLinks } from "../../../data/siteNavigation";
import { useMenuMobile } from "../../../hooks/useMenuMobile";
import { useServicesMenu } from "../../../hooks/useServicesMenu";
import "../../../styles/home/Header.css";

const sectionLinks = [
  { id: "home", label: "Início", path: "#home" },
  { id: "services", label: "Serviços", path: "#services" },
  { id: "process", label: "Atendimento", path: "#process" },
  { id: "questions", label: "Perguntas", path: "#questions" },
  { id: "about", label: "Sobre", path: "#about" },
  { id: "contacts", label: "Contatos", path: "#contacts" },
];

export default function NavBar() {
  const { openMenu, handleOpenMenu, handleCloseMenu, menuOptions } = useMenuMobile();
  const { showServices, isClosing, handleOpenServices, handleCloseServices } = useServicesMenu();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportMarker = Math.min(180, window.innerHeight * 0.34);
      const documentHeight = document.documentElement.scrollHeight;
      const isPageBottom = window.innerHeight + window.scrollY >= documentHeight - 8;

      if (isPageBottom) {
        setActiveSection("contacts");
        return;
      }

      const sections = sectionLinks
        .map((item) => {
          const element = document.getElementById(item.id);

          if (!element) {
            return null;
          }

          const rect = element.getBoundingClientRect();

          return {
            id: item.id,
            top: rect.top,
            bottom: rect.bottom,
            distance: Math.abs(rect.top - viewportMarker),
          };
        })
        .filter(Boolean);

      const currentSection =
        sections.find((section) => section.top <= viewportMarker && section.bottom > viewportMarker) ||
        sections.toSorted((a, b) => a.distance - b.distance)[0];

      if (currentSection?.id) {
        setActiveSection(currentSection.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleScrollTo = (path) => {
    handleCloseMenu();
    const section = document.querySelector(path);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServicesClick = (event) => {
    event.preventDefault();
    setActiveSection("services");
    handleScrollTo("#services");
    handleOpenServices();
  };

  const activeClass = (id) => (activeSection === id ? "active" : "");

  return (
    <div id="header">
      <nav id="navbar">
        <a className={activeClass("home")} href="#home">
          <i id="nav_logo">
            <HiScale size={30} />
            Adv Thiago F. S.
          </i>
        </a>

        <div className="navbar-list-container" aria-label="Links de navegação">
          <a className={activeClass("home")} href="#home">
            Início
          </a>

          <Link
            to="/servicos"
            className={activeClass("services")}
            onClick={handleServicesClick}
          >
            Serviços
          </Link>

          <a className={activeClass("process")} href="#process">
            Atendimento
          </a>
          <a className={activeClass("questions")} href="#questions">
            Perguntas
          </a>
          <a className={activeClass("about")} href="#about">
            Sobre
          </a>

          <a className={`${activeClass("contacts")} contact-link`} href="#contacts">
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
          {homeServiceLinks.map((service) => (
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
              <button
                type="button"
                key={item.text}
                className={activeClass(item.path.replace("#", ""))}
                onClick={() => handleScrollTo(item.path)}
              >
                <span className="mobile-menu-icon">{item.icon}</span>
                <span>{item.text}</span>
              </button>
            ))}
          </nav>

          <div className="mobile-services-block">
            <span className="mobile-menu-label">Áreas de atuação</span>
            <div className="mobile-services-grid">
              {homeServiceLinks.map((service) => (
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
