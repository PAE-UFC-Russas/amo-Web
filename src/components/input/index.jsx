import styles from "./styles.module.css";

export default function Input({ placeholder, value, onChange, type = "text" }) {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value || ""}
      onChange={handleChange}
      className={styles.customInput}
    />
  );
}
