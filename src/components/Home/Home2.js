import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ss.png";
import Skill from "./Skill";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>       
        <Row>
        <Col md={7} className="home-header">
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple"> Kemampuan </strong>
            </h1>            
          <Skill />       
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "right", 
            }}
          >
          <Tilt>
            <img
              src={myImg}
              alt="about"
              style={{ width: "500px", height: "400px" }} 
            />
          </Tilt>          
        </Col>
        </Row>
        <Row>
        
          <Col md={12} className="home-about-social">
            <h1>Follow Me</h1>
            <p>
              Boleh banget <span className="purple">difollow </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shafazhafirag"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/shafa_zhafira_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linktr.ee/shafazhafirag"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shafazhafirag"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>    
                    <Col xs={2} md={2} className="tech-icons">
                <a href="mailto:shafazhafira.g@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button>
                    Kirim Email
                  </Button>
                </a>
              </Col>
                    <Col xs={2} md={2} className="tech-icons">
                <a href="mailto:shafazhafira.g@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button>
                    Kirim Email
                  </Button>
                </a>
              </Col>
      </Container>      
    </Container>
  );
}
export default Home2;
