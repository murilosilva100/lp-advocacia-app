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
    { text: "Início", icon: <HomeWorkIcon /> },
    { text: "Sobre", icon: <InfoIcon /> },
    { text: "Serviços", icon: <AssignmentIcon /> },
    { text: "Perguntas", icon: <QuestionAnswerIcon /> },
    { text: "Contatos", icon: <ContactsIcon /> },
  ];

  return {
    openMenu,
    handleOpenMenu,
    handleCloseMenu,
    menuOptions,
  };
}
