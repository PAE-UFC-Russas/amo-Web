import styles from "./styles.module.css";

export default function DefaultButton({ children }) {
  return (
    <button className={styles.buttonEnter}>
      <p>{children}</p>
    </button>
  );
}
