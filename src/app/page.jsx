import "./page.css";

import Input from "@/components/input";
import VerticalLine from "@/components/verticalLine";
import About from "@/components/about";
import Title from "@/components/title";
import SubTitle from "@/components/subTitle";

export default function Home() {
  return (
    <div className="page">
      <div className="left-area">
        <Title title="LOGIN" />
        <Input placeholder="EMAIL" />
        <Input placeholder="SENHA" />

        <SubTitle subtitle="ESQUECI MINHA SENHA" />

        <button className="button-enter">
          <p>Entrar</p>
        </button>

        <SubTitle subtitle="NÃO POSSUO CADASTRO" />
      </div>

      <VerticalLine />

      <div className="right-area">
        <About />
      </div>
    </div>
  );
}
