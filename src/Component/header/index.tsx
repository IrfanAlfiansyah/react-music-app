import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useNavigate } from "react-router-dom";

import { Container, Button, Navbar } from "react-bootstrap";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="shadow main">
      <Container className="main">
        <Navbar.Brand href="/">
          <h2>Replay</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={"justify-content-end"}
        >
          <>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link link_header">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/manage-music" className="nav-link link_header">
                  Create Music
                </Link>
              </li>
            </ul>
            <Button
              variant="light"
              className="color-purple border-purple me-3 fw-bold"
              onClick={() => {
                navigate(`login`);
                }}
            >
              Masuk
            </Button>

            <Button
              className="text-white background-purple border-purple fw-bold"
              style={{ backgroundColor: "#5e50a1" }}
              onClick={() => {
                navigate(`register  `);
                }}
            >
              Daftar
            </Button>
          </>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;