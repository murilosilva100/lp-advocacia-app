import { useState } from "react";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ContactsIcon from "@mui/icons-material/Contacts";

export function useMenuMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  const menuOptions = [
    { text: "Início", icon: <HomeWorkIcon />, path: "#home" },
    { text: "Sobre", icon: <InfoIcon />, path: "#about" },
    { text: "Serviços", icon: <AssignmentIcon />, path: "#services"},
    { text: "Perguntas", icon: <QuestionAnswerIcon />, path: "#questions"},
    { text: "Contatos", icon: <ContactsIcon />, path: "#contacts"},
  ];

  return {
    openMenu,
    handleOpenMenu,
    handleCloseMenu,
    menuOptions,
  };
}
