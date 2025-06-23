import styles from "./styles.module.css";

export default function input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.customInput}
    />
  );
}
