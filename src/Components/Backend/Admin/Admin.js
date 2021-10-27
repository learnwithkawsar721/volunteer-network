import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainSection from "../MainSection/MainSection";
// import SiteBar from "../SiteBar/SiteBar";
import "./Admin.css";
const Admin = () => {
  return (
    <>
      
      <Container fluid>
        <Row>
          {/* <Col className="col-12 col-sm-12 col-md-3 col-lg-3 sitebar">
            <SiteBar></SiteBar>
          </Col> */}
          <Col className="col-12 col-sm-12 col-md-12 col-lg-12">
            <MainSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
