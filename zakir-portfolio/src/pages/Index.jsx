import React from "react";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import Design from "./Design";
import Testimonial from "./Testimonial";

function Index() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Testimonial />
      <Design />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
