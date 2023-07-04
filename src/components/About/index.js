import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import profile from "../../assets/profilePicture2.jpg";
import {
  Navbar,
  Nav,
  ListGroup,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function About() {
  return (
    <div id="about">
      <br></br>
      <Container>
        <section className="aboutme">
          <h3 className="border-bottom">About</h3>
          <br></br>
          <Row>
            <Col>
              <div>
                <Image
                  src={profile}
                  alt="Joshua Cross walking down the road in Joshua Tree, California with a desert backdrop of Joshua Trees."
                  fluid="md"
                />
              </div>
              <Navbar variant="dark" bg="dark" expand="false">
                <Container fluid>
                  <Navbar.Brand>L I N K S</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbar-dark-example" />
                  <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                      <Nav.Link href="resume">R E S U M E</Nav.Link>
                      <Nav.Link href="https://github.com/joshacross">
                        G I T H U B
                      </Nav.Link>
                      <Nav.Link href="https://linkedin.com/in/joshuaalexandercross">
                        L I N K E D I N
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <br></br>
            </Col>
            <Col xs={12} lg={6}>
              <p>
                Joshua Cross is an aspiring tech enthusiast, digital marketer,
                and content producer in Nashville, TN. He has assisted in
                building two 7-figure eCommerce companies (The SalesMentor, LLC,
                The Cash-Flow Specialist) from the ground up, edited and filmed
                winning ad-creatives that generated hundreds of thousands of
                dollars in monthly gross revenue, and helped over 10,000+ people
                get jobs in one of the most significant economic downturns in
                history.
                <br></br>
                <br></br>
                Throughout Joshua's professional career, he has worked with
                industry leading companies all over the U.S., including Music
                Business Association, NSAI, Brainfarm Cinema, Wolvvs
                Entertainment, Red Bull Media House, Highmark Health, S.C.
                Johnson, Starkist, H.G. Heinz, Music Business Association, USA
                Today, and Microsoft. He received a Bachelors of Business
                Administration from Belmont University’s Massey School of
                Business, Full-Stack Javascript Web Development Certificate from
                Vanderbilt Owen's Graduate School of Business and Computer
                Engineering, and won numerous awards for entrepreneurship and
                academic excellence.
              </p>

              <div>
                <Link to="/portfolio">
                  <Button variant="dark" className="">
                    See Projects
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </section>
        <section className="skills">
          <br></br>
          <Row>
            <h4 className="border-bottom">S K I L L S / L A N G U A G E S</h4>
          </Row>
          <br></br>
          <Row>
            <Col sm={12} md={6}>
              <ListGroup className="flush">
                <ListGroup.Item>Marketing Strategy</ListGroup.Item>
                <ListGroup.Item>Hubspot Enterprise</ListGroup.Item>
                <ListGroup.Item>Process Design</ListGroup.Item>
                <ListGroup.Item>Google/Hubspot Analytics</ListGroup.Item>
                <ListGroup.Item>
                  Attribution/Liquidation Reporting
                </ListGroup.Item>
                <ListGroup.Item>Podcast Engineer</ListGroup.Item>
                <ListGroup.Item>SFX/VFX</ListGroup.Item>
                <ListGroup.Item>Video Editing</ListGroup.Item>
                <ListGroup.Item>ClickFunnels</ListGroup.Item>
                <ListGroup.Item>Email Marketing</ListGroup.Item>
                <ListGroup.Item>Adobe Creative Suite</ListGroup.Item>
                <ListGroup.Item>Infusionsoft</ListGroup.Item>
                <ListGroup.Item>SEO/SEM</ListGroup.Item>
                <ListGroup.Item>Google/Facebook Ads</ListGroup.Item>
                <ListGroup.Item>Conversion Rate Optimization</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup className="flush">
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>Advanced CSS</ListGroup.Item>
                <ListGroup.Item>Responsive Design</ListGroup.Item>
                <ListGroup.Item>Web/Third-Party APIs</ListGroup.Item>
                <ListGroup.Item>Javascript</ListGroup.Item>
                <ListGroup.Item>JQuery</ListGroup.Item>
                <ListGroup.Item>CDN</ListGroup.Item>
                <ListGroup.Item>Node.JS</ListGroup.Item>
                <ListGroup.Item>Express.JS</ListGroup.Item>
                <ListGroup.Item>MySQL</ListGroup.Item>
                <ListGroup.Item>MongoDB</ListGroup.Item>
                <ListGroup.Item>Template Engines (Handlebars)</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>VDOM</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default About;
