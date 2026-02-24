import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import { Container, Col, Row } from "react-bootstrap";
import Account from "./Account";

function Navbar() {
  return (
    <section className="navbar-section bg-black text-white">
      <Container>
        <Row className="align-items-center">
        
          {/* Logo + Brand */}
          <Col lg={6} md={6} sm={6} xs={6}>
            <nav className="nav">
              <ul className="list-unstyled m-0">
                <li>
                  <Link
                    to="/"
                    className="brand d-flex align-items-center text-decoration-none text-white fw-bold"
                  >
                    <img
                      src={logo}
                      alt="Logo"
                      className="me-2"
                      style={{ width: "45px" }}
                    />
                    <h3 className="mb-0">TAMIM</h3>
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>

          {/* Account Section */}
          <Col
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="d-flex justify-content-end align-items-center"
          >
            <Account />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Navbar;
