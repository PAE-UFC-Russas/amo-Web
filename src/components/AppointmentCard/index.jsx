import React from "react";
import "./styles.css";

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
    <div className={`appointment-card ${statusClass}`}>
      <div className="card-header">
        <p className={`card-status ${statusClass}`}>{status}</p>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <p>Monitor: {monitor}</p>
        <p>{type}</p>
      </div>
      <div className="card-footer">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
