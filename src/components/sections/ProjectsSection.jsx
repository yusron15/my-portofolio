import React from "react";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "DeFi Yield Optimizer",
    desc: "A decentralized protocol that automatically optimizes yield farming strategies across multiple DeFi platforms.",
    techs: ["Ethereum", "Web3.js", "Hardhat"],
  },
  {
    title: "NFT Marketplace",
    desc: "Fully decentralized NFT marketplace with advanced royalty mechanisms and cross-chain compatibility.",
    techs: ["Polygon", "IPFS", "React"],
  },
  {
    title: "DAO Governance Platform",
    desc: "Modular governance framework enabling token-weighted voting, proposal creation, and treasury management.",
    techs: ["OpenZeppelin", "The Graph", "TypeScript"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="skills-container">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}