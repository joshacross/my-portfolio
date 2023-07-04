import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="dark"
          bg="dark"
          variant="dark"
        >
          <Container fluid>
            <Navbar.Brand>
              <Link className="nav-link text-white" to="/home">
                <h1>Joshua Cross</h1> <pre>portfolio</pre>
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
                <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/portfolio#react-photo-port">
                    ReactApp - Oh Snap!
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/portfolio#task-master-pro">
                    Task-Master Pro v2.0
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/portfolio#project-devtrax">
                    Full Stack Application - devtrax
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/portfolio#project-motivation-manager">
                    Group Project - Motivation Manager
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/portfolio#augmented-retail">
                    Group Project - Augmented Retail
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </>
  );
}

export default Navigation;
