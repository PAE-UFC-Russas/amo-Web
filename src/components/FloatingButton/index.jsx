import React from "react";
import styles from "./styles.module.css";
import { FaPlus } from "react-icons/fa"; // Importa o ícone de mais

export default function FloatingButton({ onClick }) {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <FaPlus />
    </button>
  );
}
