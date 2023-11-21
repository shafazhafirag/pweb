import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { IoIosSchool } from "react-icons/io";

function Edu() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
        <FaSchoolFlag />
        <h1 style={{ fontSize: "15px", paddingBottom: "20px" }}>
          SDI Miftahul Jannah
          <br />
          2009-2015
        </h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaSchool />
        <h1 style={{ fontSize: "15px", paddingBottom: "20px" }}>
          SMPIT Cordova
          <br />
          2015-2018
        </h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <BiSolidSchool />
        <h1 style={{ fontSize: "15px", paddingBottom: "20px" }}>
          SMAN 3 Kab.Tangerang
          <br />
          2018-2021
        </h1>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <IoIosSchool />
        <h1 style={{ fontSize: "15px", paddingBottom: "20px" }}>
          Universitas Gunadarma
          <br />
          2021-Sekarang
        </h1>
      </Col>
      
    </Row>
  );
}
export default Edu;
