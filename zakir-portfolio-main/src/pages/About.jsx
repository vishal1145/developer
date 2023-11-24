import React from 'react'

function About() {
  return (
    <div className="services" id="About">
      <div className="a-div1">
        <h1>About Me</h1>
        <div className="heading-highlighter">
          <div></div>
        </div>
        <div className="a-div1-inner">
          <div className="a-div1-inner-left">
            <div className="experience-count">3+</div>
            <div className="experience">Years Working Experience</div>
          </div>
          <div className="a-div1-inner-right">
            <div>
              I Am Zakir Ullah, I Am a Product Designer and I am very passaniate
              and decated about my work with 3+ year of experience. As a
              professional Product designer. I have actue the skills and
              knowledge necessary to Make your project success.
            </div>
            <div className="about-email">zakirdesign01@gmail.com</div>
          </div>
        </div>
        <div className="about-cards">
          <div className="about-card">
            <div>
              <img
                src={require("./assests/product.png")}
                width={30}
                height={30}
              />
            </div>
            <div className="fw-bold a-head-des">Product Design</div>
            <div className="text-small">
              I Am Zakir Ullah, I Am a Product Designer and I am very
              passaniate.
            </div>
          </div>
          <div className="about-card active">
            <div>
              <img src={require("./assests/ux.png")} width={30} height={30} />
            </div>
            <div className="fw-bold a-head-des">UI/UX Design</div>
            <div className="text-small">
              I Am Zakir Ullah, I Am a Product Designer and I am very
              passaniate.
            </div>
          </div>
          <div className="about-card">
            <div>
              <img
                src={require("./assests/interactive.png")}
                width={30}
                height={30}
              />
            </div>
            <div className="fw-bold a-head-des">Interactive Design</div>
            <div className="text-small">
              I Am Zakir Ullah, I Am a Product Designer and I am very
              passaniate.
            </div>
          </div>
        </div>
      </div>
      <div className="a-div2 d-flex">
        <div className="yellow-box">
          <div>
            <div>
              <img
                src={require("./assests/alarm_clock.png")}
                width={30}
                height={30}
              />
            </div>
            <div className="fw-500">In Time Projects</div>
          </div>
        </div>
        <div className="d-flex a-details">
          <div className="mx-4">
            <div className="fs-large fw-bold">3+</div>
            <div className="fw-500">Years of Experience</div>
          </div>
          <div className="mx-4">
            <div className="fs-large fw-bold">50+</div>
            <div className="fw-500">Project Completed</div>
          </div>
          <div className="mx-4">
            <div className="fs-large fw-bold">30+</div>
            <div className="fw-500">Happy Clients</div>
          </div>
        </div>
        <div className="yellow-box">
          <div>
            <div>
              <img
                src={require("./assests/blue_check.png")}
                width={30}
                height={30}
              />
            </div>
            <div>
              <div className="fw-500">Project Done</div>
              <div className='ui-design'>100% UI Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;