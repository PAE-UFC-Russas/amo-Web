import styles from "./page.module.css";

import Title from "@/components/title";
import SubLink from "@/components/subLink";
import DefaultButton from "@/components/DefaultButton";

export default function CheckCode() {
  return (
    <div className="container-border">
      <div className={styles.page}>
        <Title title="UM CODIGO FOI ENVIADO PARA SEU EMAIL" />

        <div className={styles.containerCode}>
          <input type="number" className={styles.codeInput} />
          <input type="number" className={styles.codeInput} />
          <input type="number" className={styles.codeInput} />
          <input type="number" className={styles.codeInput} />
          <input type="number" className={styles.codeInput} />
          <input type="number" className={styles.codeInput} />
        </div>

        <SubLink subtitle="Reenviar codigo" />

        <DefaultButton children="Prosseguir" />
      </div>
    </div>
  );
}
