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
          <Title title="SELECIONE O CURSO QUE A MONITORIA PERTENCE:" />
          {loading ? (
            <div>Loading...</div>
          ) : (
            subjects
              .sort((a, b) => a.nome.localeCompare(b.nome))
              .map((item, index) => (
                <SubjectButton
                  key={index}
                  subject={{ name: item.nome }}
                  onClick={() => handleSubjectSelection(item)}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}
