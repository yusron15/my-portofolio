import React from "react";

export default function CertificateCard({ title, org, year, link }) {
  return (
    <div className="cert-card">
      <h3>{title}</h3>
      <p>{org}</p>
      <div className="cert-footer" style={{ marginTop: "10px" }}>
        <span className="tech-tag">{year}</span>
      </div>
      <div style={{ marginTop: "10px" }}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="credential-link"
        >
          View Credential <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}