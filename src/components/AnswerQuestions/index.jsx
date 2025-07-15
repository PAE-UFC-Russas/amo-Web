"use client";
import React, { useState } from "react";
import { FaTimes, FaThumbsUp, FaEllipsisV, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Comments from "@/components/Comments";
import styles from "./styles.module.css";
import perfil from "../../../assets/perfil.png";

export default function AnswerQuestions({ isOpen, onClose, question = null }) {
  const [newComment, setNewComment] = useState("");

  if (!isOpen) return null;

  // Função para formatar data no padrão brasileiro
  const formatDate = (dateString) => {
    if (!dateString || dateString === "Sem data") return "Sem data";

    try {
      const date = new Date(dateString);
      const months = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
      ];

      const day = date.getDate().toString().padStart(2, "0");
      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${day} de ${month} de ${year}`;
    } catch (error) {
      return "Data inválida";
    }
  };

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
            {question?.autor?.perfil?.foto ? (
              <Image
                src={question.autor.perfil.foto}
                alt={question.autor.perfil.nome_exibicao || "Autor"}
                width={50}
                height={50}
                className={styles.authorAvatar}
              />
            ) : (
              <img
                src={perfil}
                className={styles.authorAvatar}
                alt="Avatar padrão"
              />
            )}
            <div className={styles.authorDetails}>
              <h3 className={styles.authorName}>
                {question?.autor?.perfil?.nome_exibicao || "Usuário"}
              </h3>
              <span className={styles.graduationIcon}>🎓</span>
            </div>
          </div>
        </div>
        {/* Título e Descrição da Pergunta */}
        <div className={styles.questionContent}>
          <h2 className={styles.questionTitle}>
            {question?.titulo || "Título da dúvida"}
          </h2>
          <span className={styles.questionDate}>
            {formatDate(question?.data)}
          </span>
          <p className={styles.questionDescription}>
            {question?.descricao || "Descrição da dúvida"}
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
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit" className={styles.submitCommentButton}>
                <FaArrowRight size={16} />
              </button>
            </div>{" "}
            <div className={styles.commentStats}>
              <span>{question?.votos || 0}</span>
              <FaThumbsUp className={styles.likeIcon} />
            </div>
          </form>
        </div>

        {/* Lista de Comentários */}
        <div className={styles.commentsSection}>
          {question?.comentarios && question.comentarios.length > 0 ? (
            question.comentarios.map((comment, index) => (
              <Comments
                key={comment.id || index}
                author={comment.autor?.perfil?.nome_exibicao || "Usuário"}
                avatar={comment.autor?.perfil?.foto || perfil}
                isVerified={comment.autor?.verificado || false}
                content={comment.conteudo || comment.texto || "Comentário"}
                date={formatDate(comment.data)}
                likes={comment.votos || 0}
                isLiked={comment.votou || false}
                onLike={() => console.log("Curtir comentário:", comment.id)}
                onMenuClick={() => console.log("Menu comentário:", comment.id)}
              />
            ))
          ) : (
            <div className={styles.noComments}>
              <p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
