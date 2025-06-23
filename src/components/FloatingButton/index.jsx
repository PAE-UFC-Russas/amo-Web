import React from "react";
import styles from "./styles.module.css";
import { FaPlus } from "react-icons/fa"; // Importa o ícone de mais

export default function FloatingButton() {
  return (
    <button className={styles.addButton}>
      <FaPlus />
    </button>
  );
}
