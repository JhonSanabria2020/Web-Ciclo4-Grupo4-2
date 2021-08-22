import React, { Component } from "react";
import { Col, Container, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
      email: self.state.email,
      password: self.state.password,
    };

    axios
      .post("http://localhost:4000/users/login", userObject)
      .then(function (res) {
        if (res.data.ok) {
          self.setState({
            id: res.data.id,
            redirect: true,
          });
          const token = res.data.token;
          window.localStorage.setItem("token", token);
        }
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
      <Col md={6} xs="auto" className="align-items-center">
        <Form className="w-75 m-auto" onSubmit={this.handleSubmit}>
          <h3 className="text-center text-uppercase font-weight-bold h1 text-dark">
            login
          </h3>
          <Form.Group className="my-3 h2 text-dark">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              onChange={this.getEmail}
              name="email"
              type="email"
              placeholder="Ingresa tu correo"
              required
            />
          </Form.Group>
          <Form.Group className="my-3 h2 text-dark">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="password"
              onChange={this.getPassword}
              type="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </Form.Group>
          <Form.Group className="my-3 h3 text-dark">
            <Form.Check label="Recuerdarme" />
          </Form.Group>
          <Form.Group className="my-3">
            <Button type="submit" className="btn btn-primary btn-block h3">
              <span className="h3 text-white">Ingresar</span>
            </Button>
          </Form.Group>
          <Form.Group className="my-3">
            <Link
              type="button"
              className="btn btn-info w-25 btn-block h4"
              to="/signup"
            >
              <span className="h4 text-white">Registrarse</span>
            </Link>
            <a
              className="forgot-password text-right h5 mt-3 float-end"
              href="/#"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </Form.Group>
        </Form>
      </Col>
    );
  }
}

class LoginSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getSearch = (e) => {
    let search = e.target.value;
    this.setState({
      search: search,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/search" />;
    }
    return (
      <Col md={6} xs="auto" className="align-items-center pt-5">
        <Form className="pt-5" onSubmit={this.handleSubmit}>
          <h3 className="text-center text-uppercase font-weight-bold h1 text-dark">
            Consulta
          </h3>
          <Form.Group className="w-50 my-3 h2 text-dark m-auto">
            <Form.Label>Numero de cédula</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu número de cédula"
              onChange={this.getSearch}
              required
            />
          </Form.Group>
          <Form.Group className="w-50 my-2 m-auto">
            <Button type="submit" className="btn btn-success btn-block h3">
              <span className="h3 text-white">Consultar</span>
            </Button>
          </Form.Group>
        </Form>
      </Col>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <Container>
        <LoginForm></LoginForm>
        <LoginSearch></LoginSearch>
      </Container>
    );
  }
}

export default Login;
