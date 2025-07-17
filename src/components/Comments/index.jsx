import React from "react";
import Image from "next/image";
import { FaThumbsUp, FaEllipsisH } from "react-icons/fa";
import styles from "./styles.module.css";

export default function Comments({
  author,
  avatar,
  isVerified = true,
  content,
  date,
  likes,
  isLiked = false,
  onLike,
  onMenuClick,
}) {
  return (
    <div className={styles.container}>
      {/* Header com avatar, nome e menu */}
      <div className={styles.header}>
        <div className={styles.authorInfo}>
          {avatar ? (
            <Image
              src={avatar}
              alt={author}
              width={40}
              height={40}
              className={styles.avatar}
            />
          ) : (
            <div className={styles.avatarPlaceholder}></div>
          )}
          <div className={styles.authorDetails}>
            <div className={styles.authorName}>
              {author}
              {isVerified && <span className={styles.verifiedBadge}>◆</span>}
            </div>
          </div>
        </div>

        <button className={styles.menuButton} onClick={onMenuClick}>
          <FaEllipsisH size={16} />
        </button>
      </div>

      {/* Conteúdo do comentário */}
      <div className={styles.content}>
        <p>{content}</p>
      </div>

      {/* Footer com data e likes */}
      <div className={styles.footer}>
        <span className={styles.date}>{date}</span>
        <div className={styles.likes}>
          <span className={styles.likeCount}>{likes}</span>
          <button
            className={`${styles.likeButton} ${isLiked ? styles.liked : ""}`}
            onClick={onLike}
          >
            <FaThumbsUp size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
