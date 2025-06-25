export default function StaticButton({ children }) {
  return (
    <button type="button" disabled style={{ opacity: 0.7 }}>
      {children}
    </button>
  );
}
