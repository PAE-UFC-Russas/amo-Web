"use client";
import styles from "./styles.module.css";

export default function Input({
  placeholder,
  value,
  onChange,
  type = "text",
  error,
}) {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={handleChange}
        className={`${styles.customInput} ${error ? styles.inputError : ""}`}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
