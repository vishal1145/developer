import React from "react";
import "../css/style.css";
import "./Blog.css";

const blogData = [
  {
    img: "blogImg1",
    title: "How to Make Web templates",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
  },
  {
    img: "portfolio1",
    title: "Make Business Card",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
  },
  {
    img: "portfolio3",
    title: "How To make Flyer Design",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
  },
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
          <div className="portfolio-card" key={i}>
            <img
              src={require(`../assests/${val.img}.jpeg`)}
              alt={`portfolio ${i + 1}`}
            />
            <div className="port-details">
              <div className="text-bold my-2">{val.title}</div>
              <div className="text-gray">
                {val.about}
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
