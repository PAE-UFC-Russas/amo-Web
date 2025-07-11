"use client";
import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import ScheduleCard from "../../components/ScheduleCard";
import { FaUserCircle } from "react-icons/fa";
import styles from "./page.module.css";

// Dados mocados baseados na imagem
const professorData = {
  type: "professor",
  person: {
    name: "TATIANE ALVES",
    role: "Professora",
    avatar: "/assets/perfil.png", // Caminho para a imagem do avatar
    classes: [
      {
        title: "Turma Eng. de Software",
        location: "Unidade I bloco A - Sala 5",
        days: [
          { day: "Segunda-feira", time: "13:30 às 15:30" },
          { day: "Quarta-feira", time: "13:30 às 15:30" },
        ],
      },
      {
        title: "Turma Ciência da Computação",
        location: "Unidade II bloco A - Sala 1",
        days: [{ day: "Quinta-feira", time: "13:30 às 15:30" }],
      },
    ],
    office: "Unidade II, bloco 2",
  },
};

const monitorsData = [
  {
    type: "monitor",
    person: {
      id: 1,
      name: "LUCAS OLIVEIRA",
      role: "Monitor",
      avatar: "/assets/perfil.png", // Usando a mesma imagem como placeholder
      monitoringLocation: "Sala de Monitoria II",
      availability: [
        { day: "Segunda-feira", time: "13:30 às 15:30" },
        { day: "Quarta-feira", time: "13:30 às 15:30" },
      ],
    },
  },
  {
    type: "monitor",
    person: {
      id: 2,
      name: "LUCAS OLIVEIRA",
      role: "Monitor",
      avatar: "/assets/perfil.png",
      monitoringLocation: "Sala de Monitoria II",
      availability: [
        { day: "Segunda-feira", time: "13:30 às 15:30" },
        { day: "Quarta-feira", time: "13:30 às 15:30" },
      ],
    },
  },
  // Adicione mais monitores se necessário
];

// Botão de filtro reutilizável (não usado nesta página)
const FilterButton = ({ label, isActive, onClick }) => (
  <button
    className={`${styles.filterBtn} ${isActive ? styles.active : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const SchedulesPage = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
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

        <div className={styles.grid}>
          <div className={styles.professorColumn}>
            <ScheduleCard
              type={professorData.type}
              person={professorData.person}
            />
          </div>
          <div className={styles.monitorsColumn}>
            {monitorsData.map((monitor) => (
              <ScheduleCard
                key={monitor.person.id}
                type={monitor.type}
                person={monitor.person}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchedulesPage;
