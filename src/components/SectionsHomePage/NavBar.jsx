import React from "react";
import "../../styles/header.css";
import { HiScale } from "react-icons/hi2";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useMenuMobile } from "../../hooks/useMenuMobile";
import { useServicesMenu } from "../../hooks/useServicesMenu";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const { openMenu, handleOpenMenu, handleCloseMenu, menuOptions } =
    useMenuMobile();

  const { showServices, isClosing, handleToggleServices, handleCloseServices } =
    useServicesMenu();

  const navigate = useNavigate();

  return (
    <div id="header">
      <nav id="navbar">
        <a href="#home">
          <i id="nav_logo">
            <HiScale size="22px"/>Adv Thiago F. S.
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

          <a href="#questions">Perguntas</a>

          <a href="#about">Sobre</a>
          
          <a href="#contacts">
            <button className="btn-contatos">Contatos</button>{" "}
          </a>
        </div>

        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={handleOpenMenu} />
        </div>
      </nav>

      {showServices && (
        <div
          className={`services-menu-bar ${isClosing ? "closing" : "open"}`}
          onMouseLeave={handleCloseServices}
        >
          <span>
            <Link to="/advogadodefamilia">Advogado de Família</Link>
          </span>
          <span>
            <Link to="/advogadocriminalista">Advogado Criminalista</Link>
          </span>
          <span>
            <Link to="/advogadotrabalhista">Advogado Trabalhista</Link>
          </span>
        </div>
      )}

      <Drawer
        open={openMenu}
        onClose={handleCloseMenu}
        anchor="right"
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#001A3A",
            },
          },
        }}
      >
        <Box
          sx={{
            width: 220,
            color: "#F0F4F8",
            padding: 2,
          }}
          role="presentation"
          onClick={handleCloseMenu}
          onKeyDown={handleCloseMenu}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleCloseMenu();
                    const section = document.querySelector(item.path);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "#B38B59",
                      minWidth: 40,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
