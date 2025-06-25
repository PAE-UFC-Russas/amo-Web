import styles from "./styles.module.css";

export default function DefaultButton({ children, onClick, disabled = false }) {
  return (
    <button
      className={styles.buttonEnter}
      onClick={onClick}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      <p>{children}</p>
    </button>
  );
}
