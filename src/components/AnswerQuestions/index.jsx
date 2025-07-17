"use client";
import React, { use, useEffect, useState } from "react";
import { FaTimes, FaThumbsUp, FaEllipsisV, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Comments from "@/components/Comments";
import styles from "./styles.module.css";
import perfil from "../../../assets/perfil.png";
import api from "@/service/api";

export default function AnswerQuestions({ isOpen, onClose, question = null }) {
  const [responses, setResponses] = useState({
    results: [],
    count: 0,
    next: null,
    previous: null,
  });
  const [myResponse, setMyResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (isOpen && question) {
      GetResponses();
    }
  }, [isOpen, question]);

  const PostResponse = async () => {
    setLoading(true);
    // if (HasBadWords(myResponse)) {
    //   setLoading(false);
    //   return;
    // }

    try {
      await api.post("/respostas/", {
        duvida: question.id,
        resposta: myResponse,
      });

      GetResponses();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setMyResponse("");
  };

  const GetResponses = async (next = false, reset = false) => {
    if (!question?.id) return;

    try {
      setLoading(true);

      const currentPage = next && responses.next ? page + 1 : 1;
      const url = `/respostas/?duvida=${question.id}&page=${currentPage}`;

      const response = await api.get(url);

      let results = response.data.results;

      // Ordenar por data mais recente primeiro
      results.sort((a, b) => new Date(b.data) - new Date(a.data));

      if (question.resposta_correta) {
        const correctAnswerIndex = results.findIndex(
          (item) => item.id === question.resposta_correta
        );
        if (correctAnswerIndex !== -1) {
          const [correctAnswer] = results.splice(correctAnswerIndex, 1);
          results.unshift(correctAnswer);
        }
      }

      setResponses({
        ...response.data,
        results: results,
      });
      setPage(currentPage);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao buscar respostas:", error);
      setLoading(false);
    }
  };

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
          <form
            className={styles.commentForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.commentInputContainer}>
              <input
                type="text"
                placeholder="Comentar"
                className={styles.commentInput}
                value={myResponse}
                onChange={(e) => setMyResponse(e.target.value)}
              />
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  PostResponse();
                }}
                className={styles.submitCommentButton}
              >
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
          {responses?.results && responses.results.length > 0 ? (
            responses.results.map((response, index) => (
              <Comments
                key={response.id || index}
                author={response.autor?.perfil?.nome_exibicao || "Usuário"}
                avatar={response.autor?.perfil?.foto || perfil}
                isVerified={response.autor?.verificado || false}
                content={response.resposta || "Comentário"}
                date={formatDate(response.data)}
                likes={response.votos || 0}
                isLiked={response.votou || false}
                onLike={() => console.log("Curtir comentário:", response.id)}
                onMenuClick={() => console.log("Menu comentário:", response.id)}
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
