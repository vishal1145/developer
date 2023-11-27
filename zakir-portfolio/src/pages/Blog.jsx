import React from "react";
import Carousel from "react-elastic-carousel";

const portfolioDummyData = [
  [
    { img: "portfolio1", webLink: "https://google.com" },
    { img: "portfolio2", webLink: "#" },
    { img: "portfolio3", webLink: "#" },
  ],
  [
    { img: "portfolio1", webLink: "https://google.com" },
    { img: "portfolio2", webLink: "#" },
    { img: "portfolio3", webLink: "#" },
  ],
];

function Blog() {
  return (
    <div className="services" id="Blog">
      <h1>Personal Blog</h1>
      <div className="heading-highlighter div">
        <div></div>
      </div>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="blog-board">
        <Carousel>
          {portfolioDummyData.map((item, i) => (
            <div className="blog-board-inner">
              <div>
                <img
                  src={require(`./assests/${item[0].img}.jpeg`)}
                  alt={`portfolio ${i + 1}`}
                />
                <div className="vpn-heading">How to prototype in Figma</div>
                <div className="vpn-about mx-2 my-3">July 10, 2023</div>
                <div className="vpn-about">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </div>
                <div className="blog-link">
                  <a href={item[0].webLink} target="_blank">
                    Continue Reading
                  </a>
                </div>
              </div>

              <div>
                <img
                  src={require(`./assests/${item[1].img}.jpeg`)}
                  alt={`portfolio ${i + 1}`}
                />
                <div className="vpn-heading">How to prototype in Figma</div>
                <div className="vpn-about mx-2 my-3">July 10, 2023</div>
                <div className="vpn-about">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </div>
                <div className="blog-link">
                  <a href={item[1].webLink} target="_blank">
                    Continue Reading
                  </a>
                </div>
              </div>

              <div>
                <img
                  src={require(`./assests/${item[2].img}.jpeg`)}
                  alt={`portfolio ${i + 1}`}
                />
                <div className="vpn-heading">How to prototype in Figma</div>
                <div className="vpn-about mx-2 my-3">July 10, 2023</div>
                <div className="vpn-about">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </div>
                <div className="blog-link">
                  <a href={item[2].webLink} target="_blank">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Blog;
