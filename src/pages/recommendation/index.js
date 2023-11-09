import React from "react";
import './recom.css';

const recomData = [
  {
    name: "James Gouse",
    img: "reviewImg0",
    profession: "Graphic Designer",
    rating: 5,
    review: "Great Quanlity!",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
  },
  {
    name: "Tiana Philips",
    img: "reviewImg1",
    profession: "Photographer",
    rating: 5,
    review: "Awazing Work!",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
  },
  {
    name: "Talan Westervelt",
    img: "reviewImg2",
    profession: "Business Man",
    rating: 5,
    review: "Great Quanlity!",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
  },
];

function Recommendations() {
  return (
    <div className="services">
      <h1>Recommendations</h1>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="review-board">
        {recomData.map((val, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-star">
              {Array.from({ length: val.rating }, (_, i) => (
                <img
                  key={i}
                  src={require(`../assests/Star.png`)}
                  alt={`Star ${i + 1}`}
                />
              ))}
            </div>
            <div className="review">{val.review}</div>
            <div className="review-about">{val.about}</div>
            <div className="d-flex">
              <div className="review-img">
                <img src={require(`../assests/${val.img}.jpeg`)} />
              </div>
              <div className="review-person-details">
                <div className="person-name">{val.name}</div>
                <div className="profession">{val.profession}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="three-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="10"
          viewBox="0 0 50 10"
          fill="none"
        >
          <g id="Group 39">
            <circle id="Ellipse 19" cx="5" cy="5" r="5" fill="#FFB400" />
            <circle id="Ellipse 20" cx="25" cy="5" r="5" fill="#FFB400" />
            <circle id="Ellipse 21" cx="45" cy="5" r="5" fill="#FFB400" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Recommendations;
