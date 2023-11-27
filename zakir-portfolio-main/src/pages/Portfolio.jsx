import { useEffect } from "react";
import { useState } from "react";

const portfolioDummyData = [
  [
    { img: "portfolio1", webLink: "https://google.com" },
    { img: "portfolio2", webLink: "#" },
    { img: "portfolio3", webLink: "#" },
    { img: "portfolio4", webLink: "#" },
    { img: "portfolio5", webLink: "#" },
    { img: "portfolio6", webLink: "#" },
    { img: "portfolio7", webLink: "#" },
    { img: "portfolio8", webLink: "#" },
    { img: "portfolio9", webLink: "#" },
  ],
  [
    { img: "portfolio1", webLink: "#" },
    { img: "portfolio2", webLink: "#" },
    { img: "portfolio3", webLink: "#" },
    { img: "portfolio4", webLink: "#" },
    { img: "portfolio5", webLink: "#" },
    { img: "portfolio6", webLink: "#" },
    { img: "portfolio7", webLink: "#" },
    { img: "portfolio8", webLink: "#" },
    { img: "portfolio9", webLink: "#" },
  ],
  [
    { img: "portfolio1", webLink: "#" },
    { img: "portfolio2", webLink: "#" },
    { img: "portfolio4", webLink: "#" },
    { img: "portfolio12", webLink: "#" },
    { img: "portfolio11", webLink: "#" },
    { img: "portfolio14", webLink: "#" },
  ],
  [
    { img: "portfolio3", webLink: "#" },
    { img: "portfolio6", webLink: "#" },
    { img: "portfolio8", webLink: "#" },
    { img: "portfolio9", webLink: "#" },
    { img: "portfolio10", webLink: "#" },
  ],
  [
    { img: "portfolio4", webLink: "#" },
    { img: "portfolio5", webLink: "#" },
    { img: "portfolio7", webLink: "#" },
    { img: "portfolio13", webLink: "#" },
    { img: "portfolio14", webLink: "#" },
  ],
  [
    { img: "portfolio4", webLink: "#" },
    { img: "portfolio5", webLink: "#" },
    { img: "portfolio7", webLink: "#" },
    { img: "portfolio13", webLink: "#" },
    { img: "portfolio14", webLink: "#" },
  ],
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const [portfolioData, setPortfolioData] = useState([]);

  const handleTabClick = (num) => {
    setActiveTab(num);
    setPortfolioData(portfolioDummyData[num]);
  };

  useEffect(() => {
    setPortfolioData(portfolioDummyData[0]);
  }, []);

  return (
    <div className="services" id="Portfolio">
      <h1>Portfolio</h1>
      <div className="heading-highlighter div">
        <div></div>
      </div>
      <div className="service-about">
        Dedicated to showcasing a diverse range of projects, my portfolio
        represents a blend of creativity and technical prowess, illustrating my.
      </div>
      <div className="portfolio-nav">
        <div
          className={activeTab === 0 && "active"}
          onClick={() => handleTabClick(0)}
        >
          All
        </div>
        <div
          className={activeTab === 1 && "active"}
          onClick={() => handleTabClick(1)}
        >
          Web Design
        </div>
        <div
          className={activeTab === 2 && "active"}
          onClick={() => handleTabClick(2)}
        >
          Mobile App
        </div>
        <div
          className={activeTab === 3 && "active"}
          onClick={() => handleTabClick(3)}
        >
          Dashboard
        </div>
        <div
          className={activeTab === 4 && "active"}
          onClick={() => handleTabClick(4)}
        >
          Branding
        </div>
        <div
          className={activeTab === 5 && "active"}
          onClick={() => handleTabClick(5)}
        >
          UI kits
        </div>
      </div>
      <div className="portfolio-board">
        {portfolioData.map((val, i) => (
          <div>
            <div>
              <div className="tint-img">
                <img
                  key={i}
                  src={require(`./assests/${val.img}.jpeg`)}
                  alt={`portfolio ${i + 1}`}
                />
                <div></div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="vpn-heading">Vpn APP UI Design</div>
                  <div className="vpn-about">Vpn app Case Study</div>
                </div>
                <a className="northeast" href={val.webLink} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                  >
                    <path
                      fill="#fff"
                      d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
