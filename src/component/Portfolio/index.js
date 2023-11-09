import React from "react";
import '../css/style.css';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="services">
      <h1>Portfolio</h1>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="portfolio-nav">
        <div>All Categories</div>
        <div>UI Design</div>
        <div>Web Templates</div>
        <div>Logo</div>
        <div>Branding</div>
      </div>
      <div className="portfolio-board">
        {Array.from({ length: 9 }, (_, i) => (
          <img
            key={i}
            src={require(`../assests/portfolio${i+1}.jpeg`)}
            alt={`portfolio ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
