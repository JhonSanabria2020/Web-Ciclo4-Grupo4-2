import React, { Component } from "react";
import { Form, Button, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import fondo from "../../../imagenes/FondoRegistro.jpeg";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: require("../../../imagenes/placeholder_image.png").default,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.files[0]) {
      this.setState({
        file: URL.createObjectURL(e.target.files[0]),
      });
    }
  }

  render() {
    return (
      <Form
        className="w-50 m-auto"
        style={{
          backgroundImage: `url(${fondo})`,
          border: "1px solid #565555",
        }}
      >
        <h3
          className="text-center text-uppercase font-weight-bold h1 text-dark"
          style={{
            marginTop: "3em",
          }}
        >
          Formulario de registro
        </h3>
        <Image
          src={this.state.file}
          className="border border-dark mt-5 h-25 w-25 m-auto d-flex rounded"
        ></Image>
        <Form.Group controlId="foto" className="w-50 my-4 h3 text-dark m-auto">
          <Form.Label>Foto</Form.Label>
          <Form.Control type="file" onChange={this.handleChange} />
        </Form.Group>
        <Col md={6}>
          <Form.Group controlId="nombres" className="my-3 h3 text-dark m-auto">
            <Form.Label>Nombes</Form.Label>
            <Form.Control placeholder="Ingresa tus nombres" required />
          </Form.Group>
          <Form.Group controlId="cedula" className="my-3 h3 text-dark m-auto">
            <Form.Label>Número de cédula</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="9999999999"
              placeholder="Ingresa tu número de cédula"
              required
            />
          </Form.Group>
          <Form.Group controlId="celular" className="my-3 h3 text-dark m-auto">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="9999999999"
              placeholder="Ingresa tu número de teléfono celular"
              required
            />
          </Form.Group>
          <Form.Group
            controlId="direccion"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Dirección de residencia</Form.Label>
            <Form.Control placeholder="Ingresa tus dirección de residencia" />
          </Form.Group>
          <Form.Group
            controlId="departamento"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Departamento de residencia</Form.Label>
            <Form.Control
              placeholder="Ingresa tus departamento de residencia"
              required
            />
          </Form.Group>
          <Form.Group controlId="email" className="my-3 h3 text-dark m-auto">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa un correo electrónico"
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group
            controlId="apellidos"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Apellidos</Form.Label>
            <Form.Control placeholder="Ingresa tus apellidos" required />
          </Form.Group>
          <Form.Group
            controlId="nacimiento"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" required />
          </Form.Group>
          <Form.Group controlId="telfijo" className="my-3 h3 text-dark m-auto">
            <Form.Label>Teléfono fijo</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="9999999"
              placeholder="Ingresa tu número de teléfono fijo"
            />
          </Form.Group>
          <Form.Group controlId="eps" className="my-3 h3 text-dark m-auto">
            <Form.Label>EPS</Form.Label>
            <Form.Control placeholder="Escribe el nombre de tu EPS" required />
          </Form.Group>
          <Form.Group
            controlId="municipio"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Municipio de residencia</Form.Label>
            <Form.Control
              placeholder="Ingresa tus municipio de residencia"
              required
            />
          </Form.Group>
          <Form.Group controlId="password" className="my-3 h3 text-dark m-auto">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa una contraseña"
              required
            />
          </Form.Group>
        </Col>
        <Link
          type="button"
          className="w-25 btn btn-secondary btn-block h3 mt-4 mb-0"
          to="/"
        >
          <span className="h3 text-white">Volver</span>
        </Link>
        <Form.Group className="w-25 m-auto float-end">
          <Button
            type="submit"
            className="btn btn-success btn-block h3 mt-4 mb-0"
          >
            <span className="h3 text-white">Registrar</span>
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
