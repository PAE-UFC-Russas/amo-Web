import React from "react";
import Image from "next/image";
import "./styles.css";

// Componente para renderizar uma única aula ou bloco de monitoria
const ScheduleItem = ({ title, location, days }) => (
  <div className="class-info">
    <p style={{ fontWeight: "bold" }}>{title}</p>
    <p>{location}</p>
    <div className="schedule-grid">
      {days.map((day) => (
        <p key={day.day}>{`${day.day}: ${day.time}`}</p>
      ))}
    </div>
  </div>
);

const ScheduleCard = ({ type, person }) => {
  return (
    <div className="schedule-card">
      <div className="card-person-header">
        <Image
          src={person.avatar}
          alt={`Foto de ${person.name}`}
          width={60}
          height={60}
          className="avatar"
        />
        <div className="person-info">
          <p className="name">{person.name}</p>
          <p className="role">{person.role}</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="card-content">
        {/* Renderização condicional baseada no tipo */}
        {type === "professor" && (
          <>
            <p className="title">Aulas:</p>
            {person.classes.map((classItem, index) => (
              <React.Fragment key={index}>
                <ScheduleItem
                  title={classItem.title}
                  location={classItem.location}
                  days={classItem.days}
                />
                {index < person.classes.length - 1 && (
                  <hr className="divider-light" />
                )}
              </React.Fragment>
            ))}
            <hr className="divider" />
            <div className="location-info">
              <p className="title">Sala do docente:</p>
              <p>{person.office}</p>
            </div>
          </>
        )}

        {type === "monitor" && (
          <>
            <div className="monitoring-info">
              <p className="title">
                Monitoria:{" "}
                <span style={{ fontWeight: "normal" }}>
                  {person.monitoringLocation}
                </span>
              </p>
              <div className="schedule-grid">
                {person.availability.map((slot) => (
                  <p key={slot.day}>{`${slot.day}: ${slot.time}`}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ScheduleCard;
