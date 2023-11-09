import React from 'react'

const serviceData = [
  { img: 'Img1', name: "Web development", about: "blog, e-commerce" },
  { img: 'Img2', name: "UI/UX design", about: "Mobile app, website design" },
  { img: 'Img3', name: "Sound design", about: "Voice Over, Beat Making" },
  { img: 'Img4', name: "Game design", about: "Character Design, Props & Objects" },
  {  img: 'Img5',name: "Photography", about: "portrait, product photography" },
  { img: 'Img6',
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
                { idx < 5 && <img className='service-card-img' src={require(`../assests/serviceImg${idx}.png`)}/>}
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