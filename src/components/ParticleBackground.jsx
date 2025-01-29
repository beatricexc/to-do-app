import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Particles with SSR disabled
const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

const ParticleBackground = () => {
  const [mounted, setMounted] = useState(false);

  // Use effect to set mounted state to true only after the client is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Do not render particles until the component is mounted on the client
  if (!mounted) {
    return null;
  }

  const particlesOptions = {
    background: {
      color: {
        value: "transparent", // Transparent background
      },
    },
    particles: {
      number: {
        value: 100, // Number of particles
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      size: {
        value: 5, // Particle size
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
      },
    },
  };
  console.log("Particles options: ", particlesOptions);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure particles are behind content
      }}
    >
      <Particles id="tsparticles" options={particlesOptions} />
    </div>
  );
};

export default ParticleBackground;
