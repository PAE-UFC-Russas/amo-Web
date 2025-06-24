"use client";
import React, { useState } from "react";
import Image from "next/image";
// Removido FaSearch e FaUserCircle daqui, pois serão passados como children para ForumHeader

import Sidebar from "@/components/SideBar";
import Card from "@/components/Card";
import FloatingButton from "@/components/FloatingButton";
import RegisterDoubt from "@/components/RegisterDoubt";
import AnswerQuestions from "@/components/AnswerQuestions";

import ForumHeader from "@/components/ForumHeader"; // Importa o novo componente
import { FaUserCircle } from "react-icons/fa"; // Mantido para o ícone de perfil, se necessário como fallback ou passado diretamente

import styles from "./page.module.css";
import perfil from "../../../assets/perfil.png";

export default function Forum() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleOpenAnswerModal = (question) => {
    setSelectedQuestion(question);
    setIsAnswerModalOpen(true);
  };

  const handleCloseAnswerModal = () => {
    setIsAnswerModalOpen(false);
    setSelectedQuestion(null);
  };
  const forumPosts = [
    {
      author: "GIOVANA ARAUJO",
      title: "QUANTIDADE DE MEMBROS DO TRABALHO",
      description:
        "O seminário pode ser feito com até quantas pessoas na equipe?",
      date: "17/04/2024",
      comments: 7,
      likes: 3,
      isResponded: true,
      avatar: perfil,
    },
    {
      author: "GIOVANA ARAUJO",
      title: "QUANTIDADE DE MEMBROS DO TRABALHO",
      description:
        "O seminário pode ser feito com até quantas pessoas na equipe?",
      date: "17/04/2024",
      comments: 7,
      likes: 3,
      isResponded: true,
      avatar: perfil,
    },
    {
      author: "GIOVANA ARAUJO",
      title: "QUANTIDADE DE MEMBROS DO TRABALHO",
      description:
        "O seminário pode ser feito com até quantas pessoas na equipe?",
      date: "17/04/2024",
      comments: 7,
      likes: 3,
      isResponded: true,
      avatar: perfil,
    },
    {
      author: "GIOVANA ARAUJO",
      title: "QUANTIDADE DE MEMBROS DO TRABALHO",
      description:
        "O seminário pode ser feito com até quantas pessoas na equipe?",
      date: "17/04/2024",
      comments: 7,
      likes: 3,
      isResponded: true,
      avatar: perfil,
    },
    {
      author: "GIOVANA ARAUJO",
      title: "QUANTIDADE DE MEMBROS DO TRABALHO",
      description:
        "O seminário pode ser feito com até quantas pessoas na equipe?",
      date: "17/04/2024",
      comments: 7,
      likes: 3,
      isResponded: true,
      avatar: perfil,
    },
  ];
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <ForumHeader />{" "}
        <div className={styles.postsGrid}>
          {forumPosts.map((post, index) => (
            <Card
              key={index}
              author={post.author}
              title={post.title}
              description={post.description}
              date={post.date}
              comments={post.comments}
              likes={post.likes}
              isResponded={post.isResponded}
              avatar={post.avatar}
              onClick={() => handleOpenAnswerModal(post)}
            />
          ))}
        </div>
        <FloatingButton onClick={handleOpenRegisterModal} />
        <RegisterDoubt
          isOpen={isRegisterModalOpen}
          onClose={handleCloseRegisterModal}
          title="CADASTRAR DÚVIDA"
        />
        <AnswerQuestions
          isOpen={isAnswerModalOpen}
          onClose={handleCloseAnswerModal}
          question={selectedQuestion}
        />
      </div>
    </div>
  );
}
