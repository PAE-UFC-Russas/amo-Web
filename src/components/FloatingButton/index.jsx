import React from "react";
import "./styles.css";
import { FaPlus } from "react-icons/fa"; // Importa o ícone de mais

export default function FloatingButton() {
  return (
    <button className="add-button">
      <FaPlus />
    </button>
  );
}
