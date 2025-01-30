import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Slim engine for better performance

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Loads the slim version of tsparticles
  };

  const particlesOptions = {
    background: {
      color: {
        value: "transparent", // Transparent background
      },
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ad66ee",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.8,
          },
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticleBackground;
