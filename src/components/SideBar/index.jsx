"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

import Logo from "../../../assets/logoSadebar.png";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false); // Controla se o menu mobile está aberto ou fechado
  const [isMobileView, setIsMobileView] = useState(false);

  // Função para alternar o estado do menu mobile
  const toggleMenu = () => {
    if (isMobileView) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobileView(mobile);
      // Se a tela não for mais mobile, garante que o menu não fique no estado 'aberto' de mobile
      // e a sidebar volte ao comportamento default (expandida, pois não há toggle em desktop)
      if (!mobile) {
        setIsOpen(false); // Reseta o estado de abertura específico do mobile
      }
    };

    // Verifica na montagem inicial
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Executa apenas na montagem e desmontagem

  // Determina as classes com base nos estados
  const sidebarClasses = ["sidebar"];
  if (isMobileView) {
    sidebarClasses.push("mobile"); // Adiciona uma classe geral para mobile
    if (!isOpen) {
      sidebarClasses.push("collapsed");
    }
  }

  const contentClasses = ["sidebar-content"];
  if (isMobileView && !isOpen) {
    contentClasses.push("hidden");
  }

  return (
    <div className={sidebarClasses.join(" ")}>
      {isMobileView && (
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      )}
      <div className={contentClasses.join(" ")}>
        <div className="logo">
          <Image
            style={{ height: 150, width: 170 }}
            src={Logo}
            alt="Logo"
            crossOrigin="anonymous"
          />
        </div>
        <ul className="menu">
          <li className="menu-item">ÉTICA PROFISSIONAL</li>
          <li className="menu-item active">FÓRUM</li>
          <li className="menu-item">AGENDAMENTOS</li>
          <li className="menu-item">HORÁRIOS</li>
          <li className="menu-item">MONITORIAS</li>
        </ul>
      </div>
    </div>
  );
}
