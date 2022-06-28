import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { validateEmail } from "../../Utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      }
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Container className="m-4" variant="dark">
      <section className="contactForm contact-form">
        <Row>
          <h1 className="border-bottom">Let's Work Together!</h1>
          <p>
            Please provide your name, email, and a brief message and I will get
            back to you at the earliest convenience. Thanks for visiting! 👍
          </p>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id={name}
                  type="name"
                  placeholder="Elon Musk"
                  onBlur={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  id={email}
                  type="email"
                  placeholder="Enter email"
                  onBlur={handleChange}
                />
                <Form.Text className="text-muted">
                  I will never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <InputGroup>
              <InputGroup.Text className="mb-3">Message</InputGroup.Text>
              <FormControl
                className="mb-3"
                id={message}
                as="textarea"
                aria-label="With textarea"
                onBlur={handleChange}
              />
            </InputGroup>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </Container>
  );
}

export default Contact;
