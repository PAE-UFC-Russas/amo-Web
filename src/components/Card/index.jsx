import React from "react";
import Image from "next/image"; // Adicionado para a imagem de perfil
import styles from "./styles.module.css";

import { FaRegThumbsUp, FaRegCommentDots, FaThumbsUp } from "react-icons/fa"; // Ícones atualizados

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
  onClick,
  onLike,
  postId,
  isLiked,
}) {
  return (
    <div className={`${styles.card} ${isResponded ? styles.responded : ""}`}>
      <div
        onClick={onClick}
        style={{ cursor: onClick ? "pointer" : "default" }}
        className={styles.cardHeader}
      >
        {avatar ? (
          <Image
            src={avatar}
            alt={author}
            width={50}
            height={50}
            className={styles.avatarImage}
          />
        ) : (
          <div className={styles.avatarPlaceholder}></div>
        )}
        <div className={styles.authorDetails}>
          <div className={styles.author}>{author}</div>
          {isResponded && (
            <span className={styles.respondedBadge}>RESPONDIDA</span>
          )}
        </div>
      </div>
      <div
        onClick={onClick}
        style={{ cursor: onClick ? "pointer" : "default" }}
        className={styles.cardBody}
      >
        {title && <h3>{title}</h3>}
        <HorizontaLine height="2px" color="#52D6FB" />
        <p>{description}</p>
      </div>

      <div className={styles.cardFooter}>
        <span>{date}</span>
        <div className={styles.interactions}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (onLike && postId) {
                onLike(postId);
              }
            }}
          >
            {likes}
            {isLiked ? (
              <FaThumbsUp size={17} color="#52D6FB" />
            ) : (
              <FaRegThumbsUp size={17} />
            )}
          </span>
          <span
            onClick={onClick}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            {comments}
            <FaRegCommentDots size={17} cursor={"pointer"} />{" "}
            {/* Ícone de comentários */}
          </span>
        </div>
      </div>
    </div>
  );
}
