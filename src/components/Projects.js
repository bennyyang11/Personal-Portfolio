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
      title: "Sorting Visualizer",
      description: "This project is an interactive sorting visualizer that demonstrates how various sorting algorithms work in real-time. Users can choose from algorithms like Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, and Selection Sort to observe how data is sorted step-by-step. It also allows users to customize the number of items being sorted and the speed of the animation, providing a hands-on, visual learning experience for understanding algorithm efficiency and behavior.\n\nThe visualizer was built using JavaScript and React, utilizing state and animation hooks to control bar height, algorithm logic, and playback controls. This project helped strengthen my understanding of sorting algorithms, algorithmic complexity, and front-end UI interaction using component-based design.",
      imgUrl: projImg1, // Replace with actual image reference
      category: "webots"
    },    
    {
      title: "RISC V Processor",
      description: "This project implements a 5-stage pipelined RISC-V processor that can efficiently execute a set of instructions using instruction fetch, decode, execute, memory access, and write-back stages. It simulates how modern CPUs handle multiple instructions at once, making it useful for understanding and demonstrating performance optimization techniques in computer architecture.\n\nThe processor was built from scratch using Verilog and tested with a custom instruction set. It includes hazard detection, data forwarding, and control logic to manage pipeline stalls and maintain correct execution order. This hands-on implementation deepened my understanding of CPU design, timing constraints, and hardware debugging.",
      imgUrl: projImg2,
      category: "visualizer",
    },    
    {
      title: "Product Management API",
      description: "This API serves as a backend system for managing product data in applications such as e-commerce platforms or inventory tracking systems. It allows clients to create, read, update, and delete (CRUD) product entries efficiently, making it an essential tool for any service that needs to handle dynamic product information.\n\nBuilt with Node.js and Express, the API uses MongoDB as the database to store and query product data. It includes endpoints for managing product attributes such as name, category, price, stock quantity, and more. The backend features optimized query performance, robust error handling, and a clean RESTful architecture to ensure scalability and seamless integration with frontend or third-party systems.",
      imgUrl: projImg3,
      category: "crud",
    }    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">CRUD Application</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Sorting Visualizer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">RISC V Processor</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        {projects
                          .filter(project => project.category === "crud")
                          .map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        {projects
                          .filter(project => project.category === "webots")
                          .map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        {projects
                          .filter(project => project.category === "visualizer")
                          .map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
