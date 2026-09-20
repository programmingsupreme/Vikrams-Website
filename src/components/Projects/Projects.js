import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import getMeGas from "../../Assets/Projects/getmegas.svg";
import aiTwin from "../../Assets/Projects/aitwin.svg";
import neondo from "../../Assets/Projects/neondo.png";
import cs50filter from "../../Assets/Projects/cs50filter.svg";
import cs50tideman from "../../Assets/Projects/cs50tideman.svg";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neondo}
              isBlog={false}
              title="Neondo — Gamified To-Do Web App"
              description="A multi-user Django web app where each account manages its own private to-do list. AI quick-add turns a plain-English note like 'call mom tomorrow at 5pm' into a structured task with a due date and category, backed by a pluggable provider layer (OpenAI, Google Gemini, or a key-free local GGUF model via llama-cpp-python) that degrades gracefully when no key is configured. Completing tasks earns points spendable in a theme shop that swaps the site-wide stylesheet at runtime. Includes per-user API key management, Google OAuth sign-in, password reset, and a 128-test suite covering cross-user access isolation and all three AI providers."
              ghLink="https://github.com/programmingsupreme/neondo"
            />
          </Col>

        </Row>

        <h1 className="project-heading" style={{ paddingTop: "30px" }}>
          CS50 <strong className="purple">Coursework</strong>
        </h1>
        <p style={{ color: "white" }}>
          Low-level C problem sets from Harvard's CS50x, written without any
          external libraries.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cs50filter}
              isBlog={false}
              title="Filter — Image Filters in C"
              description="Command-line tool that loads a 24-bit uncompressed BMP into memory, applies a filter, and writes out a new file. Implements grayscale, sepia, horizontal reflection, and box blur by manipulating raw RGB pixel data directly — no image libraries — including the edge-case handling for blurring pixels along the borders. CS50x Problem Set 4 (less comfortable)."
              ghLink="https://github.com/programmingsupreme/filter-less"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cs50tideman}
              isBlog={false}
              title="Tideman Voting System"
              description="Implementation of the Tideman (ranked pairs) election method in C, which finds the Condorcet winner — the candidate who beats every other head-to-head — whenever one exists. Collects ranked ballots for up to 9 candidates, builds a pairwise preference matrix, sorts victory margins strongest to weakest, and locks pairs into a directed graph using recursive cycle detection so no lock creates a loop. CS50x Problem Set 3."
              ghLink="https://github.com/programmingsupreme/Tideman-Voting-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
