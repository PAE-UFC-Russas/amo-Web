"use client";
import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import AppointmentCard from "../../components/AppointmentCard";
import FloatingButton from "../../components/FloatingButton";
import { FaUserCircle } from "react-icons/fa";
import styles from "./page.module.css";

// Dados mocados baseados na imagem
const appointments = [
  {
    id: 1,
    status: "Confirmado",
    title: "Regras de Negócio e requisitos não funcionais",
    monitor: "Lucas Oliveira",
    type: "Monitoria Online",
    date: "04/04/2024 às 20:30",
  },
  {
    id: 2,
    status: "Aguardando",
    title: "Prótotipo de baixa fidelidade",
    monitor: "Lucas Oliveira",
    type: "Monitoria Presencial",
    date: "04/04/2024 às 20:30",
  },
  {
    id: 3,
    status: "Aguardando",
    title: "Prótotipo de baixa fidelidade",
    monitor: "Lucas Oliveira",
    type: "Monitoria Presencial",
    date: "04/04/2024 às 20:30",
  },
  {
    id: 4,
    status: "Cancelado",
    title: "Prótotipo de baixa fidelidade",
    monitor: "Lucas Oliveira",
    type: "Monitoria Presencial",
    date: "04/04/2024 às 20:30",
  },
];

const FilterButton = ({ label, isActive, onClick }) => (
  <button
    className={`${styles.filterBtn} ${isActive ? styles.active : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const AgendamentosPage = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredAppointments = appointments.filter((app) => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "Confirmados") return app.status === "Confirmado";
    // Para outros filtros como 'Aguardando', 'Cancelado', 'Encerrados'
    return app.status === activeFilter;
  });
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.filterButtons}>
            <FilterButton
              label="Todos"
              isActive={activeFilter === "Todos"}
              onClick={() => setActiveFilter("Todos")}
            />
            <FilterButton
              label="Aguardando"
              isActive={activeFilter === "Aguardando"}
              onClick={() => setActiveFilter("Aguardando")}
            />
            <FilterButton
              label="Confirmados"
              isActive={activeFilter === "Confirmados"}
              onClick={() => setActiveFilter("Confirmados")}
            />
            <FilterButton
              label="Encerrados"
              isActive={activeFilter === "Encerrados"}
              onClick={() => setActiveFilter("Encerrados")}
            />
          </div>
          <FaUserCircle className={styles.profileIcon} />
        </header>

        <h2 className={styles.title}>MEUS AGENDAMENTOS:</h2>

        <div className={styles.appointmentsList}>
          {filteredAppointments.map((app) => (
            <AppointmentCard
              key={app.id}
              status={app.status}
              title={app.title}
              monitor={app.monitor}
              type={app.type}
              date={app.date}
            />
          ))}
        </div>

        <FloatingButton />
      </main>
    </div>
  );
};

export default AgendamentosPage;
