import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vikram-photo.jpg";
import Tilt from "react-parallax-tilt";

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
              I'm a Computer Science student at Kean University (B.S., Minor
              in Mathematical Sciences, graduating May 2027), with an A.S. in
              Computer Science from Middlesex College. I'm a member of the
              Upsilon Pi Epsilon, Tau Sigma, and Phi Kappa Phi honor
              societies.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple"> Python, Java, C, and JavaScript </b>
              </i>
              — and I enjoy working across both backend and frontend/mobile
              stacks.
              <br />
              <br />
              I recently shipped{" "}
              <b className="purple">Get Me Gas</b>, a full-stack React
              Native mobile app with a FastAPI/MongoDB backend deployed on
              Google Cloud Run, and built an{" "}
              <b className="purple">AI Digital Twin</b> — a conversational
              agent with a self-correcting guardrail pipeline that answers
              questions about my background.
              <br />
              <br />
              I'm actively looking for a{" "}
              <b className="purple"> software development internship or
              new-grad role </b>
              where I can keep building things that make a difference.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Vikram Nadathur"
                style={{
                  borderRadius: "50%",
                  maxWidth: "320px",
                  width: "100%",
                  border: "4px solid rgba(192, 132, 245, 0.6)",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
