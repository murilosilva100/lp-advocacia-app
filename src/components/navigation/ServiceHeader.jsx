import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { HiOutlineBars3, HiScale } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { serviceNavigationLinks, WHATSAPP_CONTACT_URL } from "../../data/siteNavigation";

export default function ServiceHeader({
  activeArea,
  headerId,
  navId,
  logoId,
  navContainerClassName,
}) {
  const [openMenu, setOpenMenu] = useState(false);

  const links = serviceNavigationLinks.map((link) => ({
    ...link,
    active: link.area === activeArea,
  }));

  return (
    <div id={headerId}>
      <nav id={navId} className="service-page-header-nav">
        <Link to="/">
          <i id={logoId}>
            <HiScale size={30} />
            Adv Thiago F. S.
          </i>
        </Link>

        <div className={`${navContainerClassName} service-page-navbar`} aria-label="Áreas de atuação">
          <div className="service-nav-links">
            {links
              .filter((link) => link.area)
              .map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`service-nav-link ${link.active ? "active" : ""}`}
                  aria-current={link.active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
          </div>

          <a href="#contacts">
            <button className="btn-contatos">
              Contatos <FiArrowUpRight className="btn-contatos-icon" />
            </button>
          </a>
        </div>

        <button className="service-header-menu-button" onClick={() => setOpenMenu(true)} aria-label="Abrir menu">
          <HiOutlineBars3 />
        </button>
      </nav>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
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
        <Box className="service-mobile-menu-panel" role="presentation">
          <div className="service-mobile-menu-header">
            <div className="service-mobile-menu-brand">
              <HiScale size={26} />
              <span>Adv Thiago F. S.</span>
            </div>
            <button className="service-mobile-menu-close" onClick={() => setOpenMenu(false)} aria-label="Fechar menu">
              <FiX />
            </button>
          </div>

          <nav className="service-mobile-menu-links" aria-label="Navegação das áreas">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpenMenu(false)}
                className={`${link.active ? "active" : ""} ${link.featured ? "featured" : ""}`}
                aria-current={link.active ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a className="service-mobile-contact" href={WHATSAPP_CONTACT_URL} onClick={() => setOpenMenu(false)}>
            Falar com o advogado <FiArrowUpRight />
          </a>
        </Box>
      </Drawer>
    </div>
  );
}
