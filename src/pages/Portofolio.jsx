import React, { useEffect } from "react";
import "../../src/App.css";
import ParticlesEffect from "../components/effects/ParticlesEffect";
import Topbar from "../components/layout/Topbar";
import HeroSection from "../components/layout/HeroSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import CertificatesSection from "../components/sections/CertificatesSection";
import Footer from "../components/layout/Footer";

export default function Portfolio() {
  useEffect(() => {
  // ✅ Smooth scroll — hanya untuk link internal (href yang dimulai dengan #)
  const anchors = document.querySelectorAll('a[href^="#"]');

  const handleAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return; // Pastikan bukan link eksternal

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  anchors.forEach(anchor => anchor.addEventListener("click", handleAnchorClick));

  // ✅ Scroll animations — untuk card/section yang muncul di layar
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .exp-card, .cert-card"
  );

  animatedElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // ✅ Cleanup event & observer saat komponen unmount
  return () => {
    anchors.forEach(anchor => anchor.removeEventListener("click", handleAnchorClick));
    animatedElements.forEach(el => observer.unobserve(el));
  };
}, []);
  return (
    <div className="app">
      <div className="grid-bg"></div>
      <ParticlesEffect />

      <Topbar />
      <HeroSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <ExperienceSection />
      <CertificatesSection />
      <Footer />
    </div>
  );
}
