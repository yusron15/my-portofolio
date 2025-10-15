import React from "react";

export default function Topbar() {
  return (
    <nav className="topbar">
      <div className="logo">Yusron Fadillah</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        {/* <a href="#projects">Projects</a> */}
        <a href="#experience">Experience</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}