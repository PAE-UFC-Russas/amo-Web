"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./styles.module.css";

import Logo from "../../../assets/logoSadebar.png";

const menuItems = [
  { path: "#", label: "ÉTICA PROFISSIONAL" },
  { path: "/Forum", label: "FÓRUM" },
  { path: "/Agendamentos", label: "AGENDAMENTO" },
  { path: "/Schedules", label: "HORÁRIOS" },
];

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false); // Controla se o menu mobile está aberto ou fechado
  const [isMobileView, setIsMobileView] = useState(false);
  const pathname = usePathname();

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
  const sidebarClasses = [styles.sidebar];
  if (isMobileView) {
    sidebarClasses.push("mobile"); // Adiciona uma classe geral para mobile
    if (!isOpen) {
      sidebarClasses.push("collapsed");
    }
  }

  const contentClasses = [styles.sidebarContent];
  if (isMobileView && !isOpen) {
    contentClasses.push("hidden");
  }

  return (
    <div className={sidebarClasses.join(" ")}>
      {isMobileView && (
        <div className={styles.mobileMenuToggle} onClick={toggleMenu}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      )}
      <div className={contentClasses.join(" ")}>
        <div className={styles.logo}>
          <Image
            style={{ height: 150, width: 170 }}
            src={Logo}
            alt="Logo"
            crossOrigin="anonymous"
          />
        </div>
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              key={item.label}
              href={item.path}
              passHref
            >
              <li
                className={`${styles.menuItem} ${
                  pathname === item.path ? styles.active : ""
                }`}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
