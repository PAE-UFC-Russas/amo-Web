"use client";
import React from "react";
import {
  FaTimes,
  FaCheck,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import styles from "./styles.module.css";

const Toast = ({ toasts, removeToast }) => {
  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <FaCheck className={styles.icon} />;
      case "error":
        return <FaTimes className={styles.icon} />;
      case "warning":
        return <FaExclamationTriangle className={styles.icon} />;
      case "info":
        return <FaInfoCircle className={styles.icon} />;
      default:
        return <FaInfoCircle className={styles.icon} />;
    }
  };

  return (
    <div className={styles.toastContainer}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${styles.toast} ${styles[toast.type]} ${
            toast.isRemoving ? styles.removing : ""
          }`}
        >
          <div className={styles.toastContent}>
            <div className={styles.toastIcon}>{getIcon(toast.type)}</div>
            <div className={styles.toastText}>
              <div className={styles.toastTitle}>{toast.title}</div>
              <div className={styles.toastMessage}>{toast.message}</div>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => removeToast(toast.id)}
              aria-label="Fechar notificação"
            >
              <FaTimes />
            </button>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{
                animationDuration: `${toast.duration}ms`,
                animationPlayState: toast.isPaused ? "paused" : "running",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toast;
