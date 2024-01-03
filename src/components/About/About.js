import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Edu from "./Edu";
import java from "../../Assets/java.jpg";
import figma from "../../Assets/figma.jpg";
import shope from "../../Assets/shope.jpg";
import kotlin from "../../Assets/kotlin.jpg";
import learn from "../../Assets/learn.jpg";
import tgn from "../../Assets/tgn.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        
        <h1 className="project-heading">
        <strong className="purple">Pendidikan </strong>
        </h1>

        <Edu />

        <h1 className="project-heading" style={{ textAlign: 'center' }}>
            <strong className="purple">Pengalaman </strong>
        </h1>
        <Container style={{ textAlign: 'left' }}>  
        <div>        
                <p><strong>UKM Fajrul Islam</strong></p>
                <p>2022 - sekarang</p>
                <p>Bertanggung jawab dalam beberapa program kerja yang
dibentuk bersama. Berpengalaman dalam mengelolah uang dalam sebuah acara. Menyelesaikan jobdesk tepat waktu</p>
              </div> 
              <br/>
        <div>        
                <p><strong>SHAR3</strong></p>
                <p>2021 - sekarang</p>
                <p>Aktif dalam kegiatan Naungan alumni Rohis SMAN 3
Kabupaten Tangerang. Mengelolah keuangan organisasi. Berpengalaman menjadi wakil divisi. Memimpin Divisi dalam beberapa acara</p>
</div>
            <br/>             
            <div>        
                <p><strong>Pramuka</strong></p>
                <p>2018- 2020</p>
                <p>Mengikuti beberapa pelantikan. Menjadi panitia pada acara pramuka sekolah</p>
              </div>
              <br/>
              <div>        
                <p><strong>Rohis</strong></p>
                <p>2018- 2021</p>
                <p>Menjadi ketua divisi pada acara besar. Mengikuti beberapa pelantikan. Berpartisipasi dalam kegiatan rohis</p>
              </div>
              <br/>
          </Container>

        <h1 className="project-heading" style={{ textAlign: 'center' }}>
            <strong className="purple">Project </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
  <a href="https://colab.research.google.com/drive/1BJsRN3-jVZm724Y0i01yJCTksNnznPVK" target="_blank" rel="noopener noreferrer">
    <img
      src={tgn}
      alt="about"
      style={{ width: "500px", height: "400px" }} 
    />
    </a>
    <h1 style={{ fontSize: "20px", paddingBottom: "20px", color: "white" }}>
      <strong>Machine Learning</strong>
      <br/>
      Mendeteksi gunting batu kertas pada tangan manusia menggunakan Python   
    </h1>  
</Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={java}
                alt="about"
                style={{ width: "500px", height: "400px" }} 
              />
              <h1 style={{ fontSize: "20px", paddingBottom: "20px" }}>
        <strong>HTML With PHP</strong>
        <br/>
        web sebuah toko untuk menambah daftar toko dengan database mysql
        </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://sites.google.com/view/tugasprojectelearning" target="_blank" rel="noopener noreferrer">
      <img
                src={learn}
                alt="about"
                style={{ width: "500px", height: "400px" }} 
              />
              </a>
       <h1 style={{ fontSize: "20px", paddingBottom: "20px" }}>
        <strong>E-learning</strong>
        <br/>
        project kelompok menggunakan google site
         </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://kelompok1kece28.wixsite.com/delta-e" target="_blank" rel="noopener noreferrer">
    <img
                src={shope}
                alt="about"               
                style={{ width: "500px", height: "400px" }} 
              /> </a>
              <h1 style={{ fontSize: "20px", paddingBottom: "20px" }}>
         <strong>E-commerce </strong> 
        <br/>
        Project kelompok menggunakan wixsite
         </h1>
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.figma.com/proto/gNI2RuPJzmpxGmm90cnEKd/Podio_Shafa?node-id=26-3194&starting-point-node-id=26%3A3194&mode=design&t=3Msgx4Mf17CYFET0-1" target="_blank" rel="noopener noreferrer">
    <img
                src={figma}
                alt="about"
                style={{ width: "500px", height: "400px" }} 
              /></a>
              <h1 style={{ fontSize: "20px", paddingBottom: "20px" }}>
        <strong>figma</strong>
        <br/>
        Redesign prototype dari sebuah aplikasi PORD
        </h1>
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={kotlin}
                alt="about"
                style={{ width: "500px", height: "400px" }} 
              />
         <h1 style={{ fontSize: "20px", paddingBottom: "20px" }}>
        <strong>App Android</strong>
        <br/>
        List konten menggunaka kotlin dengan AndroidStudio</h1>
      </Col>

      
      
    </Row>

      </Container>
    </Container>
  );
}

export default About;
