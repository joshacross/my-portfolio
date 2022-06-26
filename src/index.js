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
        <Route path="/my-portfolio/" element={<App />} />
        <Route path="/my-portfolio/*" element={<App />} />
        <Route path="/my-portfolio/about" element={<About />} />
        <Route path="/my-portfolio/resume" element={<PDF />} />
        <Route path="/my-portfolio/portfolio" element={<Portfolio />} />
        <Route path="/my-portfolio/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <footer>
      <Footer />
    </footer>
  </>,
  document.getElementById('root')
);
