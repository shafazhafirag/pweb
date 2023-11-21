import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>Nama saya <span className="purple">Shafa Zhafira Gunavany </span>
            <br/>Kuliah di jakarta namun berasal dari <span className="purple"> Tangerang, Indonesia</span>
            <br/> Mahasiswa gunadarma yang mengambil jurusan informatika
            <br/> Sedang menempuh S1 dan sekarang lagi di smt 5             
            <br/> Sedang belajar membuat portofolio dengan react.js
            <br/> Pratikum pemrogram Web
            <br/>
            <br/> Hobi saya 
          </p>
          <ul><li className="about-activity">
              <ImPointRight /> Nonton Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Jaln-Jalan
            </li>
            <li className="about-activity">
              <ImPointRight /> Makan & Tidur
            </li>
          </ul>          
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
