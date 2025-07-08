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
          <Title title="SELECIONE O CURSO QUE A MONITORIA PERTENCE:" />
          {loading ? (
            <div>Loading...</div>
          ) : (
            courses
              .sort((a, b) => a.nome.localeCompare(b.nome))
              .map((item, index) => (
                <SubjectButton
                  key={index}
                  subject={{ name: item.nome }}
                  onClick={() => handleCourseSelection(item)}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}
