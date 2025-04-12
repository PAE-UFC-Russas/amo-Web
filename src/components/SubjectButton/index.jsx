import "./styles.css";

export default function SubjectButton({ subject, onClick }) {
  return (
    <div className="subject-button" onClick={onClick}>
      <div className="subject-button-content">
        <span>{subject.name}</span>
      </div>
    </div>
  );
}
