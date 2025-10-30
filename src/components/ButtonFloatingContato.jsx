import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/App.css"

const ButtonFloatingContato = () => {
  return (
    <button className="floating-btn" onClick={() => alert('Abrir modal de contato ou link para WhatsApp/E-mail')}>
      Contatar<FaWhatsapp size="25px" style={{marginLeft:"12px"}}/>
    </button>
  );
};

export default ButtonFloatingContato;