"use client";
import styles from "./styles.module.css";

export default function SubjectButton({ subject, onClick }) {
  return (
    <div className={styles.subjectButton} onClick={onClick}>
      <div className={styles.subjectButtonContent}>
        <span>{subject.name}</span>
      </div>
    </div>
  );
}
