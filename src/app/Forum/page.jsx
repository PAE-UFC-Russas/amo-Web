import React from "react";
import Image from "next/image";
// Removido FaSearch e FaUserCircle daqui, pois serão passados como children para ForumHeader

import Sidebar from "@/components/SideBar";
import Card from "@/components/Card";
import FloatingButton from "@/components/FloatingButton";
import DefaultButton from "@/components/DefaultButton";
import Input from "@/components/input";
import ForumHeader from "@/components/ForumHeader"; // Importa o novo componente
import { FaUserCircle } from "react-icons/fa"; // Mantido para o ícone de perfil, se necessário como fallback ou passado diretamente

import "./page.css";
import perfil from "../../../assets/perfil.png";

export default function Forum() {
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
      author: "JOSIMEIRE NOGUEIRA",
      title: "FREQUÊNCIA SESCOMP",
      description:
        "Os participantes que tiverem 10h de sescomp estarei dando 1 ponto na prova",
      date: "17/04/2024",
      comments: 7,
      likes: 3,
      isResponded: false,
      avatar: perfil,
    },
    {
      author: "PEDRO HENRIQUE",
      title: "NÃO HAVERÁ MONITORIA NO DIA 20/05",
      description: "Gente tenho uma consulta, não posso comparecer a monitoria",
      date: "17/04/2024",
      comments: 7,
      likes: 3,
      isResponded: false,
    },
    {
      author: "PEDRO HENRIQUE",
      title: "",
      description: "Gente tenho uma consulta, não posso comparecer a monitoria",
      date: "17/04/2024",
      comments: 7,
      likes: 3,
      isResponded: false,
    },
    {
      author: "PEDRO HENRIQUE",
      title: "",
      description: "Gente tenho uma consulta, não posso comparecer a monitoria",
      date: "17/04/2024",
      comments: 7,
      likes: 3,
      isResponded: false,
    },
    {
      author: "PEDRO HENRIQUE",
      title: "",
      description: "Gente tenho uma consulta, não posso comparecer a monitoria",
      date: "17/04/2024",
      comments: 7,
      likes: 3,
      isResponded: false,
    },
  ];

  return (
    <div className="Forum-container">
      <Sidebar />
      <div className="Forum-main-content">
        <ForumHeader>
          {/* Passando os componentes como children */}
          <Input placeholder="PESQUISAR DÚVIDAS..." id="forum-search-bar" />
          <DefaultButton className="Forum-filter-button">
            Respondidas
          </DefaultButton>
          <DefaultButton className="Forum-filter-button">
            Mais curtidas
          </DefaultButton>
          <DefaultButton className="Forum-filter-button">
            Recentes
          </DefaultButton>
          <FaUserCircle
            size={40}
            id="forum-profile-icon"
            className="Forum-profile-icon-passed"
          />
        </ForumHeader>
        <div className="Forum-posts-grid">
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
            />
          ))}
        </div>
        <FloatingButton />
      </div>
    </div>
  );
}
