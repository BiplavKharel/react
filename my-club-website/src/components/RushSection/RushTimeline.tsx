import React from "react";
import styles from "./RushTimeline.module.css";


interface RushEvent {
  date: string;
  title: string;
  description: string;
  //location: string;
}

const events: RushEvent[] = [
  {
    date: "Aug 25",
    title: "North Festifall",
    description: "Session 1 will be held from 5-8 pm",
  },
  {
    date: "Aug 27",
    title: "Central Festifall",
    description: "Session 1: 2:00-3:30pm \n Session 2: 4:30-6:00pm \n Session 3: 7:00-8:30pm (Table E010)",
  },
  {
    date: "Aug 28 ~ Sept 4",
    title: "Events",
    description: "Info Session 1: Room TBD 6-8pm \n Info Session 2: Room TBD 6-8pm \n Lemonade Stand: Room TBD 6-8pm \n DEI Panel: Room TBD 6-8pm",
  },
  {
    date: "Sept 5",
    title: "Applications",
    description: "Applications will be due September 5th, 11:59 pm! (Link here)",
  },
];

const RushTimeline: React.FC = () => {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.heading}>Rush Timeline</h2>
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.content}>
              <h3>{event.title} - {event.date}</h3>
              {event.description.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
            ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RushTimeline;
