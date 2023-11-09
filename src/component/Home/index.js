import React from "react";
import "../css/style.css";
import Pick from "../assests/Your Image 1.png";
import LeftArrow from "../assests/Frame.png";
import HomeLeft from "../utility/homeLeft";
import HomeRight from "../utility/homeRight";
import Services from "../Services";
import PricePlan from "../PricePlan";
import Recommendations from "../recommendation";
import Education from "../Education";
import WorkHistory from '../WorkHistory';
import Portfolio from "../Portfolio";
import Blog from "../Blog/blog";
import Contact from "../Contact";
import Footer from "../Footer";

function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex">
        <HomeLeft />
        <div className="home-mid">
          <div className="home-inner">
            <div className="h-m-div1">
              <h1 className="h-heading">
                I’m Rayan Adlrdard <span className="h-fd">Front-end</span>{" "}
                Developer
              </h1>
              <div className="h-about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                suspendisse nunc lectus.
              </div>
              <button className="btn hire-btn">
                HIRE ME
                <img src={LeftArrow} className="leftArrow" />
              </button>
            </div>
            <div className="h-m-div2">
              <img src={Pick} className="profile-img" />
            </div>

            <img
              src={require(`../assests/Ellipse1.png`)}
              id="Ellipse1"
              className="into-bg-icons"
              alt=""
            />
            <img
              src={require(`../assests/Ellipse2.png`)}
              id="Ellipse2"
              className="into-bg-icons"
              alt=""
            />
            <img
              src={require(`../assests/Ellipse3.png`)}
              id="Ellipse3"
              className="into-bg-icons"
              alt=""
            />
            <img
              src={require(`../assests/Ellipse4.png`)}
              id="Ellipse4"
              className="into-bg-icons"
              alt=""
            />
            <img
              src={require(`../assests/Ellipse5.png`)}
              id="Ellipse5"
              className="into-bg-icons"
              alt=""
            />
            <div
              src={require(`../assests/Ellipse5.png`)}
              id="Ellipse6"
              className="into-bg-icons"
            ></div>
            <div
              src={require(`../assests/Ellipse5.png`)}
              id="Ellipse7"
              className="into-bg-icons"
            ></div>
          </div>
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
        <HomeRight />
      </div>
    </div>
  );
}

export default Home;
