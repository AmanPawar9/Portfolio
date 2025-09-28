import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Research Project Images
import graphIV from "../../Assets/Projects/Graph-Based Synthesis of Instrumental Variables.png";
import spatioTemporal from "../../Assets/Projects/Causal Discovery in Spatio-Temporal Systems.png";
import neuralODE from "../../Assets/Projects/Causal Gene Regulatory Networks with Neural ODE.png";
import signatureKernels from "../../Assets/Projects/Graph-Informed Signature Kernels for Clinical Data.png";

// Robotics Project Images
import simToReal from "../../Assets/Projects/Sim-to-Real Transfer for Robotic Manipulation.png";
import multiAgent from "../../Assets/Projects/Decentralized Multi-Agent Path Planning.png";
import humanRobot from "../../Assets/Projects/Predictive Human-Robot Collaboration.png";
import sceneReconstruction from "../../Assets/Projects/Real-time 3D Scene Reconstruction.png";
import softGripper from "../../Assets/Projects/Computational Co-design of Soft Robotic Gripper.png";
import bioActuator from "../../Assets/Projects/Neural Bio-actuator Control System.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Research & Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my recent research projects in causality, dynamical systems, and robotics.
        </p>
        
        {/* Research Projects Section */}
        <h2 className="project-subheading" style={{ color: "#c770f0", marginTop: "40px", marginBottom: "20px" }}>
          <strong>Research Projects: Causality & Dynamical Systems</strong>
        </h2>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graphIV}
              isBlog={false}
              title="Graph-Based Synthesis of Instrumental Variables"
              description="Developed a novel Graph Attention Network (GAT) to learn synthetic instrumental variable embeddings for confounded treatment effect estimation. Created an innovative loss function to explicitly enforce instrument validity conditions (relevance and exogeneity), enabling unbiased treatment effect estimates."
              ghLink="https://github.com/AmanPawar9/synthetic-instrumental-variables"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spatioTemporal}
              isBlog={false}
              title="Causal Discovery in Spatio-Temporal Systems"
              description="Represented complex spatio-temporal systems as dynamic graphs using Spatio-Temporal GNN (ST-GNN) to learn node representations capturing local history and neighbor influence. Developed a constraint-based causal discovery algorithm operating in the learned ST-GNN embedding space."
              ghLink="https://github.com/AmanPawar9/causal-spatiotemporal-gnn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neuralODE}
              isBlog={false}
              title="Causal Gene Regulatory Networks with Neural ODEs"
              description="Implemented Neural Ordinary Differential Equations to model continuous-time gene expression evolution with biologically-plausible sparsity constraints. Interpreted the learned sparse Jacobian as a causal gene regulatory network, connecting ODEs with causal discovery in single-cell genomics."
              ghLink="https://github.com/AmanPawar9/causal-neural-ode-grn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signatureKernels}
              isBlog={false}
              title="Graph-Informed Signature Kernels for Clinical Data"
              description="Extended the Signature Kernel Conditional Independence (SKCI) test by incorporating biomedical knowledge graphs using GNN-based embeddings. Achieved more accurate and data-efficient causal discovery from complex, multi-variate clinical time-series data (MIMIC-III)."
              ghLink="https://github.com/AmanPawar9/graph-informed-skci"
            />
          </Col>
        </Row>

        {/* Robotics Projects Section */}
        <h2 className="project-subheading" style={{ color: "#c770f0", marginTop: "40px", marginBottom: "20px" }}>
          <strong>Robotics & AI Projects</strong>
        </h2>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simToReal}
              isBlog={false}
              title="Sim-to-Real Transfer for Robotic Manipulation"
              description="Developed a robust RL policy in NVIDIA Isaac Gym for contact-rich peg-in-hole tasks with massive parallelism. Engineered comprehensive domain randomization pipeline for physical parameters and achieved 85% success rate with sub-millimeter precision on physical UR5e robot arm."
              ghLink="https://github.com/AmanPawar9/sim-to-real-manipulation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multiAgent}
              isBlog={false}
              title="Decentralized Multi-Agent Path Planning"
              description="Designed decentralized navigation policy for autonomous ground vehicles using Graph Attention Networks (GATs) for cooperative collision avoidance. Demonstrated scalability to 100+ agents with 15% performance improvement over classical ORCA methods in dense traffic scenarios."
              ghLink="https://github.com/AmanPawar9/multi-agent-gnn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={humanRobot}
              isBlog={false}
              title="Predictive Human-Robot Collaboration"
              description="Developed Spatio-Temporal Graph Neural Networks (ST-GNNs) to forecast human motion trajectories in shared workspaces. Integrated with real-time motion planner on UR5e robot, enabling proactive path adaptation with 99.5% collision avoidance reliability."
              ghLink="https://github.com/AmanPawar9/safe-hri-gnn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sceneReconstruction}
              isBlog={false}
              title="Real-time 3D Scene Reconstruction"
              description="Built high-fidelity perception pipeline using Intel RealSense RGB-D camera for dense point cloud generation. Trained PointNet++ model for instance segmentation and 6-DoF pose estimation, achieving 90%+ success rate in cluttered bin-picking tasks."
              ghLink="https://github.com/AmanPawar9/3D-perception-grasping"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={softGripper}
              isBlog={false}
              title="Computational Co-design of Soft Robotic Gripper"
              description="Developed differentiable physics pipeline in DiffTaichi to co-optimize material properties and actuator morphology of pneumatic soft grippers. Fabricated optimized design using multi-material 3D printing and silicone casting for delicate object manipulation."
              ghLink="https://github.com/AmanPawar9/soft-gripper-design"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bioActuator}
              isBlog={false}
              title="Neural Bio-actuator Control System"
              description="Cultured myocyte cells on PDMS substrate to create bio-actuators, leveraging bioengineering knowledge for bio-hybrid systems. Designed closed-loop optical stimulation system achieving directed locomotion in fluidic environments with novel bio-robotic control paradigm."
              ghLink="https://github.com/AmanPawar9/bio-actuator-control"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
