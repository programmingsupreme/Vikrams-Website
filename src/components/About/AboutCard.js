import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Vikram Nadathur</span>{" "}
            from <span className="purple">Edison, New Jersey</span>.
            <br />
            I'm currently pursuing a{" "}
            <span className="purple">
              B.S. in Computer Science (Minor: Mathematical Sciences)
            </span>{" "}
            at <span className="purple">Kean University</span>, graduating
            May 2027.
            <br />
            I hold an <span className="purple">A.S. in Computer Science</span>{" "}
            from <span className="purple">Middlesex College</span>, where I
            graduated with High Honors (GPA 3.57).
            <br />
            <br />
            Outside of coursework, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building full-stack and mobile apps end-to-end
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with AI/ML and agentic systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new frameworks and tools
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aiming to advance myself technologically and grow in the
            process."{" "}
          </p>
          <footer className="blockquote-footer">Vikram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
