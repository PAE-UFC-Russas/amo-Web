"use client";
import styles from "./page.module.css";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Title from "@/components/title";
import api from "@/service/api";
import { useSubject } from "@/context/subject";

import DefaultButton from "@/components/DefaultButton";
import SubjectButton from "@/components/SubjectButton";

export default function SelectDiscipline() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { EditCourse } = useSubject();

  const handleCourseSelection = (course) => {
    EditCourse(course);
    router.push("/SelectMonitoring");
  };

  useEffect(() => {
    async function GetCourses() {
      try {
        setLoading(true);
        const response = await api.get("/cursos/?page=1");
        setLoading(false);
        setCourses(response.data.results);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    GetCourses();
  }, []);

  return (
    <div className="container-border">
      <div className={styles.page}>
        <div className={styles.rightArea}>
          <div className={styles.headerSection}>
            <Title title="SELECIONE O CURSO QUE A MONITORIA PERTENCE:" />
            {!loading && courses.length > 0 && (
              <div className={styles.courseCount}>
                {courses.length} curso{courses.length !== 1 ? "s" : ""}{" "}
                disponível{courses.length !== 1 ? "eis" : ""}
              </div>
            )}
          </div>

          {loading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
              <div>Carregando cursos...</div>
            </div>
          ) : (
            <div className={styles.coursesContainer}>
              {courses
                .sort((a, b) => a.nome.localeCompare(b.nome))
                .map((item, index) => (
                  <SubjectButton
                    key={index}
                    subject={{ name: item.nome }}
                    onClick={() => handleCourseSelection(item)}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
