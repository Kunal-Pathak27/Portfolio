import React from "react";
import Card from "react-bootstrap/Card";

function CertCards({ imgPath, isBlog, title, description, ghLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {ghLink && (
          <a href={ghLink} target="_blank" rel="noopener noreferrer">
            {/* Remove the GitHub logo here */}
            View Certificate
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertCards;
