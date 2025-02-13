import "./styles.css";

export default function input({ placeholder }) {
  return (
    <input type="text" placeholder={placeholder} className="custom-input" />
  );
}
