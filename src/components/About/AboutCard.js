import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Aman Pawar </span>
            from <span className="purple"> New Delhi, India.</span>
            <br/>
            <br /> I have compleated my bachelors from <span 
            className="purple">Delhi Technological University (formally Delhi College of Engineering)</span>.
            <br />
            <br />
            I am presently a Grad student at <span className="purple">Indian Institute of Science, (IISc) Bengaluru.</span>
            <br />
            <br />
            Additionally, I have experience as a researcher at <span className="purple">Indian Institute of Technology,
            (IIT) Delhi</span> as <span className="purple">Sr. Project Assistant</span>.
            <br />
            <br />
            Apart from the above, I am into cooking!
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
