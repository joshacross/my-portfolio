import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/PDF';
import Contact from './components/Contact';

function App() {

    return (
        <>
        <Navigation />
        <Routes>
            <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
        <Footer />
      </>
    )
}

export default App;