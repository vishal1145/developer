import React from "react";
import "./price.css";
import Check from '../assests/Check.png';
import Close from '../assests/Close.png';

const pricePlanData = [
  {
    name: "Silver",
    price: 0.0,
    about: "For most businesses that want to optimize web queries",
    isPopular: false,
  },
  {
    name: "Gold",
    price: 50.0,
    about: "For most businesses that want to optimize web queries",
    isPopular: true,
  },
  {
    name: "Diamond",
    price: 80.0,
    about: "For most businesses that want to optimize web queries",
    isPopular: false,
  },
];

const priceAccessData = [
  "UI Design",
  "web development",
  "logo design",
  "seo optimization",
  "wordPress integration",
  "5 Websites",
  "unlimited user",
  "20 GB Bandwith ",
];

function PricePlan() {
  return (
    <div className="services">
      <h1>Price Plans</h1>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="service-board">
        {pricePlanData.map((price, i) => (
          <div
            className={`price-card ${price.isPopular && "popular-card"}`}
            key={i}
          >
            {price.isPopular && (
              <div className="most-popular">Most Popular</div>
            )}
            <div className="price-card-head">
              <div className="price-name">{price.name}</div>
              <div>
                <span className="price-price">${price.price}.00</span>
                <span className="price-hour">/Hour</span>
              </div>
              <div className="price-about">{price.about}</div>
            </div>
            <div className="price-access mt-2">
              {priceAccessData.map((access, j) => (
                <div>
                  {(price.name === "Silver" && j < 2) ||
                  (price.name === "Gold" && j < 4) ||
                  price.name === "Diamond" ? (
                    <div className="d-flex my-3" key={j}>
                      <img src={Check} style={{ marginRight: "10px" }} />
                      <div> {access} </div>
                    </div>
                  ) : (
                    <div className="d-flex my-3">
                      <img src={Close} style={{ marginRight: "10px" }} />
                      <div className="text-gray"> {access} </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="price-order-now">
              <button
                className={`btn order-now-btn ${price.isPopular && "popular"}`}
              >
                ORDER NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricePlan;
