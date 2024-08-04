import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max:4000, min:3000 },
            items: 5
        },
        desktop: { 
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min:464 },
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                     <div className="project-bx">
                        <h2>
                            Project
                        </h2>
                        <p>Below will be my projects</p>
                        <Carousel responsive={responsive} infinite={true} className="project-slider">
                            <div className = "item">
                                <img src = {''} alt = "Image" />
                                <h5>project 1 </h5>
                            </div>
                            <div className = "item">
                                <img src = {''} alt = "Image" />
                                <h5>project 2 </h5>
                            </div>
                            <div className = "item">
                                <img src = {''} alt = "Image" />
                                <h5>project 3 </h5>
                            </div>
                            <div className = "item">
                                <img src = {''} alt = "Image" />
                                <h5>project 4 </h5>
                            </div>
                            <div className = "item">
                                <img src = {''} alt = "Image" />
                                <h5>project 5 </h5>
                            </div>
                        </Carousel>
                     </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}