import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Kunal Pathak </span>
            from <span className="purple"> UP, India.</span>
            <br />
            I am currently a student at Lovely Professional University
            <br />
            BTech in Computer Science Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What we do now echoes in eternity."{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>

      <Card.Body id="education-section">
        <blockquote className="blockquote mb-0">
          <h1>
            <strong className="purple">Certificates</strong>
          </h1>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Supervised Machine Learning: Regression and
              Classification
            </li>
            <li className="about-activity">
              <ImPointRight /> Machine Learning for Trading Specialization on
              Coursera
            </li>
            <li className="about-activity">
              <ImPointRight /> The Bits and Bytes of Computer Networking | by
              Google
            </li>
          </ul>
        </blockquote>
      </Card.Body>

      {/* Education Section with ID */}
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1>
            <strong className="purple">Education</strong>
          </h1>
          <ul>
            <li className="about-activity">
              <ImPointRight /> B.Tech in Computer Science Engineering - Lovely
              Professional University (2021 - 2026)
            </li>
            <li className="about-activity">
              <ImPointRight /> 12th Grade - CBSE Board (PCM + Physical Education)
            </li>
            <li className="about-activity">
              <ImPointRight /> 10th Grade - ICSE Board
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
