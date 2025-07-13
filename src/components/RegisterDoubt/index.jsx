"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./styles.module.css";
import api from "@/service/api";
import { useAuth } from "@/context/auth";
import { useSubject } from "@/context/subject";
import { GetLoginToken } from "@/util/StorageLogin";

export default function RegisterDoubt({
  isOpen,
  onClose,
  title = "CADASTRAR DÚVIDA",
}) {
  const [question, setQuestion] = useState({
    titulo: "",
    descricao: "",
  });
  const [loading, setLoading] = useState(false);
  const { subject, isLoaded } = useSubject();

  // Função simples para substituir useCustomToast
  const showToast = (title, message, type) => {
    console.log(`${type.toUpperCase()}: ${title} - ${message}`);
    alert(`${title}: ${message}`);
  };

  // Função simples para verificar palavras ofensivas
  const HasBadWords = (title, description) => {
    const badWords = ["palavrao1", "palavrao2"]; // Adicione palavras ofensivas aqui
    const text = `${title} ${description}`.toLowerCase();
    return badWords.some((word) => text.includes(word));
  };

  const PostQuestion = async () => {
    if (!isLoaded || !subject) {
      showToast("Erro", "Disciplina não carregada ainda", "error");
      return;
    }

    setLoading(true);
    console.log(subject);

    if (question.titulo.length > 0 && question.descricao.length > 0) {
      try {
        if (HasBadWords(question.titulo, question.descricao)) {
          setLoading(false);
          showToast(
            "Atenção",
            "Palavras ofensivas não são permitidas!",
            "warning"
          );
          return;
        }

        await api.post(
          "/duvidas/",
          {
            titulo: question.titulo,
            descricao: question.descricao,
            disciplina: subject.id,
          },
          {
            headers: {
              Authorization: "Token " + (await GetLoginToken()),
            },
          }
        );

        setLoading(false);
        showToast("Sucesso", "Dúvida publicada com sucesso!", "success");
        handleClose(true);
      } catch (error) {
        console.log(error);
        showToast("Erro", "Erro ao publicar dúvida!", "error");
        setLoading(false);
        return error.response?.data;
      }
    } else {
      showToast(
        "Atenção",
        "Título e descrição obrigatórios, preencha-os!",
        "warning"
      );
      setLoading(false);
    }
  };

  const handleClose = (shouldRefresh = false) => {
    setQuestion({
      titulo: "",
      descricao: "",
    });
    onClose(shouldRefresh);
  };

  const handleInputChange = (field, value) => {
    setQuestion((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    PostQuestion();
  };

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
              value={question.titulo}
              onChange={(e) => handleInputChange("titulo", e.target.value)}
              className={styles.titleInput}
              maxLength={100}
              required
            />
            <span className={styles.inputHint}>
              O título deve conter palavras chaves
            </span>
          </div>

          <div className={styles.inputGroup}>
            <textarea
              placeholder="INSIRA A DESCRIÇÃO"
              value={question.descricao}
              onChange={(e) => handleInputChange("descricao", e.target.value)}
              className={styles.descriptionInput}
              rows={6}
              maxLength={500}
              required
            />
            <span className={styles.inputHint}>
              A descrição deve contar até 500 caracteres
            </span>
            <span className={styles.characterCount}>
              {question.descricao.length}/500
            </span>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? "Publicando..." : "Publicar"}
          </button>
        </form>
      </div>
    </div>
  );
}
