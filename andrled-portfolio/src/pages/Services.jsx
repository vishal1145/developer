import React from 'react'

const serviceData = [
  { img: "serviceImg0", name: "Web development", about: "blog, e-commerce" },
  {
    img: "serviceImg1",
    name: "UI/UX Design",
    about: "Mobile app, website design",
  },
  {
    img: "serviceImg2",
    name: "Sound Design",
    about: "Voice Over, Beat Making",
  },
  {
    img: "serviceImg3",
    name: "Game Design",
    about: "Character Design, Props & Objects",
  },
  {
    img: "serviceImg4",
    name: "Photography",
    about: "portrait, product photography",
  },
  {
    img: "serviceImg4",
    name: "Advertising",
    about: "portrait, product advertising",
  },
];

function Services() {
  return (
    <div className="services services-page" id="services">
      <h1>My Services</h1>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="service-board">
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
  );
}

export default Services;