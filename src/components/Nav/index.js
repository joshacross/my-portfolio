import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><h1>Joshua Cross</h1> <pre>portfolio</pre></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Portfolio</Nav.Link>
                    <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">React Photo-Port</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Food Festival PWA</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Full Stack Application - DevTrax</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Group Project - Productivity Manager</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Contact</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Resume
                    </Nav.Link>
                </Nav>
        </Navbar.Collapse>
        </Navbar>
    )}

export default Navigation;