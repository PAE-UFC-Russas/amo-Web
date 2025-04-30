import "./page.css";
import React from "react";
import Title from "@/components/title";
import SubjectButton from "@/components/SubjectButton";

export default function SelectDiscipline() {
  return (
    <div className="container-border">
      <div className="page">
        <div className="buttons-area">
          <Title title={"SELECIONE O CURSO QUE A MONITORIA PERTENCE"} />
          <SubjectButton subject={{ name: "Engenharia Civil" }} />
          <SubjectButton subject={{ name: "Engenharia de Produção" }} />
          <SubjectButton subject={{ name: "Engenharia de Software" }} />
          <SubjectButton subject={{ name: "Engenharia Mecânica" }} />
        </div>
      </div>
    </div>
  );
}
