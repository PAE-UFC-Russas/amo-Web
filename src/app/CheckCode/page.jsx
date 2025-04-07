import "./page.css";

import Title from "@/components/title";
import SubTitle from "@/components/subTitle";
import DefaultButton from "@/components/defaultButton";

export default function cadastro() {
  return (
    <div className="page">
      <Title title="UM CODIGO FOI ENVIADO PARA SEU EMAIL" />

      <div className="container-code">
        <input type="number" className="code-input" />
        <input type="number" className="code-input" />
        <input type="number" className="code-input" />
        <input type="number" className="code-input" />
        <input type="number" className="code-input" />
        <input type="number" className="code-input" />
      </div>

      <SubTitle subtitle="Reenviar codigo" />

      <DefaultButton children="Prosseguir" />
    </div>
  );
}
