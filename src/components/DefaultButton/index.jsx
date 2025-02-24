import "./styles.css";

export default function defaultButton({ children }) {
  return (
    <button className="button-enter">
      <p>{children}</p>
    </button>
  );
}
