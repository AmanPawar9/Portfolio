import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Aman Pawar</span>
            from <span className="purple">New Delhi, India</span>.
            <br/>
            <br />
            I completed my Bachelor's degree in <span className="purple">Bioengineering and Biotechnology</span> from 
            <span className="purple"> Delhi Technological University (DTU)</span> 
            and am currently pursuing my Master's at the <span className="purple">Indian Institute of Science (IISc), Bengaluru</span>.
            <br />
            <br />
            I have research experience as a <span className="purple">Senior Project Assistant</span> at the 
            <span className="purple"> Indian Institute of Technology (IIT) Delhi</span>, where I worked on cutting-edge projects 
            in machine learning and computational biology.
            <br />
            <br />
            My research focuses on developing novel methods for <span className="purple">causal discovery in complex systems</span>, 
            including spatio-temporal networks, gene regulatory networks, and clinical time-series data. I am particularly 
            interested in bridging theoretical advances in causality with practical applications in biology and robotics.
            <br />
            <br />
            I also work on <span className="purple">robotics projects</span> involving sim-to-real transfer, multi-agent path planning, 
            and bio-hybrid robotic systems. My interdisciplinary background allows me to tackle challenges at the intersection 
            of AI, biology, and robotics.
            <br />
            <br />
            Apart from research, I enjoy cooking and exploring new technologies that can make a positive impact on society!
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
