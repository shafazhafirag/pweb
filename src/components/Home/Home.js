import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/avatar.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 10 }} className="heading">
                Halooo Semua!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                
                <strong className="main-name"> Shafa Zhafira Gunvany </strong>
              </h1>
              <h1 className="heading">
                <br/>NPM 51421411 
                <br/>Kelas 3IA28
              </h1>

              <div style={{ padding: 30, textAlign: "left" }}>
                <Type />
              </div>
              </Col>
          <Col
            md={5}
            style={{
              justifyContent: "center",paddingTop: "10px", paddingBottom: "50px",
            }}
            className="about-img circular-image"
          >
            <Tilt>
            <span className="up" role="img" aria-labelledby="up">                             
              <img
                src={homeLogo}
                alt="about"
                className="img-fluid rounded-circle"
                style={{ width: "400px", height: "500px" }} 
              />
                 </span>
            </Tilt>
          </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
export default Home;
