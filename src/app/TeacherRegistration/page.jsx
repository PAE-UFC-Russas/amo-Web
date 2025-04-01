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
        <About />
      </div>

      <VerticalLine />

      <div className="left-area">
        <Title title="CADASTRE PROFESSOR" />

        <p
          style={{
            color: "white",
            textAlign: "justify",
            fontSize: "90%",
            marginTop: "70px",
          }}
        >
          Olá Docente, bem vindo(a) ao AMO! Para dar continuidade ao cadastro,
          envie um email para o endereço paeufcrussas@gmail.com com as seguintes
          informações:
        </p>

        <Input placeholder="NOME" />
        <Input placeholder="SIAPE" />

        <DefaultButton children="Enviar email" />
      </div>
    </div>
  );
}
