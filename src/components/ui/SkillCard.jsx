import React from "react";

export default function SkillCard({ icon, title, text }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}