import styles from "../input/styles.module.css";

export default function StaticInput({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value=""
      readOnly
      className={styles.customInput}
    />
  );
}
