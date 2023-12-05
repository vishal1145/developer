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
            <div className="experience">
              Years <br />
              Working
              <br /> Experience
            </div>
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
            <div className="about-card1">
              <img src={require("./assests/mobile_web2.png")} />
            </div>
            <div className="fw-bold a-head-des">Product Design</div>
            <div className="text-small">
              I Am Zakir Ullah, I Am a Product Designer and I am very
              passaniate.
            </div>
          </div>
          <div className="about-card active">
            <div className="about-card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="35"
                height="35"
                x="0"
                y="0"
                viewBox="0 0 32 32"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
                className=""
              >
                <g>
                  <g fill="#000">
                    <path
                      d="M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 14a1 1 0 0 1 1 1v6a3 3 0 1 0 6 0v-6a1 1 0 1 1 2 0v6a5 5 0 0 1-10 0v-6a1 1 0 0 1 1-1zM19.858 14.486a1 1 0 0 0-1.715 1.028L20.833 20l-2.69 4.486a1 1 0 0 0 1.715 1.029L22 21.944l2.143 3.57a1 1 0 1 0 1.715-1.029L23.166 20l2.692-4.486a1 1 0 1 0-1.715-1.028L22 18.055z"
                      fill="#ab9be2"
                      opacity="1"
                      data-original="#000000"
                      className=""
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M0 4a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm30 0v5H2V4a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1zm0 7H2v17a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1z"
                      clip-rule="evenodd"
                      fill="#ab9be2"
                      opacity="1"
                      data-original="#000000"
                      class=""
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="fw-bold a-head-des">UI/UX Design</div>
            <div className="text-small">
              I Am Zakir Ullah, I Am a Product Designer and I am very
              passaniate.
            </div>
          </div>
          <div className="about-card">
            <div className="about-card3">
              <img src={require("./assests/interactive_design.png")} />
            </div>
            <div className="fw-bold a-head-des">Interactive Design</div>
            <div className="text-small">
              I Am Zakir Ullah, I Am a Product Designer and I am very
              passaniate.
            </div>
          </div>
        </div>
      </div>
      <div className="a-div2 d-flex d-none">
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
              <div className="ui-design">100% UI Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;