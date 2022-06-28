import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {

    return (
        <>
        <nav>
        <Navbar collapseOnSelect expand="lg" className="dark" bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand href="/my-portfolio"><h1>Joshua Cross</h1> <pre>portfolio</pre></Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
                        <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                                <NavDropdown.Item  href='#react-photo-port'>
                                    ReactApp - Oh Snap!
                                </NavDropdown.Item>
                                <NavDropdown.Item href='#task-master-pro'>
                                    Task-Master Pro v2.0
                                </NavDropdown.Item>
                                <NavDropdown.Item href='#project-devtrax'>
                                    Full Stack Application - devtrax
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#project-motivation-manager">
                                        Group Project - Motivation Manager
                                </NavDropdown.Item>
                                <NavDropdown.Item href='#augmented-retail'>
                                    Group Project - Augmented Retail
                                </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="https://joshacross.github.io/portfolio/assets/files/Joshua%20Cross%20Resume_Portfolio%20(3).pdf">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </nav>
        </>

    )}

export default Navigation;