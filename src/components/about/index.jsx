import Image from "next/image";
import Logo from "../../../assets/logo-1.png";

import "./styles.css";
export default function About() {
  return (
    <div className="about-container">
      <Image
        style={{ height: 130, width: 220 }}
        src={Logo}
        alt="Logo"
        crossOrigin="anonymous"
      />
      <section className="section-text">
        <p style={{ color: "white", textAlign: "justify", fontSize: "90%" }}>
          O AMO É UM APLICATIVO TOTALMENTE IDEALIZADO E DESENVOLVIDO POR ALUNOS
          DA UNIVERSIDADE FEDERAL DO CEARÁ, QUE DIANTE DAS DIFICULDADES
          ROTINEIRAS RELACIONADAS À MONITORIA. PORTANTO, O PROJETO PAE ADOTOU
          ESSE PROBLEMA E TROUXE O AMO COMO SULAÇÃO PRÁTICA E INOVADORA PARA O
          SISTEMA ACADÊMICO.
        </p>
        <p
          style={{
            color: "#024284",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          PRECISO DE AJUDA
        </p>
      </section>
    </div>
  );
}
