import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import getMeGas from "../../Assets/Projects/getmegas.svg";
import aiTwin from "../../Assets/Projects/aitwin.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getMeGas}
              isBlog={false}
              title="Get Me Gas"
              description="Full-stack iOS/Android app (React Native/Expo) that finds the cheapest nearby gas by fuel grade using live geolocation and the Google Places API. Async FastAPI + MongoDB backend, migrated to Google Cloud Run and MongoDB Atlas free tier to cut hosting costs from $46/mo to $0/mo with zero downtime. Includes freemium in-app purchases and an automated API test suite."
              ghLink="https://github.com/programmingsupreme/Get-Me-Gas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiTwin}
              isBlog={false}
              title="AI Digital Twin — Conversational Career Agent"
              description="A chatbot that answers prospective-employer questions about my background. Uses a two-model guardrail pipeline (a second LLM, xAI Grok, reviews every response for professionalism and triggers a self-correcting regeneration loop), OpenAI function calling to capture visitor contact info and log unanswerable questions with real-time Pushover notifications, and a structured system prompt to reduce hallucinated claims."
              ghLink="https://github.com/programmingsupreme/Digital-Twin-AI-Assistant"
              demoLink="https://viknad-vikrams-digital-twin.hf.space"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
