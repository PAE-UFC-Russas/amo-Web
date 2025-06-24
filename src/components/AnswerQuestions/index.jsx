"use client";
import React, { useState } from "react";
import { FaTimes, FaThumbsUp, FaEllipsisV } from "react-icons/fa";
import styles from "./styles.module.css";
import perfil from "../../../assets/perfil.png";

export default function AnswerQuestions({ isOpen, onClose, question = null }) {
  const [newComment, setNewComment] = useState("");

  // Dados mockados baseados na imagem

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header do Modal */}
        <div className={styles.modalHeader}>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar modal"
          >
            <FaTimes />
          </button>
        </div>
        {/* Cabeçalho da Pergunta */}
        <div className={styles.questionHeader}>
          <div className={styles.authorInfo}>
            <img src={perfil} className={styles.authorAvatar} />
            <div className={styles.authorDetails}>
              <h3 className={styles.authorName}>felipe</h3>
              <span className={styles.graduationIcon}>🎓</span>
            </div>
          </div>
        </div>
        {/* Título e Descrição da Pergunta */}
        <div className={styles.questionContent}>
          <h2 className={styles.questionTitle}>
            QUANTIDADE DE MEMBROS DO TRABALHO
          </h2>
          <span className={styles.questionDate}>
            O seminário pode ser feito com até quantas pessoas na equipe?
          </span>
          <p className={styles.questionDescription}>
            O seminário pode ser feito com até quantas pessoas na equipe?
          </p>
        </div>
        {/* Campo de Comentário */}
        <div className={styles.commentSection}>
          <form className={styles.commentForm}>
            <div className={styles.commentInputContainer}>
              <input
                type="text"
                placeholder="Comentar"
                className={styles.commentInput}
              />
              <button type="submit" className={styles.submitCommentButton}>
                →
              </button>
            </div>{" "}
            <div className={styles.commentStats}>
              <span>7</span>
              <FaThumbsUp className={styles.likeIcon} />
            </div>
          </form>
        </div>{" "}
      </div>
    </div>
  );
}
