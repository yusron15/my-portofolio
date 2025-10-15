import React from "react";

export default function ProjectCard({ title, desc, techs }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <span className="tech-tag">Solidity</span>
      </div>
      <p>{desc}</p>
      <div className="project-tech">
        {techs.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}