import React from "react";
import Carousel from "react-elastic-carousel";

const recomData = [
  [
    {
      name: "James Gouse",
      img: "reviewImg0",
      rating: 5,
      about:
        "Lorem ipsum dolor siLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....t amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    },
    {
      name: "Tiana Philips",
      img: "reviewImg1",
      rating: 5,
      about:
        "Lorem ipsum doloLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....r sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    },
    {
      name: "Talan Westervelt",
      img: "reviewImg2",
      rating: 5,
      about:
        "Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....met, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    },
  ],
  [
    {
      name: "Talan Westervelt",
      img: "reviewImg2",
      rating: 5,
      about:
        "Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....met, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    },
    {
      name: "Talan Westervelt",
      img: "reviewImg2",
      rating: 5,
      about:
        "Lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....psum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    },
    {
      name: "Talan Westervelt",
      img: "reviewImg2",
      rating: 5,
      about:
        "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet.... ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    },
  ],
  [
    {
      name: "Talan Westervelt",
      img: "reviewImg2",
      rating: 5,
      about:
        "Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....met, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    },
    {
      name: "Talan Westervelt",
      img: "reviewImg2",
      rating: 5,
      about:
        "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet.... adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    },
    {
      name: "Talan Westervelt",
      img: "reviewImg2",
      rating: 5,
      about:
        "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....ur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    },
  ],
];

function Testimonial() {
  return (
    <div>
      <div className="testimonials d-none">
        <div className="testimonials-inner">
          <h1>Testimonials</h1>
          <div className="heading-highlighter div">
            <div></div>
          </div>
          <div className="service-about">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </div>
        </div>
        <div className="review-board">
          <Carousel>
            {recomData.map((item, idx) => (
              <div key={idx} className="review-view">
                <div className="review-card">
                  <div className="d-flex justify-content-between">
                    <div className="review-img">
                      <img src={require(`./assests/${item[0].img}.jpeg`)} />
                    </div>
                    <div className="review-star">
                      {Array.from({ length: item[0].rating }, (_, i) => (
                        <img
                          key={i}
                          src={require(`./assests/Star.png`)}
                          alt={`Star ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="person-name">{item[0].name}</div>
                  <div className="review-about">{item[0].about}</div>
                </div>

                <div className="review-card">
                  <div className="d-flex justify-content-between">
                    <div className="review-img">
                      <img src={require(`./assests/${item[1].img}.jpeg`)} />
                    </div>
                    <div className="review-star">
                      {Array.from({ length: item[0].rating }, (_, i) => (
                        <img
                          key={i}
                          src={require(`./assests/Star.png`)}
                          alt={`Star ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="person-name">{item[1].name}</div>
                  <div className="review-about">{item[1].about}</div>
                </div>

                <div className="review-card">
                  <div className="d-flex justify-content-between">
                    <div className="review-img">
                      <img src={require(`./assests/${item[2].img}.jpeg`)} />
                    </div>
                    <div className="review-star">
                      {Array.from({ length: item[2].rating }, (_, i) => (
                        <img
                          key={i}
                          src={require(`./assests/Star.png`)}
                          alt={`Star ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="person-name">{item[2].name}</div>
                  <div className="review-about">{item[2].about}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="testimonial-design-bg"></div>
      </div>
    </div>
  );
}

export default Testimonial;
