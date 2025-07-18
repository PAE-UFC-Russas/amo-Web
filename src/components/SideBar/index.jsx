"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronDown, FaChevronUp, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "@/context/auth";
import { useSubject } from "@/context/subject";
import styles from "./styles.module.css";

import Logo from "../../../assets/logoSadebar.png";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false); // Controla se o menu mobile está aberto ou fechado
  const [isMobileView, setIsMobileView] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { Logout } = useAuth();
  const { subject } = useSubject();

  // Define os itens do menu dinamicamente baseado na disciplina selecionada
  const menuItems = [
    {
      label: subject?.nome ? subject.nome.toUpperCase() : "",
      isDisplayOnly: true, // Primeiro item é apenas para visualização
    },
    { path: "/Forum", label: "FÓRUM" },
    { path: "/Agendamentos", label: "AGENDAMENTO" },
    { path: "/Schedules", label: "HORÁRIOS" },
  ];

  // Função para fazer logout
  const handleLogout = async () => {
    try {
      await Logout();
      router.push("/"); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

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
        <div className={styles.sidebarTop}>
          <div className={styles.logo}>
            <Image
              style={{ height: 150, width: 170 }}
              src={Logo}
              alt="Logo"
              crossOrigin="anonymous"
            />
          </div>
          <ul className={styles.menu}>
            {menuItems.map((item, index) => {
              // O primeiro item (monitoria) é apenas para visualização, não clicável
              if (item.isDisplayOnly) {
                return (
                  <li
                    key={item.label}
                    className={`${styles.menuItem} ${styles.displayOnly}`}
                  >
                    {item.label}
                  </li>
                );
              }

              // Os outros itens continuam clicáveis
              return (
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
              );
            })}
          </ul>
        </div>

        {/* Botão de Logout */}
        <div className={styles.logoutContainer}>
          <button
            className={styles.logoutButton}
            onClick={handleLogout}
            title="Fazer Logout"
          >
            <FaSignOutAlt className={styles.logoutIcon} />
            <span className={styles.logoutText}>SAIR</span>
          </button>
        </div>
      </div>
    </div>
  );
}
