import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import profile from '../../assets/profilePicture2.jpg'
import { Container, Row, Col } from 'react-bootstrap';


function About() {
    return (
        <div className="container about">
            <Container>
            <h3>About Me</h3>
                <Row>
                    <Col>
                        <img src={profile} alt="Joshua Cross walking down the road in Joshua Tree, California with a desert backdrop of Joshua Trees." />
                    </Col>
                    <Col>
                        <p>Joshua Cross is an aspiring tech enthusiast, digital marketer, and content producer in Nashville, TN. He has assisted in building two 7-figure eCommerce companies (The SalesMentor, LLC, The Cash-Flow Specialist) from the ground up, edited and filmed winning ad-creatives that generated hundreds of thousands of dollars in monthly gross revenue, and helped over 10,000+ people get jobs in one of the most significant economic downturns in history.
                        Throughout his professional career, Joshua has worked with industry leading companies all over the U.S., including Music Business Association, NSAI, Brainfarm Cinema, Wolvvs Entertainment, Red Bull Media House, Highmark Health, S.C. Johnson, Starkist, H.G. Heinz, Microsoft, Music Business Association, USA Today, and Microsoft. He received a Bachelors of Business Administration from Belmont University’s Massey School of Business, and won awards for entrepreneurship and academic excellence.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )}

export default About;