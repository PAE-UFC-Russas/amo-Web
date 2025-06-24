"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./styles.module.css";

export default function RegisterDoubt({
  isOpen,
  onClose,
  title = "CADASTRAR DÚVIDA",
}) {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação básica
    if (!questionTitle.trim()) {
      alert("Por favor, insira um título para sua dúvida.");
      return;
    }

    if (!questionDescription.trim()) {
      alert("Por favor, insira uma descrição para sua dúvida.");
      return;
    }

    if (questionDescription.length > 500) {
      alert("A descrição deve conter até 500 caracteres.");
      return;
    }

    // Aqui você pode adicionar a lógica para salvar a dúvida
    console.log("Nova dúvida:", {
      title: questionTitle,
      description: questionDescription,
    });

    // Limpar campos e fechar modal
    setQuestionTitle("");
    setQuestionDescription("");
    onClose();
  };

  const handleClose = () => {
    setQuestionTitle("");
    setQuestionDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Fechar modal"
          >
            <FaTimes />
          </button>
        </div>

        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="INSIRA O TÍTULO"
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
              className={styles.titleInput}
              maxLength={100}
            />
            <span className={styles.inputHint}>
              O título deve conter palavras chaves
            </span>
          </div>

          <div className={styles.inputGroup}>
            <textarea
              placeholder="INSIRA A DESCRIÇÃO"
              value={questionDescription}
              onChange={(e) => setQuestionDescription(e.target.value)}
              className={styles.descriptionInput}
              rows={6}
              maxLength={500}
            />
            <span className={styles.inputHint}>
              A descrição deve contar até 500 caracteres
            </span>
            <span className={styles.characterCount}>
              {questionDescription.length}/500
            </span>
          </div>

          <button type="submit" className={styles.submitButton}>
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
}
