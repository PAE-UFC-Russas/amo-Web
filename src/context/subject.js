import { createContext, useContext, useState, useEffect } from "react";

export const SubjectContext = createContext({});

// Funções para gerenciar cache no localStorage
const getStoredSubject = () => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("selected_subject");
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("Erro ao carregar subject do localStorage:", error);
      return null;
    }
  }
  return null;
};

const getStoredCourse = () => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("selected_course");
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("Erro ao carregar course do localStorage:", error);
      return null;
    }
  }
  return null;
};

const storeSubject = (subject) => {
  if (typeof window !== "undefined") {
    try {
      if (subject) {
        localStorage.setItem("selected_subject", JSON.stringify(subject));
      } else {
        localStorage.removeItem("selected_subject");
      }
    } catch (error) {
      console.error("Erro ao salvar subject no localStorage:", error);
    }
  }
};

const storeCourse = (course) => {
  if (typeof window !== "undefined") {
    try {
      if (course) {
        localStorage.setItem("selected_course", JSON.stringify(course));
      } else {
        localStorage.removeItem("selected_course");
      }
    } catch (error) {
      console.error("Erro ao salvar course no localStorage:", error);
    }
  }
};

export default function SubjectContextProvider({ children }) {
  const [subject, setSubject] = useState(null);
  const [course, setCourse] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carrega dados do localStorage apenas no cliente
  useEffect(() => {
    const storedSubject = getStoredSubject();
    const storedCourse = getStoredCourse();

    if (storedSubject) {
      setSubject(storedSubject);
    }

    if (storedCourse) {
      setCourse(storedCourse);
    }

    setIsLoaded(true);
  }, []);

  function EditSubject(subject) {
    console.log("Editando disciplina:", subject);
    setSubject(subject);
    storeSubject(subject);
  }

  function EditCourse(course) {
    console.log("Editando curso:", course);
    setCourse(course);
    storeCourse(course);
  }

  // Função para limpar cache (útil para logout)
  function ClearCache() {
    setSubject(null);
    setCourse(null);
    storeSubject(null);
    storeCourse(null);
    setIsLoaded(false);
  }

  return (
    <SubjectContext.Provider
      value={{
        EditSubject,
        EditCourse,
        ClearCache,
        subject,
        course,
        isLoaded,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
}

export function useSubject() {
  const context = useContext(SubjectContext);

  return context;
}
