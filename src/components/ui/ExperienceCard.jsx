import React from "react";

export default function ExperienceCard({ role, company, period, desc }) {
  return (
    <div className="exp-card">
      <h3>{role}</h3>
      <p className="exp-company">
        {company} | <span>{period}</span>
      </p>
      <p>{desc}</p>
    </div>
  );
}