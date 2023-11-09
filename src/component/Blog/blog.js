import React from "react";
import "../css/style.css";
import "./Blog.css";

const blogData = [
  "How to Make Web templates",
  "Make Business Card",
  "How To make Flyer Design",
];

function Blog() {
  return (
    <div className="services">
      <h1>Blog</h1>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="Blog-board">
        {blogData.map((val, i) => (
          <div className="portfolio-card">
            <img
              key={i}
              src={require(`../assests/portfolio${i + 1}.jpeg`)}
              alt={`portfolio ${i + 1}`}
            />
            <div className="port-details">
              <div className="text-bold my-2">{val}</div>
              <div className="text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna{" "}
              </div>
              <div className="learn-more">
                Learn More <img src={require("../assests/Frame2.png")} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
