"use client";
import styles from "./page.module.css";
import React from "react";
import { useEffect, useState } from "react";
import Title from "@/components/title";
import api from "@/service/api";
import { useSubject } from "@/context/subject";
import { useRouter } from "next/navigation";

import DefaultButton from "@/components/DefaultButton";
import SubjectButton from "@/components/SubjectButton";

export default function SelectMonitoring() {
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);
  const { EditSubject, course } = useSubject();
  const router = useRouter();

  const handleSubjectSelection = (subject) => {
    EditSubject(subject);
    router.push("/Forum");
  };
  useEffect(() => {
    async function GetMonitorings() {
      try {
        setLoading(true);
        const response = await api.get(
          `/disciplinas/?pages=1&cursos=${course.id}`
        );
        setLoading(false);
        setSubjects(response.data.results);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    GetMonitorings();
  }, [course]);

  return (
    <div className="container-border">
      <div className={styles.page}>
        <div className={styles.rightArea}>
          <div className={styles.headerSection}>
            <Title title="SELECIONE A MONITORIA DESEJADA:" />
            {course && (
              <div className={styles.courseInfo}>
                <div className={styles.courseInfoText}>
                  Curso: {course.nome}
                </div>
              </div>
            )}
            {!loading && subjects.length > 0 && (
              <div className={styles.subjectCount}>
                {subjects.length} monitoria{subjects.length !== 1 ? "s" : ""}{" "}
                disponível
              </div>
            )}
          </div>

          {loading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
              <div>Carregando monitorias...</div>
            </div>
          ) : subjects.length === 0 ? (
            <div className={styles.loadingContainer}>
              <div style={{ fontSize: "1.1rem", textAlign: "center" }}>
                Nenhuma monitoria encontrada para este curso.
              </div>
            </div>
          ) : (
            <div className={styles.monitoringContainer}>
              {subjects
                .sort((a, b) => a.nome.localeCompare(b.nome))
                .map((item, index) => (
                  <SubjectButton
                    key={index}
                    subject={{ name: item.nome }}
                    onClick={() => handleSubjectSelection(item)}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
