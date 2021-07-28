import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <Image
            className="h-75 w-75 m-3"
            style={{ borderRadius: "20px" }}
            src={require("../../imagenes/logoSoftware.jpeg").default}
            alt="image not found"
          />
        </Col>
        <Col md={6}>
          <Image
            className="m-auto h-75 d-flex my-3"
            src={require("../../imagenes/logoMisionTic.png").default}
            alt="image not found"
          />
        </Col>
      </Row>
    );
  }
}
