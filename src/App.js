import React from 'react';
import Jumbotron from './components/Jumbotron';
import Portfolio from './components/Portfolio'
import About from './components/About';
import ContactForm from './components/Contact'

function App() {

    return (
        <>
            <Jumbotron />
            <Portfolio />
            <About />
            <ContactForm/>
        </>
    )
}

export default App;