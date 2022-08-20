import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import NoMatch from './pages/NoMatch';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
     return (
          <Router basename='/my-portfolio'>
               <header>
                    <Navigation />
               </header>
               <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/portfolio' element={<PortfolioPage />} />
                    <Route path='/resume' element={<ResumePage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route component={NoMatch} />
               </Routes>
               <footer>
                    <Footer />
               </footer>
          </Router>
     );
}

export default App;
