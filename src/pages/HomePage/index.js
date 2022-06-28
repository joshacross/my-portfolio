import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';

function HomePage() {
    return (
        <>
            <Jumbotron />
            <About />
            <Portfolio />
            <Contact />
        </>
    )
}

export default HomePage;