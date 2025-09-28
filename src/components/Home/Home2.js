import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a graduate student at the <span className="purple">Indian Institute of Science (IISc), Bengaluru</span>,
              working at the intersection of <span className="purple">Artificial Intelligence and Computational Biology</span>.
              <br />
              <br />
              My research focuses on <span className="purple">Causality, Dynamical Systems,</span> and 
              <span className="purple"> Graph Neural Networks</span>, with applications in biological and robotic systems.
              <br />
              <br />I am proficient in machine learning and deep learning frameworks including
              <i>
                <b className="purple"> TensorFlow, PyTorch, and JAX</b>
              </i>
              , with extensive experience in both theoretical research and practical implementations.
              <br />
              <br />
              My research interests span &nbsp;
              <i>
                <b className="purple">Causal Discovery in Spatio-Temporal Systems</b>, 
                <b className="purple"> Neural ODEs for Gene Regulatory Networks</b>, and{" "}
                <b className="purple">
                  Physics-Informed Deep Learning and Reinforcement Learning
                </b>
              </i>
              <br />
              <br />
              I also have significant experience in <span className="purple">robotics</span>, including 
              <b className="purple"> sim-to-real transfer</b>, <b className="purple">multi-agent systems</b>, and 
              <b className="purple"> bio-hybrid robotics</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AmanPawar9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/amanpawar__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amanpawar1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pawaraman_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
