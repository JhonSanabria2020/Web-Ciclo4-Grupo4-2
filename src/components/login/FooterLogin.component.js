import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <Image
            to={"/signin"}
            className="h-75 w-50 float-start m-3"
            src={require("../../imagenes/logoMinSalud.jpeg").default}
            alt="image not found"
          />
        </Col>
        <Col md={6}>
          <Image
            className="m-auto h-75 w-25 d-flex m-3 pt-2"
            src={require("../../imagenes/logoUTP.png").default}
            alt="image not found"
          />
        </Col>
      </Row>
    );
  }
}
