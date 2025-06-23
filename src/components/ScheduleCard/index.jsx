import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

// Componente para renderizar uma única aula ou bloco de monitoria
const ScheduleItem = ({ title, location, days }) => (
  <div className={styles.classInfo}>
    <p style={{ fontWeight: "bold" }}>{title}</p>
    <p>{location}</p>
    <div className={styles.scheduleGrid}>
      {days.map((day) => (
        <p key={day.day}>{`${day.day}: ${day.time}`}</p>
      ))}
    </div>
  </div>
);

const ScheduleCard = ({ type, person }) => {
  return (
    <div className={styles.scheduleCard}>
      <div className={styles.cardPersonHeader}>
        <Image
          src={person.avatar}
          alt={`Foto de ${person.name}`}
          width={60}
          height={60}
          className={styles.avatar}
        />
        <div className={styles.personInfo}>
          <p className={styles.name}>{person.name}</p>
          <p className={styles.role}>{person.role}</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.cardContent}>
        {/* Renderização condicional baseada no tipo */}
        {type === "professor" && (
          <>
            <p className={styles.title}>Aulas:</p>
            {person.classes.map((classItem, index) => (
              <React.Fragment key={index}>
                <ScheduleItem
                  title={classItem.title}
                  location={classItem.location}
                  days={classItem.days}
                />
                {index < person.classes.length - 1 && (
                  <hr className={styles.dividerLight} />
                )}
              </React.Fragment>
            ))}
            <hr className={styles.divider} />
            <div className={styles.locationInfo}>
              <p className={styles.title}>Sala do docente:</p>
              <p>{person.office}</p>
            </div>
          </>
        )}

        {type === "monitor" && (
          <>
            <div className={styles.monitoringInfo}>
              <p className={styles.title}>
                Monitoria:{" "}
                <span style={{ fontWeight: "normal" }}>
                  {person.monitoringLocation}
                </span>
              </p>
              <div className={styles.scheduleGrid}>
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
