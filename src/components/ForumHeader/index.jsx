"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import DefaultButton from "@/components/DefaultButton";
import styles from "./styles.module.css";

export default function ForumHeader({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efeito para adicionar/remover classe no body para desabilitar scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Cleanup function para remover a classe se o componente for desmontado
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  // Divide os children em searchBar, filters e profileIcon
  const childrenArray = React.Children.toArray(children);
  const searchBar = childrenArray.find(
    (child) =>
      child.type === Input ||
      (child.props && child.props.id === "forum-search-bar")
  );
  const filters = childrenArray.filter(
    (child) =>
      child.type === DefaultButton ||
      (child.props &&
        child.props.className &&
        child.props.className.includes("Forum-filter-button"))
  );
  const profileIcon = childrenArray.find(
    (child) =>
      child.type === FaUserCircle ||
      (child.props && child.props.id === "forum-profile-icon")
  );
  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        {searchBar ? (
          <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            {searchBar}
          </div>
        ) : (
          // Fallback ou renderização condicional se searchBar não for encontrado
          <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <input placeholder="PESQUISAR DÚVIDAS..." />
          </div>
        )}
      </div>

      {/* Ícone do Hambúrguer sempre visível, mas o ícone interno muda */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen && window.innerWidth <= 768 ? null : <FaBars />}
      </div>

      {/* Menu que cobre a tela em mobile e é dropdown em desktop */}
      <div className={`${styles.desktopMenu} ${isMenuOpen ? styles.open : ""}`}>
        {isMenuOpen && window.innerWidth <= 768 && (
          <button className={styles.mobileMenuCloseButton} onClick={toggleMenu}>
            <FaTimes />
          </button>
        )}
        <div className={styles.filters}>
          {filters.length > 0 ? (
            filters
          ) : (
            // Fallback ou renderização condicional se filters não forem encontrados
            <>
              <DefaultButton>Respondidas</DefaultButton>
              <DefaultButton>Mais curtidas</DefaultButton>
              <DefaultButton>Recentes</DefaultButton>
            </>
          )}
        </div>
        {profileIcon || (
          <FaUserCircle size={40} className={styles.profileIcon} />
        )}
      </div>
    </div>
  );
}
