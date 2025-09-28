import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Causal Discovery Researcher",
          "Machine Learning Engineer",
          "Computational Biologist", 
          "Graph Neural Networks Expert",
          "Robotics Researcher",
          "Neural ODEs Developer",
          "Spatio-Temporal Systems Analyst",
          "Bio-hybrid Robotics Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
