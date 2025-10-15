import React from "react";
import CertificateCard from "../ui/CertificateCard";

const certificates = [
  {
    title: "The Complete AML & KYC Compliance Masterclass",
    org: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-c4c2dd00-b384-4460-be2a-f0114d820297/",
  },
  {
    title: "Ethereum and Solidity: The Complete Developer's Guide",
    org: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-894e0598-36c9-43fc-ada1-7b91211e7fa5/",
  },
  {
    title: "Katalon Expert Certification",
    org: "Katalon Academy",
    year: "2024",
    link: "https://academy.katalon.com/mcertificate/66a0efd464773",
  },
];

export default function CertificatesSection() {
  return (
    <section className="projects-section" id="certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="skills-container">
        {certificates.map((c, i) => (
          <CertificateCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}