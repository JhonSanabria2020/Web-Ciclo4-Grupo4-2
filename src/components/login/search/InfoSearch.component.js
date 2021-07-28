import React, { Component } from "react";
import { Form, Col, Accordion, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pruebas: [
        {
          name: "Prueba PCR",
          fecha_realizada: "2021-03-01",
          fecha_entrega: "2021-03-8",
          resultado: "Negativo",
        },
        {
          name: "Prueba PCR",
          fecha_realizada: "2021-04-01",
          fecha_entrega: "2021-04-8",
          resultado: "Negativo",
        },
        {
          name: "Prueba PCR",
          fecha_realizada: "2021-05-01",
          fecha_entrega: "2021-05-8",
          resultado: "Positivo",
        },
      ],
    };
  }

  render() {
    return (
      <Form
        className="w-75 m-auto"
        style={{
          background: "#4cb1c3",
          border: "1px solid #565555",
          borderTopLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <h3 className="text-center text-uppercase font-weight-bold h1 text-dark mt-4 mb-4 bold">
          Número de documento: {1075270917}
        </h3>
        <Col
          md={5}
          style={{ background: "#98d1d3", border: "1px solid #565555" }}
        >
          <h3 className="text-center text-uppercase font-weight-bold h3 text-dark my-3">
            Historial de pruebas realizadas de COVID-19
          </h3>
          <Accordion flush="true">
            {this.state.pruebas.map((res, index) => (
              <Card style={{ cursor: "pointer" }} className="mb-2" key={index}>
                <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                  {res.name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index.toString()}>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Fecha realizada: {res.fecha_realizada}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Fecha de entraga: {res.fecha_entrega}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Resultado: {res.resultado}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Col>
        <Col
          md={6}
          style={{ background: "#bfd8d3", border: "1px solid #565555" }}
          className="offset-1"
        >
          <h3 className="text-center text-uppercase font-weight-bold h3 text-dark my-3">
            Esquema de vacunación contra el COVID-19
          </h3>
          <Form.Group controlId="vacunado" className="my-3 h3 text-dark m-auto">
            <Form.Label>¿Vacunado?</Form.Label>
            <Form.Check type="checkbox" id="cbox1">
              <Form.Check.Input type="checkbox" checked />
              <Form.Check.Label>Si</Form.Check.Label>
            </Form.Check>
            <Form.Check type="checkbox" id="cbox2">
              <Form.Check.Input type="checkbox" />
              <Form.Check.Label>No</Form.Check.Label>
            </Form.Check>
          </Form.Group>
          <Form.Group
            controlId="nombreVacuna"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Nombre de la vacuna</Form.Label>
            <Form.Control value="Sinovac" disabled />
          </Form.Group>
          <Form.Group controlId="dosis" className="my-3 h3 text-dark m-auto">
            <Form.Label>Número de dosis aplicada</Form.Label>
            <Form.Control type="number" value="1" disabled />
          </Form.Group>
          <Form.Group
            controlId="fechaVacuna"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Fecha de vacunación</Form.Label>
            <Form.Control type="date" value="2021-06-01" disabled />
          </Form.Group>
          <Form.Group
            controlId="lugarVacuna"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Lugar de vacunación</Form.Label>
            <Form.Control value="Gran Estación" disabled />
          </Form.Group>
          <Form.Group controlId="eps" className="my-3 h3 text-dark m-auto">
            <Form.Label>Eps que lo vacunó</Form.Label>
            <Form.Control value="Sanitas" disabled />
          </Form.Group>
        </Col>
        <Link
          type="button"
          className="w-25 btn btn-info btn-block h3 mt-4 mb-0"
          to="/"
        >
          <span className="h3 text-white">Gracias! </span>
        </Link>
      </Form>
    );
  }
}
