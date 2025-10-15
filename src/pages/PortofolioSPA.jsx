import React, { useEffect } from "react";
import ProfileImage from "../assets/profile-photo.jpeg";
import "../../src/App.css"; 

export default function Portfolio() {
  useEffect(() => {
    // Floating particles
    const particlesContainer = document.getElementById("particles");
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      const size = Math.random() * 20 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particlesContainer.appendChild(particle);
    }

    // Smooth scroll
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".skill-card, .project-card, .exp-card, .cert-card").forEach((card) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });

    return () => {
      particlesContainer.innerHTML = "";
    };
  }, []);

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="grid-bg"></div>
      <div className="particles" id="particles"></div>

      {/* Glassmorphism Topbar */}
      <nav className="topbar">
        <div className="logo">Yusron Fadillah</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
        {/* <button className="cta-button">Hire Me</button> */}
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Building the Future with Blockchain & Smart Contracts</h1>
            <p>
              I'm a passionate Software Engineer specializing in decentralized
              applications, blockchain infrastructure, and secure smart contract
              development.
            </p>

            <div className="tagline">
              <div className="tag">Web Developer</div>
              <div className="tag">Smart Contract</div>
              <div className="tag">Web3</div>
            </div>

            <div className="social-links">
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-ethereum"></i></a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="hero-image">
            <img
              src={ProfileImage}
              alt="Yusron Fadillah Profile"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <h2 className="section-title">Core Expertise</h2>
        <div className="skills-container">
          {[
            {
              icon: "fa-code",
              title: "Software Engineering",
              text: "Full-stack development with modern frameworks. Building scalable, maintainable applications with clean architecture principles.",
            },
            {
              icon: "fa-lock",
              title: "Smart Contracts",
              text: "Developing secure, audited smart contracts in Solidity. Expertise in DeFi protocols, NFTs, DAOs, and token standards.",
            },
            {
              icon: "fa-network-wired",
              title: "Blockchain Architecture",
              text: "Designing and implementing blockchain solutions. Experience with Ethereum, Polygon, and Layer 2 scaling solutions.",
            },
            {
              icon: "fa-shield-alt",
              title: "Security & Auditing",
              text: "Conducting thorough security audits and vulnerability assessments for smart contracts and blockchain applications.",
            },
          ].map((skill, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-icon">
                <i className={`fas ${skill.icon}`}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="skills-container">
          {[
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
          ].map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-header">
                <h3 className="project-title">{p.title}</h3>
                <span className="tech-tag">Solidity</span>
              </div>
              <p>{p.desc}</p>
              <div className="project-tech">
                {p.techs.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Working Experience Section */}
      <section className="skills-section" id="experience">
        <h2 className="section-title">Working Experience</h2>
        <div className="skills-container">
          {[
            {
              role: "Blockchain Engineer",
              company: "CryptoLabs Inc.",
              period: "2022 - Present",
              desc: "Lead developer for smart contract and dApp infrastructure, focusing on DeFi automation and yield optimization.",
            },
            {
              role: "Full Stack Developer",
              company: "Techverse Solutions",
              period: "2020 - 2022",
              desc: "Developed scalable SaaS applications with React, Node.js, and PostgreSQL. Integrated Web3 wallet authentication.",
            },
            {
              role: "Software Intern",
              company: "OpenSource DAO",
              period: "2019 - 2020",
              desc: "Contributed to open-source blockchain projects and wrote community-driven smart contract documentation.",
            },
          ].map((exp, i) => (
            <div className="exp-card" key={i}>
              <h3>{exp.role}</h3>
              <p className="exp-company">{exp.company} | <span>{exp.period}</span></p>
              <p>{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Section */}
        <section className="projects-section" id="certificates">
        <h2 className="section-title">Certificates</h2>
        <div className="skills-container">
          {[
            {
              title: "Certified Blockchain Developer",
              org: "Blockchain Council",
              year: "2023",
              link: "https://www.blockchain-council.org/certificates/12345", // contoh link
            },
            {
              title: "Ethereum Smart Contract Security",
              org: "Consensys Academy",
              year: "2022",
              link: "https://consensys.net/academy/certificate/abcdef",
            },
            {
              title: "Full Stack Web Development",
              org: "Coursera | HKUST",
              year: "2021",
              link: "https://coursera.org/verify/XYZ123",
            },
          ].map((cert, i) => (
            <div className="cert-card" key={i}>
              <h3>{cert.title}</h3>
              <p>{cert.org}</p>
              <div className="cert-footer" style={{marginTop:"10px"}}>
                <span className="tech-tag">{cert.year}</span>
              </div>
              <div style={{marginTop:"10px"}}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-link"
                >
                  View Credential <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>Let's build the decentralized future together</p>
        <p>yusronfrost66@gmail.com | +62 (8787) 3493-309</p>
        <p style={{ marginTop: "20px" }}>© 2025 Yusron Fadillah. All rights reserved.</p>
      </footer>
    </div>
  );
}