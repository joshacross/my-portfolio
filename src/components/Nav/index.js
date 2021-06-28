import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation(props) {
    const {
        contactSelected,
        setContactSelected,
    } = props;

    return (
            <Navbar collapseOnSelect expand="lg" className="dark" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><h1>Joshua Cross</h1> <pre>portfolio</pre></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about" onClick={() => setContactSelected(false)}>About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#react-photo-port">React Photo-Port</NavDropdown.Item>
                            <NavDropdown.Item href="#project-food-festival-pwa">Food Festival PWA</NavDropdown.Item>
                            <NavDropdown.Item href="#project-devtrax">Full Stack Application - DevTrax</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#project-motivation-manager">Group Project - Motivation Manager</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link className={`mx-2 ${contactSelected && 'navActive'}`} href="#contact">
                            <span onClick={() => setContactSelected(true)}>Contact</span>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    )}

export default Navigation;