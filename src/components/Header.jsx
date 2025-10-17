import React from "react";
import "../styles/header.css"

export default function Header() {
    return(
    <>
     <header>
            <nav id="navbar">
                <i class="fa-solid fa-scale-balanced" id="nav_logo"> logo</i>
                <ul id="nav_list">
                    <li class="nav-item active"><a href="#inicio">Início</a></li>
                    <li class="nav-item"><a href="#quem-somos">Sobre</a></li>
                    <li class="nav-item"><a href="#serviços">Serviços</a></li>
                    <li class="nav-item"><a href="#contato">Perguntas</a></li>
                    <li class="nav-item"><a href="#contato">Contatos</a></li>
                </ul>

                <button id="mobile_btn">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </nav>

            <div id="mobile_menu">
                <ul id="mobile_nav_list">
                    <li class="nav-item active"><a href="#inicio">Início</a></li>
                    <li class="nav-item"><a href="#quem-somos">Sobre</a></li>
                    <li class="nav-item"><a href="#serviços">Serviços</a></li>
                    <li class="nav-item"><a href="#contato">Perguntas</a></li>
                    <li class="nav-item"><a href="#contato">Contatos</a></li>
                </ul>
            </div>
    </header>
    </>
    );
}