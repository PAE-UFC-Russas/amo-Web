import "./page.css";

import Input from "@/components/input";
import VerticalLine from "@/components/verticalLine";
import About from "@/components/about";
import Title from "@/components/title";
import SubTitle from "@/components/subTitle";
import DefaultButton from "@/components/defaultButton";

export default function cadastro() {
  return (
    <div className="page">
      <div className="right-area">
        <Title title="CADASTRE-SE" />
        <Input placeholder="EMAIL" />
        <Input placeholder="SENHA" />
        <Input placeholder="CONFIRMA SENHA" />
        <Input placeholder="SELECIONAR PERFIL" />
      </div>

      <VerticalLine />

      <div className="left-area">
        <Title title="QUASE LA" />
        <Input placeholder="NOME DE USUARIO" />
        <Input placeholder="NOME COMPLETO" />
        <Input placeholder="MATRICULA" />
        <Input placeholder="SELECIONAR CURSO" />
        <Input placeholder="ANO DE ENTRADA" />

        <DefaultButton children="Prosseguir" />
      </div>
    </div>
  );
}
