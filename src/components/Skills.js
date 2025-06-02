import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <h2 className="text-center mb-5 text-white">Skills</h2>
        <Row className="skill-row">
          {/* Technical Skills Box */}
          <Col md={4}>
            <div className="skill-bx">
              <h3 className="text-white">Technical Skills</h3>
              <ul className="skill-list">
                <li>C++</li>
                <li>C</li>
                <li>Java</li>
                <li>Python</li>
                <li>Bash Shell/Scripting</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>SQL</li>
              </ul>
            </div>
          </Col>

          {/* Tools Box */}
          <Col md={4}>
            <div className="skill-bx">
              <h3 className="text-white">Tools</h3>
              <ul className="skill-list">
                <li>Git</li>
                <li>Linux</li>
                <li>Docker</li>
                <li>AWS (DynamoDB, MongoDB)</li>
                <li>VMware</li>
                <li>Jira</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
            </div>
          </Col>

          {/* Soft Skills Box */}
          <Col md={4}>
            <div className="skill-bx">
              <h3 className="text-white">Soft Skills</h3>
              <ul className="skill-list">
                <li>Team Collaboration</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
                <li>Time Management</li>
                <li>Communication</li>
                <li>Critical Thinking</li>
                <li>Leadership</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .skills {
          padding-bottom: 60px;
        }

        .skill-row {
          margin-top: 40px; /* pushes boxes down */
        }

        .skill-list {
          list-style-type: none;
          padding: 0;
          margin-top: 20px;
          font-size: 1.25rem;
          font-weight: 500;
          color: white;
        }

        .skill-list li {
          margin-bottom: 12px;
        }

        .skill-bx {
          background: #151515;
          border-radius: 64px;
          text-align: center;
          padding: 60px 50px;
          margin-bottom: 30px;
        }
      `}</style>
    </section>
  );
};
