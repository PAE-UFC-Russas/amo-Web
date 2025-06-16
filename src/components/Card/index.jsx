import React from "react";
import Image from "next/image"; // Adicionado para a imagem de perfil
import "./styles.css";

import { FaRegThumbsUp, FaRegCommentDots } from "react-icons/fa"; // Ícones atualizados

import HorizontaLine from "../HorizontalLine";

export default function Card({
  author,
  title,
  description,
  date,
  comments,
  likes,
  isResponded,
  avatar,
}) {
  return (
    <div className={`card ${isResponded ? "responded" : ""}`}>
      <div className="card-header">
        {avatar ? (
          <Image
            src={avatar}
            alt={author}
            width={50}
            height={50}
            className="avatar-image"
          />
        ) : (
          <div className="avatar-placeholder"></div>
        )}
        <div className="author-details">
          <div className="author">{author}</div>
          {isResponded && <span className="responded-badge">RESPONDIDA</span>}
        </div>
      </div>
      <div className="card-body">
        {title && <h3>{title}</h3>}
        <HorizontaLine height="2px" color="#52D6FB" />
        <p>{description}</p>
      </div>

      <div className="card-footer">
        <span>{date}</span>
        <div className="interactions">
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {likes}
            <FaRegThumbsUp size={17} cursor={"pointer"} />{" "}
            {/* Ícone de curtida */}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {comments}
            <FaRegCommentDots size={17} cursor={"pointer"} />{" "}
            {/* Ícone de comentários */}
          </span>
        </div>
      </div>
    </div>
  );
}
