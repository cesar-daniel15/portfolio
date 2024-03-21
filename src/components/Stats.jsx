import React from 'react'

/*Styles*/
import '../styles/components/stats.sass'

const Stats = () => {

    const technologies = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 25 },
    { name: "React", percentage: 10 },
    { name: "PHP", percentage: 50 },
    { name: "Mysql", percentage: 45 },
  ];

  return (
    <section id="information">
      <div className="stats-container">
      {technologies.map((tech) => (
        <div key={tech.name} className="tech-stat">
            <p>{tech.name}</p>
            <div className="progress-bar">
            <div
                className="progress-bar-fill"
                style={{ width: `${tech.percentage}%` }}
            ></div>
            </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
