import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Edu from "./Edu";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/foto.jpg"; // isi dengan fotomu
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          > 
          
           
            <Aboutcard />
          </Col>
          <Col // buat judul pada 2 section
            md={5}
            style={{ 
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              overflow: "hidden", 
              paddingTop: "30px", 
              paddingBottom: "30px" }}
            
            className="about-img circular-image"
          >
            <Tilt>
            <img src={laptopImg} alt="about" className="img-fluid rounded-circle" />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
        
        </h1>

        <Techstack />

      </Container>
    </Container>
  );
}

export default About;
