import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 id="skills">skills</h2>
      <div className="skills-flex ">
        <div className="skill-item p-4 text-black hover:bg-gradient-to-r hover:from-indigo-100 hover:via-blue-100 hover:to-red-50">
          Machine Learning
        </div>
        <div className="skill-item p-4 text-black hover:bg-gradient-to-r hover:from-indigo-100 hover:via-blue-100 hover:to-red-50">
          UI/UX & Full Stack
        </div>
        <div className="skill-item p-4 text-black hover:bg-gradient-to-r hover:from-indigo-100 hover:via-blue-100 hover:to-red-50">
          Data Analysis/Web-scraping
        </div>
        <div className="skill-item p-4 text-black hover:bg-gradient-to-r hover:from-indigo-100 hover:via-blue-100 hover:to-red-50">
          Pizza-making
        </div>
      </div>
    </div>
  );
};

export default Skills;
