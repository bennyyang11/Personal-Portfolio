// ProjectCard.jsx
import { Col, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Row className="project-card align-items-center mb-5">
      <Col md={6}>
        <img src={imgUrl} alt={title} className="img-fluid rounded" />
      </Col>
      <Col md={6}>
        <h4>{title}</h4>
        {description.split('\n\n').map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </Col>
    </Row>
  );
};
