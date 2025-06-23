import React from "react";
import styles from "./styles.module.css";

const AppointmentCard = ({ status, title, monitor, type, date }) => {
  // Mapeia o status para uma classe CSS (ex: 'Aguardando' -> 'pending')
  const statusMap = {
    Confirmado: "confirmed",
    Aguardando: "pending",
    Cancelado: "cancelled",
    // Adicione outros status se necessário
  };
  const statusClass = statusMap[status] || "default";
  return (
    <div className={`${styles.appointmentCard} ${styles[statusClass]}`}>
      <div className={styles.cardHeader}>
        <p className={`${styles.cardStatus} ${styles[statusClass]}`}>
          {status}
        </p>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.cardBody}>
        <p>Monitor: {monitor}</p>
        <p>{type}</p>
      </div>
      <div className={styles.cardFooter}>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
