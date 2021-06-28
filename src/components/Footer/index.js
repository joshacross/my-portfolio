import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Footer () {
    return (
        <Container bg="dark" variant="dark">
            <Row>
                <Navbar className="" bg="dark" variant="dark" fixed="bottom">
                                <Col>
                                    <Navbar.Brand>© 2021 Joshua Cross | All Rights Reserved
                                    </Navbar.Brand>
                                </Col>
                    </Navbar>
            </Row>
        </Container>
    )
}

export default Footer;