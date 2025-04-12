import "./page.css";
import React from "react";
import VerticalLine from "@/components/verticalLine";
import Title from "@/components/title";
import DefaultButton from "@/components/DefaultButton";
import SubjectButton from "@/components/SubjectButton";

export default function SelectMonitoring() {
  return (
    <div className="page">
      <div className="right-area">
        <Title title="SELECIONE O CURSO QUE A MONITORIA PERTENCE:" />
        <SubjectButton subject={{ name: "Engenharia Civil" }} />
        <SubjectButton subject={{ name: "Engenharia de Produção" }} />
        <SubjectButton subject={{ name: "Engenharia de Software" }} />
        <SubjectButton subject={{ name: "Engenharia Mecânica" }} />
      </div>

      <VerticalLine />

      <div className="left-area">
        <SubjectButton subject={{ name: "Engenharia Civil" }} />
        <SubjectButton subject={{ name: "Engenharia de Produção" }} />
        <SubjectButton subject={{ name: "Engenharia de Software" }} />
        <SubjectButton subject={{ name: "Engenharia Mecânica" }} />

        <DefaultButton children="Prosseguir" />
      </div>
    </div>
  );
}
