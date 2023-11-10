import React from "react";
import Services from "./Services";
import PricePlan from "./PricePlan";
import Recommendations from "./Recommend";
import Education from "./Education";
import WorkHistory from './WorkHistory';
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import NavBar from "./NavBar";
import ProfileBar from "./ProfileBar";

function Home() {
  return (
    <div className="home" id="home">
      <div className="d-flex">
        <ProfileBar />
        <div className="home-mid">
          <Intro />
          <Services />
          <PricePlan />
          <Recommendations />
          <Education />
          <WorkHistory />
          <Portfolio />
          <Blog />
          <Contact />
          <Footer />
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default Home;
