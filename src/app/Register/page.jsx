import "./page.css";

import Input from "@/components/input";
import VerticalLine from "@/components/verticalLine";
import About from "@/components/about";
import Title from "@/components/title";
import SubLink from "@/components/subLink";
import DefaultButton from "@/components/DefaultButton";

export default function Register() {
  return (
    <div className="container-border">
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

          <SubLink subtitle="CADASTRE-SE COMO PROFESSOR" />

          <DefaultButton children="Entrar" />
        </div>
      </div>
    </div>
  );
}
