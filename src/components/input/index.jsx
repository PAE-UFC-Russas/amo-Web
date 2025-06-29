"use client";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Input({
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  items,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleSelectItem = (item) => {
    if (onChange) {
      onChange(item.nome || item);
    }
    setIsOpen(false);
  };

  // Se tem items, renderiza como dropdown
  if (items && items.length > 0) {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.dropdownContainer}>
          <div
            className={`${styles.customInput} ${styles.dropdown} ${
              error ? styles.inputError : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={value ? styles.selectedValue : styles.placeholder}>
              {value || placeholder}
            </span>
            <span
              className={`${styles.arrow} ${
                isOpen ? styles.arrowUp : styles.arrowDown
              }`}
            >
              ▼
            </span>
          </div>

          {isOpen && (
            <div className={styles.dropdownList}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={styles.dropdownItem}
                  onClick={() => handleSelectItem(item)}
                >
                  {item.nome || item}
                </div>
              ))}
            </div>
          )}
        </div>
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  }

  // Renderização normal para input sem dropdown
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
