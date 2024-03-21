import React, { useState, useEffect } from 'react';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiPhp,
  DiMysql,
  DiReact,
  DiSass,
  DiBootstrap, 
  DiLaravel,
  DiGit,
  DiDatabase,
  DiPython 
} from "react-icons/di";

import "../styles/components/technologies.sass";

const initialTechnologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "HTML5 is the latest version of HTML, the markup language that structures content on the web." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "CSS3 is the latest version of CSS, the stylesheet language used for describing the look and formatting of a document written in HTML." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "JavaScript is a programming language that enables interactive web pages. It is an essential part of web development." },
  { id: "php", name: "PHP", icon: <DiPhp />, description: "PHP is a server-side scripting language that is used to develop dynamic web pages and applications." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "MySQL is an open-source relational database management system that stores and retrieves data for your web applications." },
  { id: "react", name: "React", icon: <DiReact />, description: "React is a JavaScript library for building user interfaces. It's commonly used for creating single-page applications." },
];

const additionalTechnologies = [
  { id: "sass", name: "Sass", icon: <DiSass  />, description: "Sass is a popular CSS preprocessor that extends the capabilities of CSS with features like variables, nesting, and mixins." },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, description: "Bootstrap is a responsive CSS framework for web development."},
  { id: "laravel", name: "Laravel", icon: <DiLaravel  />, description: "Laravel is a PHP web framework for building modern, robust web applications."},
  { id: "git", name: "Git", icon: <DiGit />, description: "Git is a distributed version control system essential for collaborative software development."},
  { id: "database", name: "Database", icon: <DiDatabase  />, description: "Database refers to structured data storage crucial for web application data management."},
  { id: "python", name: "Python", icon: <DiPython  />, description: "Python is a versatile, high-level programming language with clear syntax."},
];

const Technologies = () => {
  const [currentTechnologies, setCurrentTechnologies] = useState(initialTechnologies);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechnologies((prevTechnologies) => 
        prevTechnologies === initialTechnologies ? additionalTechnologies : initialTechnologies
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {currentTechnologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
