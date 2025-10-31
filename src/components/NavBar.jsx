import React from "react";
import "../styles/header.css";
import { HiScale } from "react-icons/hi2";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useMenuMobile } from "../hooks/useMenuMobile";

export default function NavBar() {
  const { openMenu, handleOpenMenu, handleCloseMenu, menuOptions } =
    useMenuMobile();

  return (
    <div id="header">
      <nav id="navbar">
        <i id="nav_logo">
          <HiScale /> Advocacia
        </i>
        <div className="navbar-list-container" aria-label="Links de navegação">
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#questions">Perguntas</a>
          <a href="#contacts"><button className="btn-contatos">Contatos</button></a>
        </div>

        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={handleOpenMenu} />
        </div>
      </nav>
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
                <ListItemButton>
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
