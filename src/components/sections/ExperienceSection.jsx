import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

const experiences = [
  {
    role: "Software Developer",
    company: "PT. XLSMART Telecom Sejahtera Tbk",
    period: "2022 - Present",
    desc: "Develop internal application projects automation & reporting using the Typescript and Angular for frontend and using PHP with Laravel for backend.",
  },
  {
    role: "Account Officer",
    company: "Dana Syariah Indonesia",
    period: "2020 - 2022",
    desc: "Establish good relationships with clients, explain financing products to clients,Collect applicant data files, Making summary based on checking account, Making analysis based on Risk Acceptance Criteria (RAC) standard",
  },
  {
    role: "Front End Developer",
    company: "PT. Tri Mayusa Data",
    period: "2019 - 2020",
    desc: "Develop Web and Mobile Application according to client request, Develop Machine Learning Image Classification, Instagram Crawler, Bug fixing and develop design UI.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="skills-section" id="experience">
      <h2 className="section-title">Working Experience</h2>
      <div className="skills-container">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
}