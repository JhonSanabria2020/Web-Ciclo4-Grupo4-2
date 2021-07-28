import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/login/HeaderLogin.component";
import Footer from "./components/login/FooterLogin.component";
import Login from "./components/login/LoginForm.component";
import Register from "./components/login/register/RegisterForm.component";
import Profile from "./components/perfil/myPerfil.component";
import Search from "./components/login/search/InfoSearch.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Container className="containerPrincipal">
          <Header></Header>
          <br></br>
          <Row>
            <Col md={12}>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Register} />
                <Route path="/home" component={Profile} />
                <Route path="/search" component={Search} />
              </Switch>
              <br></br>
              <br></br>
            </Col>
          </Row>
          <Footer></Footer>
        </Container>
      </div>
    </Router>
  );
}
export default App;
