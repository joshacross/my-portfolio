import React from "react";
import { Card, Container, Button, Col, Row, Carousel } from "react-bootstrap";

function Portfolio() {
  return (
    <>
      <Container id="portfolio">
        <h3 className="border-bottom">Portfolio</h3>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require(`../../assets/projects/ar/home.png`).default}
                  alt="Preview of the Augmented Retail application"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={
                    require(`../../assets/projects/ar/dashboard.png`).default
                  }
                  alt="Preview of the Augmented Retail application"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require(`../../assets/projects/ar/details.png`).default}
                  alt="Preview of the Augmented Retail application"
                />
              </Carousel.Item>
            </Carousel>
            <h4 id="augmented-retail">Augmented Retail</h4>
            <p>
              An E-commerce Retail Application that uses augmented reality
              technology to render products with their mobile device{" "}
            </p>
            <div>
              <a href="https://quiet-woodland-22294.herokuapp.com/products/60fe2d1947cb910021b3bd11">
                <Button variant="dark">Go To Website</Button>
              </a>
              <br></br> <br></br>
              <a href="https://github.com/joshacross/final-project">
                <Button variant="dark">View The Code</Button>
              </a>
              <br></br>
              <br></br>
            </div>
          </Col>
        </Row>
        <Row>
          <br></br>
          <Col id="project-devtrax">
            <Card style={{ width: "32rem" }}>
              <Card.Img
                style={{ width: "18rem", margin: "auto" }}
                variant="top"
                src={require(`../../assets/projects/devtrax.png`).default}
              />
              <Card.Body>
                <Card.Title>DevTrax</Card.Title>
                <Card.Text>
                  A fully responsive, full-stack, client-side Node.js web
                  application that streamlines legal contracts for
                  entrepreneurs. Built with Express.js, Handlebars.js Template
                  Engine, and MySQL, deployed on Heroku Server.
                </Card.Text>
                <a
                  href="https://infinite-shore-33875.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="dark" className="justify-center">
                    W E B S I T E
                  </Button>
                </a>
                <br></br>
                <br></br>
                <a
                  href="https://github.com/joshacross/devtrax"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="dark">G I T H U B</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col id="task-master-pro">
            <Card style={{ width: "32rem" }}>
              <Card.Img
                style={{ width: "18rem", margin: "auto" }}
                variant="top"
                src={
                  require(`../../assets/projects/taskmaster-iphone.png`).default
                }
              />
              <Card.Body>
                <Card.Title>Taskmaster Pro V2</Card.Title>
                <Card.Text>
                  Taskmaster-pro v2.0 is an updated version of Taskmaster-pro
                  using JQuery, JQuery UI Bootstrap, Moment.JS, and other
                  third-party API's via CDN. Legacy code was refactored to
                  manipulate the DOM using jQuery, styled using bootstrap and
                  custom styles to create responsive and advanced-UI design,
                  interactive features were added using JQuery UI, simplified
                  date and time functionality using MomentJS to account for
                  immenent and past due dates and updated fonts using Google
                  fonts CDN.
                </Card.Text>
                <a
                  href="https://joshacross.github.io/taskmaster-pro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="dark">W E B S I T E</Button>
                </a>
                <br></br>
                <br></br>
                <a
                  href="https://github.com/joshacross/taskmaster-pro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="dark">G I T H U B</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col id="project-motivation-manager">
            <Card style={{ width: "32rem" }}>
              <Card.Img
                style={{ width: "18rem", margin: "auto" }}
                variant="top"
                src={
                  require(`../../assets/projects/motivation-manager.png`)
                    .default
                }
              />
              <Card.Body>
                <Card.Title>Motivation Manager</Card.Title>
                <Card.Text>
                  The following application is a mobile-forward task-management
                  solution for entrepreneurs and business owners who want to
                  double their output, surpass their business goals, and finish
                  each week feeling satisfied with their progress, all while
                  enjoying more time for what they care about the most.{" "}
                </Card.Text>
                <a
                  href="https://github.com/JohnBanas/motivation-manager"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="dark">W E B S I T E</Button>
                </a>
                <br></br>
                <br></br>
                <a
                  href="https://johnbanas.github.io/motivation-manager/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="dark">G I T H U B</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col id="react-photo-port">
            <Card style={{ width: "32rem" }}>
              <Card.Img
                variant="top"
                src={require(`../../assets/projects/ohsnap.png`).default}
              />
              <Card.Body>
                <Card.Title>Oh Snap!</Card.Title>
                <Card.Text>
                  A lightning fast photography portfolio website built with
                  React, Javascript, and JSX. Also, what seperates Oh Snap! from
                  the normal portfolio is it's ability to map through various
                  categories of photos by manipulating state and utilizing the
                  virtual DOM.
                </Card.Text>
                <a
                  href="https://joshacross.github.io/photo-port/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="dark">W E B S I T E</Button>
                </a>
                <br></br>
                <br></br>
                <a
                  href="https://github.com/joshacross/photo-port"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="dark">G I T H U B</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
