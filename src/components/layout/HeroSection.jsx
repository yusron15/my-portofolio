import React from "react";
import ProfileImage from "../../assets/profile-photo.jpeg";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Building the Future with Blockchain & Smart Contracts</h1>
          <p>
            I'm a passionate Software Engineer that just dived in decentralized
            applications, blockchain infrastructure, and secure smart contract
            development.
          </p>

          <div className="tagline">
            <div className="tag">Web Developer</div>
            <div className="tag">Smart Contract</div>
            <div className="tag">Web3</div>
          </div>

          <div className="social-links">
            {/* <a href="#"><i className="fab fa-github"></i></a> */}
            <a target="_blank" href="https://www.linkedin.com/in/yusronf/"><i className="fab fa-linkedin-in"></i></a>
            <a target="_blank" href="https://www.instagram.com/yusron.f/"><i className="fab fa-instagram"></i></a>
            {/* <a href="#"><i className="fab fa-ethereum"></i></a> */}
          </div>
        </div>

        <div className="hero-image">
          <img src={ProfileImage} alt="Yusron Fadillah Profile" />
        </div>
      </div>
    </section>
  );
}