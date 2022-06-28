import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {

    return (
        <>
        <nav>
        <Navbar collapseOnSelect expand="lg" className="dark" bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand href="/"><h1>Joshua Cross</h1> <pre>portfolio</pre></Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/my-portfolio/about">About</Nav.Link>
                        <Nav.Link href='/my-portfolio/portfolio'>Portfolio</Nav.Link>
                        <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                                <NavDropdown.Item  href='/my-portfolio/portfolio/#react-photo-port'>
                                    ReactApp - Oh Snap!
                                </NavDropdown.Item>
                                <NavDropdown.Item href='/my-portfolio/portfolio/#task-master-pro'>
                                    Task-Master Pro v2.0
                                </NavDropdown.Item>
                                <NavDropdown.Item href='/my-portfolio/portfolio/#project-devtrax'>
                                    Full Stack Application - devtrax
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/my-portfolio/portfolio/#project-motivation-manager">
                                        Group Project - Motivation Manager
                                </NavDropdown.Item>
                                <NavDropdown.Item href='/my-portfolio/portfolio/#augmented-retail'>
                                    Group Project - Augmented Retail
                                </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                            <Nav.Link href="/my-portfolio/contact">Contact</Nav.Link>
                            <Nav.Link href="/my-portfolio/resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </nav>
        </>

    )}

export default Navigation;