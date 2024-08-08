import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import clogo from "../assets/img/cpp_space_logo_adjusted.png";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
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
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                     <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>In my skills section, you'll find a strong foundation in programming languages like C++, Python, and JavaScript. With C++, I build efficient and high-performance applications, while Python allows me to work seamlessly in data analysis and automation. JavaScript powers my ability to create dynamic, interactive web experiences. Together, these skills enable me to tackle diverse challenges and deliver robust solutions across various platforms.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className = "item">
                                <img src = {meter1} alt = "Image" />
                                <h5>C++ </h5>
                            </div>
                            <div className = "item">
                                <img src = {meter1} alt = "Image" />
                                <h5>Python </h5>
                            </div>
                            <div className = "item">
                                <img src = {meter2} alt = "Image" />
                                <h5>Java </h5>
                            </div>
                            <div className = "item">
                                <img src = {meter3} alt = "Image" />
                                <h5>JavaScript</h5>
                            </div>
                        </Carousel>
                     </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}