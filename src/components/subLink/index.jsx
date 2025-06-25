"use client";
export default function SubLink({ subtitle, onClick }) {
  return (
    <p
      style={{
        color: "#024284",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {subtitle}
    </p>
  );
}
