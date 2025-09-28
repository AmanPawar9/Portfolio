import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple"> Aman Pawar </span>
            from <span className="purple">New Delhi, India</span>.
            <br/>
            <br />
            I completed my <span className="purple"> B.Tech </span> from 
            <span className="purple"> Delhi Technological University (DTU)</span>, 
            where I developed a strong foundation's in engineering principles.
            <br />
            <br />
            Currently, I am pursuing my <span className="purple"> M.Tech in Bioengineering</span> at the 
            <span className="purple"> Indian Institute of Science (IISc), Bengaluru</span>, focusing on the intersection of 
            artificial intelligence and biological systems.
            <br />
            <br />
            I have extensive research experience as a <span className="purple">Senior Project Assistant</span> at 
            <span className="purple"> IIT Delhi</span>, where I worked on advanced machine learning projects and contributed to 
            cutting-edge research in computational biology and causal inference.
            <br />
            <br />
            My research expertise lies in <span className="purple">causal discovery methodologies</span>, particularly for 
            complex systems including <span className="purple">spatio-temporal networks</span>, <span className="purple">gene regulatory networks</span>, 
            and <span className="purple">clinical time-series analysis</span>. I specialize in developing novel algorithms that combine 
            <span className="purple">Graph Neural Networks</span>, <span className="purple">Neural ODEs</span>, and 
            <span className="purple">signature-based methods</span> for robust causal inference.
            <br />
            <br />
            Beyond theoretical research, I have significant experience in <span className="purple">robotics and AI applications</span>, 
            including <span className="purple">sim-to-real transfer learning</span>, <span className="purple">multi-agent systems</span>, 
            <span className="purple">human-robot collaboration</span>, and <span className="purple">bio-hybrid robotics</span>. 
            My interdisciplinary approach bridges machine learning theory with practical implementations in biology and robotics.
            <br />
            <br />
            I am proficient in <span className="purple">Python, PyTorch, TensorFlow, JAX</span>, and various specialized libraries 
            for graph neural networks and scientific computing. My goal is to develop AI systems that can understand and model 
            complex biological and physical phenomena to address real-world challenges.
            <br />
            <br />
            Apart from research, I enjoy cooking, exploring emerging technologies, and contributing to open-source projects 
            that can make a positive societal impact!
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aman Pawar</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
