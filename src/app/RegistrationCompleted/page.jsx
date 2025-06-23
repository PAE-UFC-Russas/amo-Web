import Image from "next/image";
import styles from "./page.module.css";
import Foto from "../../../assets/perfil.png";
import Title from "@/components/title";
import DefaultButton from "@/components/DefaultButton";

export default function RegistrationCompleted() {
  return (
    <div className="container-border">
      <div className={styles.container}>
        <div className={styles.subContent}>
          <Title title="SEJA BEM VINDO XXXXX" />

          <section className={styles.layoutImg}>
            <div className={styles.leftArea}>
              <Image
                style={{ height: 200, width: 200 }}
                src={Foto}
                alt="Logo"
              />
            </div>

            <div className={styles.rightArea}>
              <Title title="AQUI VOCE PODE" />
              <p
                style={{
                  color: "white",
                  textAlign: "justify",
                  fontSize: "1.5rem",
                }}
              >
                TIRAR SUAS DUVIDAS NO FURUM, MARCAR MONITORIAS NO AGENDAMENTO E
                CONFERIR OS HORARIOS E AS AULAS ONDE OS MONITORES SE ENCONTRAM.
                PARA DUVIDAS E SUGESTOES, ENVIE UM EMAIL PARA KAKAKAKA@GMAIL.COM
              </p>
            </div>
          </section>
          <section className={styles.layoutButton}>
            <DefaultButton children="CONCLUIR CADASTRO" />
          </section>
        </div>
      </div>
    </div>
  );
}
