import React from "react";
import Jumbotron from "../Jumbotron";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

function Home() {
  return (
    <>
      <Jumbotron />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home();
