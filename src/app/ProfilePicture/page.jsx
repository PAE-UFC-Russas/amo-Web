import "./page.css";
import Image from "next/image";

import Input from "@/components/input";
import VerticalLine from "@/components/verticalLine";
import Title from "@/components/title";
import SubTitle from "@/components/subTitle";
import DefaultButton from "@/components/defaultButton";
import Foto from "../../../assets/perfil.png";

export default function cadastro() {
  return (
    <div className="page">
      <div className="right-area">
        <Title title="ESTAMOS QUASE LA" />
        <Input placeholder="NOME DE USUARIO" />
        <Input placeholder="NOME COMPLETO" />
        <Input placeholder="MATRICULA" />
        <Input placeholder="SELECIONAR O CURSO" />
        <Input placeholder="ANO DE ENTRADA" />
      </div>

      <VerticalLine />

      <div className="left-area">
        <Title title="SELECIONE SUA FOTO DE PERFIL" />
        <Image
          style={{ height: 200, width: 200 }}
          src={Foto}
          alt="Logo"
          crossOrigin="anonymous"
        />

        <SubTitle subtitle="Pula etapa" />

        <DefaultButton children="Prosseguir" />
      </div>
    </div>
  );
}
