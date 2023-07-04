import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import NoMatch from "./pages/NoMatch";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Cover from "./components/Cover";

function App() {
  return (
    <Router>
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex flex-column justify-content-between"
      >
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route exact path="/" element={<Cover />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route component={NoMatch} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
