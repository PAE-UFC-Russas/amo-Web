import "./page.css";

import Title from "@/components/title";
import SubLink from "@/components/subLink";
import DefaultButton from "@/components/DefaultButton";

export default function CheckCode() {
  return (
    <div className="container-border">
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

        <SubLink subtitle="Reenviar codigo" />

        <DefaultButton children="Prosseguir" />
      </div>
    </div>
  );
}
