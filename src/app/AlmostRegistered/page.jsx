import "./page.css";
import React from "react";

import Input from "@/components/input";
import VerticalLine from "@/components/verticalLine";
import Title from "@/components/title";
import DefaultButton from "@/components/DefaultButton";

export default function AlmostRegistered() {
  return (
    <div className="page">
      <div className="container-mobile">
        <Title title="ESTAMOS QUASE LA" />
        <Input placeholder="EMAIL" />
        <Input placeholder="SENHA" />
        <Input placeholder="CONFIRMA SENHA" />
        <Input placeholder="NOME DE USUÁRIO" />
        <Input placeholder="NOME COMPLETO" />
        <Input placeholder="MATRÍCULA" />
        <Input placeholder="SELECIONAR CURSO" />
        <Input placeholder="ANO DE ENTRADA" />
      </div>

      <div className="right-area">
        <Title title="CADASTRE-SE" />
        <Input placeholder="EMAIL" />
        <Input placeholder="SENHA" />
        <Input placeholder="CONFIRMA SENHA" />
        <Input placeholder="SELECIONAR PERFIL" />
      </div>

      <VerticalLine />

      <div className="left-area">
        <Title title="ESTAMOS QUASE LA" />
        <Input placeholder="NOME DE USUÁRIO" />
        <Input placeholder="NOME COMPLETO" />
        <Input placeholder="MATRÍCULA" />
        <Input placeholder="SELECIONAR CURSO" />
        <Input placeholder="ANO DE ENTRADA" />

        <DefaultButton children="Prosseguir" />
      </div>
    </div>
  );
}
