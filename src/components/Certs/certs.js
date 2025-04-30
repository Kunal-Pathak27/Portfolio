import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertCards from "./certcard";
import Particle from "../Particle";
import Supervised from "../../Assets/Supervised Machine Learning Regression and Classification.png";
import RProgramming from "../../Assets/RProgramming.png";
import Data from "../../Assets/Data.png";
import cpp from "../../Assets/Programming in C++ A Hands-on Introduction.png";
import bits from "../../Assets/The Bits and Bytes of Computer Networking.png";
import excel from "../../Assets/Excel Skills for Data Analytics and Visualization.png";

function Certs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some certifications I have completed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={Supervised}
              isBlog={false}
              title="Supervised Machine Learning"
              description="Completed a course on Supervised Machine Learning: Regression and Classification, gaining hands-on experience in predictive modeling."
              ghLink="https://example.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertCards
              imgPath={RProgramming}
              isBlog={false}
              title="R Programming"
              description="Learned the fundamentals of R programming, focusing on data analysis and visualization techniques."
              ghLink="https://example.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertCards
              imgPath={Data}
              isBlog={false}
              title="Data analysis with tableau"
              description="Completed a specialization in Data Science, covering topics like data wrangling, machine learning, and statistical analysis."
              ghLink="https://example.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={cpp}
              isBlog={false}
              title="Programming in C++ A Hands-on Introduction"
              description="Learned the fundamentals of C++ programming, including object-oriented programming, data structures, and algorithms."
              ghLink="https://example.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={bits}
              isBlog={false}
              title="The Bits and Bytes of Computer Networking"
              description="Gained a comprehensive understanding of computer networking concepts, including protocols, IP addressing, and network troubleshooting."
              ghLink="https://example.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={excel}
              isBlog={false}
              title="Excel Skills for Data Analytics and Visualization"
              description="Mastered advanced Excel techniques for data analysis, visualization, and automation using formulas, pivot tables, and macros."
              ghLink="https://example.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certs;