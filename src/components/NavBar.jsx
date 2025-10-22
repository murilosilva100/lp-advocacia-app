import React from "react";
import { useState } from "react";
import { HiScale } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Início",
      icon: <HomeIcon />,
    },
    {
      text: "Sobre",
      icon: <HomeIcon />,
    },
    {
      text: "Serviços",
      icon: <HomeIcon />,
    },
    {
      text: "Perguntas",
      icon: <HomeIcon />,
    },
    {
      text: "Contatos",
      icon: <HomeIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <i id="nav_logo">
          <HiScale /> Advocacia
        </i>
      </div>

      <div className="navbar-list-container">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#serviços">Serviços</a>
        <a href="#contato">Perguntas</a>

        <button className="btn-contatos">Contatos</button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}
