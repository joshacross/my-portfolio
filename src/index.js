import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import About from './components/About';
import PDF from './components/PDF';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <>
    <header>
      <Navigation />
    </header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<PDF />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <footer>
      <Footer />
    </footer>
  </>,
  document.getElementById('root')
);
