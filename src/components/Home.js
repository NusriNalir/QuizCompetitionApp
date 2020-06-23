import React, { Component, Fragment } from "react";
// import Login from "./Login";
import Timer from "./Timer";
import Navbar from "./Navbar";
// import {Footer} from "./Navbar"
import { Row, Container, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <Container fluid>
          <Row>
            <Col sm="6" className="vertical-align order-sm-1">
              {/* <Login></Login> */}
              <Timer></Timer>
            </Col>
            <Col sm="6" className="tflex-container order-sm-2"></Col>
          </Row>
        </Container>
        {/* <Footer></Footer> */}
      </Fragment>
    );
  }
}
export default Home;
