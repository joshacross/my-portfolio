import React from "react";
import { Container, Image } from "react-bootstrap";
import heroImage from "../../assets/hero.jpg";

const Jumbotron = () => (
  <Container fluid className="p-0">
    <Image src={heroImage} height={292} fluid alt="Hero" />{" "}
  </Container>
);

export default Jumbotron;
