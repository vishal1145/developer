import React from 'react'

const serviceData = [
  { img: "serviceImg0", name: "Web development", about: "blog, e-commerce" },
  {
    img: "serviceImg0",
    name: "UI/UX design",
    about: "Mobile app, website design",
  },
  {
    img: "serviceImg1",
    name: "Sound design",
    about: "Voice Over, Beat Making",
  },
  {
    img: "serviceImg2",
    name: "Game design",
    about: "Character Design, Props & Objects",
  },
  {
    img: "serviceImg3",
    name: "Photography",
    about: "portrait, product photography",
  },
  {
    img: "serviceImg4",
    name: "Advertising",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
  },
];

function Services() {
  return (
    <div className="services">
      <h1>My services</h1>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className='service-board'>
        {serviceData.map((val,idx)=>(
            <div className='service-card' key={idx}>
                { idx < 5 && <img className='service-card-img' src={require(`../assests/${val.img}.png`)}/>}
                <div className='service-card-name'>{val.name}</div>
                <div className='service-card-about'>{val.about}</div>
                {idx===5 && <div className='mt-4 order-now'>ORDER NOW <img className='right-arrow' src={require(`../assests/Frame2.png`)}/></div>}
            </div>
        ))}
      </div>
    </div>
  );
}

export default Services;