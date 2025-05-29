import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    
    const projects = [
        {
          title: "Connect 4",
          description: "A Connect 4 game developed for the STM32F429i touchscreen board, featuring both single-player and AI modes where users can play against the computer.",
          imgUrl: projImg1,
        },
        {
            title: "RISC V Processor",
            description: "A custom 5-stage pipelined RISC-V processor designed to execute instructions efficiently, demonstrating key stages of instruction fetch, decode, execute, memory access, and write-back.",
            imgUrl: projImg2,
          },
          {
            title: "Product Management API",
            description: "A RESTful API management project built using Node.js, Express, and MongoDB, featuring full CRUD operations, optimized query performance, and robust error handling for seamless backend integration.",
            imgUrl: projImg3,
          },
      ];
    
      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>I developed a responsive weather application and a functional calculator, each demonstrating key aspects of front-end development. The weather app fetches real-time data from a public API, providing users with current weather conditions, forecasts, and additional details like temperature and humidity for locations worldwide. The calculator performs basic arithmetic operations with a user-friendly interface and real-time calculation display. Both projects emphasize clean UI design, efficient data handling, and effective state management.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">C++ Projects</Nav.Link>
                        </Nav.Item>
                        {/*<Nav.Item>
                          <Nav.Link eventKey="second">JavaScript Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Python Projects</Nav.Link>
                        </Nav.Item>*/}
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="first">
                          <p>Developed a range of hands-on projects across software engineering, embedded systems, processor design, and full-stack web development, demonstrating strong problem-solving skills and the ability to build efficient, user-focused solutions from low-level hardware to high-level APIs.</p>
                        </Tab.Pane>
                        {/*<Tab.Pane eventKey="second">
                          <p>Project description</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Project description</p>
                        </Tab.Pane>*/}
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
}