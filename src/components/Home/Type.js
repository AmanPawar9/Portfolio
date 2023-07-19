import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Research",
          "Machine Learning",
          "Computational Biology",
          "Reinforcement Learning",
          "Deep Learning",
          "Physics informed ML",
          "Graph Neural Networks",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
