import "./page.css";

import Input from "@/components/input";
import VerticalLine from "@/components/verticalLine";
import About from "@/components/about";
import Title from "@/components/title";
import SubTitle from "@/components/subTitle";

export default function cadastro() {
  return (
    <div className="page">
      <div className="right-area">
        <About />
      </div>

      <VerticalLine />

      <div className="left-area">
        <Title title="CADASTRE-SE" />

        <Input placeholder="EMAIL" />
        <Input placeholder="SENHA" />
        <Input placeholder="CONFIRMA SENHA" />
        <Input placeholder="SELECIONAR PERFIL" />

        <SubTitle subtitle="CADASTRE-SE COMO PROFESSOR" />
      </div>
    </div>
  );
}
