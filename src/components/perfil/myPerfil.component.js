import React, { Component } from "react";
import {
  Form,
  Col,
  Row,
  Button,
  Image,
  Accordion,
  Card,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import fondo from "../../imagenes/FondoPerfilPruebasVacunas.jpeg";
import axios from "axios";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      disabled: true,
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
      vacunas: [
        {
          nombreVacuna: "Sinovac",
          dosis: "1",
          fechaVacuna: "2021-06-01",
          lugarVacuna: "Gran Estación",
          eps: "Sanitas",
        },
      ],
      user: [],
    };
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
  }
  getNombre = (e) => {
    let nombres = e.target.value;
    const user = { ...this.state.user };
    user.nombres = nombres;
    this.setState({ user });
  };
  getApellido = (e) => {
    let apellidos = e.target.value;
    const user = { ...this.state.user };
    user.apellidos = apellidos;
    this.setState({ user });
  };
  getCedula = (e) => {
    let cedula = e.target.value;
    const user = { ...this.state.user };
    user.cedula = cedula;
    this.setState({ user });
  };
  getNacimiento = (e) => {
    let nacimiento = e.target.value;
    const user = { ...this.state.user };
    user.nacimiento = nacimiento;
    this.setState({ user });
  };
  getCelular = (e) => {
    let celular = e.target.value;
    const user = { ...this.state.user };
    user.celular = celular;
    this.setState({ user });
  };
  getTelfijo = (e) => {
    let telfijo = e.target.value;
    const user = { ...this.state.user };
    user.telfijo = telfijo;
    this.setState({ user });
  };
  getDireccion = (e) => {
    let direccion = e.target.value;
    const user = { ...this.state.user };
    user.direccion = direccion;
    this.setState({ user });
  };
  getEps = (e) => {
    let eps = e.target.value;
    const user = { ...this.state.user };
    user.eps = eps;
    this.setState({ user });
  };
  getDepartamento = (e) => {
    let departamento = e.target.value;
    const user = { ...this.state.user };
    user.departamento = departamento;
    this.setState({ user });
  };
  getMunicipio = (e) => {
    let municipio = e.target.value;
    const user = { ...this.state.user };
    user.municipio = municipio;
    this.setState({ user });
  };
  getEmail = (e) => {
    let email = e.target.value;
    const user = { ...this.state.user };
    user.email = email;
    this.setState({ user });
  };
  componentDidMount() {
    const self = this;
    axios
      .get("http://localhost:4000/users/" + self.props.location.state.id)
      .then((res) => {
        self.setState({ user: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleGameClik() {
    this.setState({ disabled: !this.state.disabled });
  }
  handleActualizar = (e) => {
    const self = this;
    e.preventDefault();
    const userObject = {
      foto: self.state.user.foto,
      nombres: self.state.user.nombres,
      apellidos: self.state.user.apellidos,
      cedula: self.state.user.cedula,
      nacimiento: self.state.user.nacimiento,
      celular: self.state.user.celular,
      telfijo: self.state.user.telfijo,
      direccion: self.state.user.direccion,
      eps: self.state.user.eps,
      departamento: self.state.user.departamento,
      municipio: self.state.user.municipio,
      email: self.state.user.email,
    };
    axios
      .put(
        `http://localhost:4000/users/update/` + self.state.user._id,
        userObject
      )
      .then(function (res) {
        window.location.reload();
      });
  };

  render() {
    return (
      <Form
        className="w-75 m-auto"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border: "1px solid #565555",
          height: "700px",
        }}
        disabled={this.state.disabled ? "disabled" : ""}
      >
        <Col md={6}>
          <Row style={{ display: "flow-root" }}>
            <fieldset disabled={true ? this.state.disabled : false}>
              <Row className="h-100">
                <h1 className="text-center text-uppercase font-weight-bold h1 text-dark my-3">
                  Mi perfil
                </h1>
                <Col md={6}>
                  <Image
                    src={`data:image/png;base64,${this.state.user.foto}`}
                    className="border border-dark h-100 w-100 m-auto"
                  ></Image>
                </Col>
                <Col md={6}>
                  <Form.Group
                    controlId="nombres"
                    className="my-3 h3 text-dark m-auto"
                  >
                    <Form.Label>Nombes</Form.Label>
                    <Form.Control
                      placeholder="Ingresa tus nombres"
                      required
                      value={this.state.user.nombres || ""}
                      onChange={this.getNombre}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="apellidos"
                    className="my-3 h3 text-dark m-auto"
                  >
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                      placeholder="Ingresa tus apellidos"
                      required
                      value={this.state.user.apellidos || ""}
                      onChange={this.getApellido}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="cedula"
                    className="my-3 h3 text-dark m-auto"
                  >
                    <Form.Label>Número de cédula</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      max="9999999999"
                      placeholder="Ingresa tu número de cédula"
                      required
                      value={this.state.user.cedula || ""}
                      onChange={this.getCedula}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="nacimiento"
                    className="my-3 h3 text-dark m-auto"
                  >
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control
                      type="date"
                      required
                      value={this.state.user.nacimiento || ""}
                      onChange={this.getNacimiento}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group
                    controlId="celular"
                    className="my-3 h3 text-dark m-auto"
                  >
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      max="9999999999"
                      placeholder="Ingresa tu número de teléfono celular"
                      required
                      value={this.state.user.celular || ""}
                      onChange={this.getCelular}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="eps"
                    className="my-3 h3 text-dark m-auto"
                  >
                    <Form.Label>EPS</Form.Label>
                    <Form.Control
                      placeholder="Escribe el nombre de tu EPS"
                      required
                      value={this.state.user.eps || ""}
                      onChange={this.getEps}
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
                      value={this.state.user.departamento || ""}
                      onChange={this.getDepartamento}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    controlId="email"
                    className="my-3 h3 text-dark m-auto"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingresa un correo electrónico"
                      required
                      value={this.state.user.email || ""}
                      onChange={this.getEmail}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="direccion"
                    className="my-3 h3 text-dark m-auto"
                  >
                    <Form.Label>Dirección de residencia</Form.Label>
                    <Form.Control
                      placeholder="Ingresa tus dirección de residencia"
                      value={this.state.user.direccion || ""}
                      onChange={this.getDireccion}
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
                      value={this.state.user.municipio || ""}
                      onChange={this.getMunicipio}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </fieldset>
            <Form.Group className="w-25 float-start">
              <Button
                type="button"
                className="btn btn-info btn-block h6 mt-4 mb-0"
                onClick={this.handleGameClik.bind(this)}
              >
                <span className="h6 text-white">Editar datos</span>
              </Button>
            </Form.Group>
            <Form.Group className="w-25 float-end">
              <Button
                type="button"
                className="btn btn-success btn-block h6 mt-4 mb-0"
                hidden={true ? this.state.disabled : false}
                onClick={this.handleActualizar.bind(this)}
              >
                <span className="h6 text-white">Actualizar</span>
              </Button>
            </Form.Group>
          </Row>
          <Row>
            <Link
              type="button"
              className="w-25 btn btn-secondary h3 mt-4 mb-0"
              to="/"
            >
              <span className="h3 text-white">Volver</span>
            </Link>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <h1 className="text-center text-uppercase font-weight-bold h1 text-dark my-3">
              Mis pruebas covid-19
            </h1>
            <Button
              type="button"
              className="btn btn-success btn-block mt-4 w-75 m-auto"
            >
              <span className="h3 text-white">Agregar prueba</span>
            </Button>
            <Accordion flush="true" className="mt-3">
              {this.state.pruebas.map((res, index) => (
                <Card
                  style={{ cursor: "pointer" }}
                  className="mb-2"
                  key={index}
                >
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={index.toString()}
                    >
                      {res.name}
                    </Accordion.Toggle>
                    <Button
                      type="button"
                      className="btn btn-secodary float-end"
                    >
                      <span className="text-white">Editar</span>
                    </Button>
                  </Card.Header>
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
          </Row>
          <Row>
            <h1 className="text-center text-uppercase font-weight-bold h1 text-dark my-3">
              Mi vacuna COVID-19
            </h1>
            <Button
              type="button"
              className="btn btn-success btn-block mt-4 w-75 m-auto"
            >
              <span className="h3 text-white">Agregar vacuna</span>
            </Button>
            <Accordion flush="true" className="mt-3">
              {this.state.vacunas.map((res, index) => (
                <Card
                  style={{ cursor: "pointer" }}
                  className="mb-2"
                  key={index}
                >
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={index.toString()}
                    >
                      {res.nombreVacuna}
                    </Accordion.Toggle>
                    <Button
                      type="button"
                      className="btn btn-secodary float-end"
                    >
                      <span className="text-white">Editar</span>
                    </Button>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Dosis: {res.dosis}</ListGroup.Item>
                        <ListGroup.Item>
                          Fecha vacunado: {res.fechaVacuna}
                        </ListGroup.Item>
                        <ListGroup.Item>Eps: {res.eps}</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Row>
        </Col>
      </Form>
    );
  }
}
