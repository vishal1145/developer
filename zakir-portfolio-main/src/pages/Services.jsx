import React from "react";

const serviceData = [
  {
    img: "serviceImg0",
    name: "Web Development",
    about: `Specializing in innovative web development and software solutions, I
        leverage cutting-edge.`,
  },
  {
    img: "serviceImg1",
    name: "Mobile Development",
    about: `Specializing in innovative web development and software solutions, I
        leverage cutting-edge.`,
  },
  {
    img: "serviceImg2",
    name: "DevOps",
    about: `Specializing in innovative web development and software solutions, I
        leverage cutting-edge.`,
  },
  {
    img: "serviceImg3",
    name: "CMS Developer",
    about: `Specializing in innovative web development and software solutions, I
        leverage cutting-edge.`,
  },
];

function Services() {
  return (
    <div className="services services-page" id="Services">
      <h1>Services</h1>
      <div className="heading-highlighter div">
        <div></div>
      </div>
      <div className="service-about">
        Specializing in innovative web development and software solutions, I
        leverage cutting-edge technologies to deliver customized, user-centric
        applications designed to meet diverse business needs and drive digital
        transformation.
      </div>
      <div className="service-board">
        <div className="service-board-left">
          <img src={require("./assests/service_image.png")} />
        </div>
        <div className="service-board-right">
          {serviceData.map((val, idx) => (
            <div className="service-card" key={idx}>
              <img
                className="service-card-img"
                src={require(`./assests/${val.img}.png`)}
              />
              <div className="service-card-name">{val.name}</div>
              <div className="service-card-about">{val.about}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
