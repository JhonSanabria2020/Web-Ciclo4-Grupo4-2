import React, { Component } from "react";
import { Form, Button, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import fondo from "../../../imagenes/FondoRegistro.jpeg";
import axios from "axios";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      foto: require("../../../imagenes/placeholder_image.png").default,
      nombres: "",
      apellidos: "",
      cedula: "",
      nacimiento: "",
      celular: "",
      telfijo: "",
      direccion: "",
      eps: "",
      departamento: "",
      municipio: "",
      email: "",
      password: "",
      redirect: false,
    };
    this.getImagen = this.getImagen.bind(this);
    this.getNombre = this.getNombre.bind(this);
    this.getApellido = this.getApellido.bind(this);
    this.getCedula = this.getCedula.bind(this);
    this.getNacimiento = this.getNacimiento.bind(this);
    this.getCelular = this.getCelular.bind(this);
    this.getTelfijo = this.getTelfijo.bind(this);
    this.getDireccion = this.getDireccion.bind(this);
    this.getEps = this.getEps.bind(this);
    this.getDepartamento = this.getDepartamento.bind(this);
    this.getMunicipio = this.getMunicipio.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
  }
  getImagen(e) {
    if (e.target.files[0]) {
      this.setState({
        foto: URL.createObjectURL(e.target.files[0]),
      });
    }
  }
  getNombre = (e) => {
    let nombres = e.target.value;
    this.setState({
      nombres: nombres,
    });
  };
  getApellido = (e) => {
    let apellidos = e.target.value;
    this.setState({
      apellidos: apellidos,
    });
  };
  getCedula = (e) => {
    let cedula = e.target.value;
    this.setState({
      cedula: cedula,
    });
  };
  getNacimiento = (e) => {
    let nacimiento = e.target.value;
    this.setState({
      nacimiento: nacimiento,
    });
  };
  getCelular = (e) => {
    let celular = e.target.value;
    this.setState({
      celular: celular,
    });
  };
  getTelfijo = (e) => {
    let telfijo = e.target.value;
    this.setState({
      telfijo: telfijo,
    });
  };
  getDireccion = (e) => {
    let direccion = e.target.value;
    this.setState({
      direccion: direccion,
    });
  };
  getEps = (e) => {
    let eps = e.target.value;
    this.setState({
      eps: eps,
    });
  };
  getDepartamento = (e) => {
    let departamento = e.target.value;
    this.setState({
      departamento: departamento,
    });
  };
  getMunicipio = (e) => {
    let municipio = e.target.value;
    this.setState({
      municipio: municipio,
    });
  };
  getEmail = (e) => {
    let email = e.target.value;
    this.setState({
      email: email,
    });
  };
  getPassword = (e) => {
    let password = e.target.value;
    this.setState({
      password: password,
    });
  };
  handleSubmit = (e) => {
    const self = this;
    e.preventDefault();
    const userObject = {
      foto: self.state.foto,
      nombres: self.state.nombres,
      apellidos: self.state.apellidos,
      cedula: self.state.cedula,
      nacimiento: self.state.nacimiento,
      celular: self.state.celular,
      telfijo: self.state.telfijo,
      direccion: self.state.direccion,
      eps: self.state.eps,
      departamento: self.state.departamento,
      municipio: self.state.municipio,
      email: self.state.email,
      password: self.state.password,
    };
    axios
      .post("http://localhost:4000/users/register/", userObject)
      .then(function (res) {
        self.setState({
          id: res.data.id,
          redirect: true,
        });
        const token = res.data.token;
        window.localStorage.setItem("token", token);
      })
      .catch((error) => alert(error));
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to={{ pathname: "/profile", state: { id: this.state.id } }} />
      );
    }
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
          src={this.state.foto}
          className="border border-dark mt-5 h-25 w-25 m-auto d-flex rounded"
        ></Image>
        <Form.Group controlId="foto" className="w-50 my-4 h3 text-dark m-auto">
          <Form.Label>Foto</Form.Label>
          <Form.Control type="file" onChange={this.getImagen} />
        </Form.Group>
        <Col md={6}>
          <Form.Group controlId="nombres" className="my-3 h3 text-dark m-auto">
            <Form.Label>Nombes</Form.Label>
            <Form.Control
              placeholder="Ingresa tus nombres"
              required
              onChange={this.getNombre}
            />
          </Form.Group>
          <Form.Group controlId="cedula" className="my-3 h3 text-dark m-auto">
            <Form.Label>Número de cédula</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="9999999999"
              placeholder="Ingresa tu número de cédula"
              required
              onChange={this.getCedula}
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
              onChange={this.getCelular}
            />
          </Form.Group>
          <Form.Group
            controlId="direccion"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Dirección de residencia</Form.Label>
            <Form.Control
              placeholder="Ingresa tus dirección de residencia"
              onChange={this.getDireccion}
            />
          </Form.Group>
          <Form.Group
            controlId="departamento"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Departamento de residencia</Form.Label>
            <Form.Control
              placeholder="Ingresa tus departamento de residencia"
              required
              onChange={this.getDepartamento}
            />
          </Form.Group>
          <Form.Group controlId="email" className="my-3 h3 text-dark m-auto">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa un correo electrónico"
              required
              onChange={this.getEmail}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group
            controlId="apellidos"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              placeholder="Ingresa tus apellidos"
              required
              onChange={this.getApellido}
            />
          </Form.Group>
          <Form.Group
            controlId="nacimiento"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" required onChange={this.getNacimiento} />
          </Form.Group>
          <Form.Group controlId="telfijo" className="my-3 h3 text-dark m-auto">
            <Form.Label>Teléfono fijo</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="9999999"
              placeholder="Ingresa tu número de teléfono fijo"
              onChange={this.getTelfijo}
            />
          </Form.Group>
          <Form.Group controlId="eps" className="my-3 h3 text-dark m-auto">
            <Form.Label>EPS</Form.Label>
            <Form.Control
              placeholder="Escribe el nombre de tu EPS"
              required
              onChange={this.getEps}
            />
          </Form.Group>
          <Form.Group
            controlId="municipio"
            className="my-3 h3 text-dark m-auto"
          >
            <Form.Label>Municipio de residencia</Form.Label>
            <Form.Control
              placeholder="Ingresa tus municipio de residencia"
              required
              onChange={this.getMunicipio}
            />
          </Form.Group>
          <Form.Group controlId="password" className="my-3 h3 text-dark m-auto">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa una contraseña"
              required
              onChange={this.getPassword}
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
            onClick={this.handleSubmit}
          >
            <span className="h3 text-white">Registrar</span>
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
