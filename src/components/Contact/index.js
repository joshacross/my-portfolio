import React, {useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { validateEmail } from '../../Utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState( {name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
        
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <Container>
            <section className='contactForm'>
                <Row>
                <h1 className="border-bottom">Let's Work Together!</h1>
                <p>Please provide your name, email, and a brief message and I will get back to you at the earliest convenience. Thanks for visiting! 👍</p>
                </Row>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </Col>
                        <Col>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </Row>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </section>
        </Container>
    )
}

export default ContactForm;