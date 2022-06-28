import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NoMatch = () => {
  return (
    <>
      <Navigation />
      <div>
        <h1>Woops! We could not find that page...</h1>
      </div>
      <Footer />
    </>
  );
};

export default NoMatch;
