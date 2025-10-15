import React, { useEffect } from "react";

export default function ParticlesEffect() {
  useEffect(() => {
    const container = document.getElementById("particles");
    if (!container) return;

    const count = 20;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.classList.add("particle");
      const size = Math.random() * 20 + 5;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 15}s`;
      container.appendChild(p);
    }

    return () => (container.innerHTML = "");
  }, []);

  return <div className="particles" id="particles"></div>;
}