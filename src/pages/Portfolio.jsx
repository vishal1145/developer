import { useEffect } from "react";
import { useState } from "react";

const portfolioDummyData = [
  [
    { img: "portfolio1" },
    { img: "portfolio2" },
    { img: "portfolio3" },
    { img: "portfolio4" },
    { img: "portfolio5" },
    { img: "portfolio6" },
    { img: "portfolio7" },
    { img: "portfolio8" },
    { img: "portfolio9" },
  ],
  [
    { img: "portfolio1" },
    { img: "portfolio4" },
    { img: "portfolio5" },
    { img: "portfolio6" },
    { img: "portfolio7" },
    { img: "portfolio2" },
    { img: "portfolio9" },
    { img: "portfolio3" },
    { img: "portfolio8" },
  ],
  [
    { img: "portfolio1" },
    { img: "portfolio3" },
    { img: "portfolio5" },
    { img: "portfolio4" },
    { img: "portfolio7" },
    { img: "portfolio2" },
    { img: "portfolio8" },
    { img: "portfolio6" },
    { img: "portfolio9" },
  ],
  [
    { img: "portfolio1" },
    { img: "portfolio4" },
    { img: "portfolio3" },
    { img: "portfolio6" },
    { img: "portfolio5" },
    { img: "portfolio2" },
    { img: "portfolio8" },
    { img: "portfolio9" },
    { img: "portfolio7" },
  ],
  [
    { img: "portfolio1" },
    { img: "portfolio3" },
    { img: "portfolio4" },
    { img: "portfolio2" },
    { img: "portfolio5" },
    { img: "portfolio6" },
    { img: "portfolio8" },
    { img: "portfolio9" },
    { img: "portfolio7" },
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
    <div className="services">
      <h1>Portfolio</h1>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="portfolio-nav">
        <div
          className={activeTab === 0 && "active"}
          onClick={() => handleTabClick(0)}
        >
          All Categories
        </div>
        <div
          className={activeTab === 1 && "active"}
          onClick={() => handleTabClick(1)}
        >
          UI Design
        </div>
        <div
          className={activeTab === 2 && "active"}
          onClick={() => handleTabClick(2)}
        >
          Web Templates
        </div>
        <div
          className={activeTab === 3 && "active"}
          onClick={() => handleTabClick(3)}
        >
          Logo
        </div>
        <div
          className={activeTab === 4 && "active"}
          onClick={() => handleTabClick(4)}
        >
          Branding
        </div>
      </div>
      <div className="portfolio-board">
        {portfolioData.map((val, i) => (
          <>
            <img
              key={i}
              src={require(`./assests/${val.img}.jpeg`)}
              alt={`portfolio ${i + 1}`}
            />
            {i === 0 && <div className="add-profile">+</div>}
          </>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
