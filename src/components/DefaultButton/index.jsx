import "./styles.css";

export default function DefaultButton({ children }) {
  return (
    <button className="button-enter">
      <p>{children}</p>
    </button>
  );
}
