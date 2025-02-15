export default function SubTitle({ subtitle }) {
  return (
    <p
      style={{
        color: "#024284",
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      {subtitle}
    </p>
  );
}
