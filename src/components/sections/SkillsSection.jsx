import React from "react";
import SkillCard from "../ui/SkillCard";

const skills = [
  {
    icon: "fa-code",
    title: "Software Engineering",
    text: "Full-stack development with modern frameworks. Building scalable, maintainable applications with clean architecture principles.",
  },
  {
    icon: "fa-lock",
    title: "Smart Contracts",
    text: "Developing secure, audited smart contracts in Solidity. Just dived in DeFi protocols, NFTs, DAOs, and token standards.",
  },
  {
    icon: "fa-network-wired",
    title: "Blockchain Architecture",
    text: "Designing and implementing blockchain solutions. Just dived with Ethereum, Polygon, and Layer 2 scaling solutions.",
  },
];

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Core Expertise</h2>
      <div className="skills-container">
        {skills.map((s, i) => (
          <SkillCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}