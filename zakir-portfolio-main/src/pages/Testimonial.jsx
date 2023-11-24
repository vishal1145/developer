const recomData = [
  {
    name: "James Gouse",
    img: "reviewImg0",
    rating: 5,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
  },
  {
    name: "Tiana Philips",
    img: "reviewImg1",
    rating: 5,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
  },
  {
    name: "Talan Westervelt",
    img: "reviewImg2",
    rating: 5,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
  }
];

function Testimonial() {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="heading-highlighter div">
        <div></div>
      </div>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="review-board">
        {recomData.map((val, idx) => (
          <div className="review-card" key={idx}>
            <div className="d-flex justify-content-between">
              <div className="review-img">
                <img src={require(`./assests/${val.img}.jpeg`)} />
              </div>
              <div className="review-star">
                {Array.from({ length: val.rating }, (_, i) => (
                  <img
                    key={i}
                    src={require(`./assests/Star.png`)}
                    alt={`Star ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="person-name">{val.name}</div>
            <div className="review-about">{val.about}</div>
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
            <circle
              id="Ellipse 19"
              cx="5"
              cy="5"
              r="5"
              fill="rgb(255,255,255)"
            />
            <circle
              id="Ellipse 20"
              cx="25"
              cy="5"
              r="5"
              fill="rgb(255,255,255)"
            />
            <circle
              id="Ellipse 21"
              cx="45"
              cy="5"
              r="5"
              fill="rgb(255,255,255)"
            />
          </g>
        </svg>
      </div>
      <div className="testimonial-design-bg"></div>
    </div>
  );
}

export default Testimonial;
