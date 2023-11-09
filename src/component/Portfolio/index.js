import React from "react";
import '../css/style.css';
import './Portfolio.css';

const portfolioData = [
  { img: "portfolio1" },
  { img: "portfolio2" },
  { img: "portfolio3" },
  { img: "portfolio4" },
  { img: "portfolio5" },
  { img: "portfolio6" },
  { img: "portfolio7" },
  { img: "portfolio8" },
  { img: "portfolio9" },
];

function Portfolio() {
  return (
    <div className="services">
      <h1>Portfolio</h1>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="portfolio-nav">
        <div className="active">All Categories</div>
        <div>UI Design</div>
        <div>Web Templates</div>
        <div>Logo</div>
        <div>Branding</div>
      </div>
      <div className="portfolio-board">
        {portfolioData.map((val,i)=>(
          <>
          <img
            key={i}
            src={require(`../assests/${val.img}.jpeg`)}
            alt={`portfolio ${i + 1}`}
          />
          {
            i===0 && 
            <div className="add-profile">+</div>
          }
          </>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
