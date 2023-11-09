import React from "react";
import "../css/style.css";
import Profile from "../assests/Profile.jpg";
import Available from "../assests/Available.png";

const profileData = {};

function HomeLeft() {
  return (
    <div className="home-left">
      <div className="">
        <div className="d-flex flex-column align-items-center  mt-3">
          <div style={{ position: "relative" }}>
            <img
              src={Profile}
              style={{ position: "relative", width: "100px", height: "100px" }}
            />
            <img src={Available} className="availableImg" />
          </div>
          <h5 className="mt-4">Rayan Adlardard</h5>
          <p className="" style={{ color: "#767676" }}>
            Font-end Developer
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div className="profile-icons">
          <a href="#" target="_blank">
            <img src={require(`../assests/Icons-facebook.png`)} />
          </a>
        </div>
        <div className="profile-icons">
          <a href="#" target="_blank">
            <img src={require(`../assests/Icons-instagram.png`)} />
          </a>
        </div>
        <div className="profile-icons">
          <a href="#" target="_blank">
            <img src={require(`../assests/Icons-twitter.png`)} />
          </a>
        </div>
        <div className="profile-icons">
          <a href="#" target="_blank">
            <img src={require(`../assests/Icons-linkedin.png`)} />
          </a>
        </div>
        <div className="profile-icons">
          <a href="#" target="_blank">
            <img src={require(`../assests/Icons-Youtube.png`)} />
          </a>
        </div>
        <div className="profile-icons">
          <a href="#" target="_blank">
            <img src={require(`../assests/Icons-dribbble.png`)} />
          </a>
        </div>
      </div>
      <div className="homeLeft-about">
        <div className="d-flex justify-content-between mb-2">
          <div className="bg-yellow p-1">Age:</div>
          <div>24</div>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="bg-yellow p-1">Residence:</div>
          <div>BD</div>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="bg-yellow p-1">Freelance:</div>
          <div className="text-green">Available</div>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="bg-yellow p-1">Address:</div>
          <div>Dhaka,Bangladesh</div>
        </div>
      </div>
      <div className="home-left-language">
        <h5 className="mt-4">Languages</h5>
        <div className="mb-1">
          <div className="d-flex justify-content-between mb-1">
            <div>Bangla</div>
            <div>100%</div>
          </div>
          <div class="progress" style={{ height: "6px" }}>
            <div class="progress-bar" style={{ width: "100%" }}></div>
          </div>
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between mb-1">
            <div>English</div>
            <div>80%</div>
          </div>
          <div class="progress" style={{ height: "6px" }}>
            <div class="progress-bar" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between mb-1">
            <div>Spanish</div>
            <div>60%</div>
          </div>
          <div class="progress" style={{ height: "6px" }}>
            <div class="progress-bar" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>
      <div className="home-left-language">
        <h5 className="mt-4">Skills</h5>
        <div className="mb-1">
          <div className="d-flex justify-content-between mb-1">
            <div>Html</div>
            <div>90%</div>
          </div>
          <div class="progress" style={{ height: "6px" }}>
            <div class="progress-bar" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between mb-1">
            <div>CSS</div>
            <div>85%</div>
          </div>
          <div class="progress" style={{ height: "6px" }}>
            <div class="progress-bar" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between mb-1">
            <div>Js</div>
            <div>80%</div>
          </div>
          <div class="progress" style={{ height: "6px" }}>
            <div class="progress-bar" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between mb-1">
            <div>PHP</div>
            <div>75%</div>
          </div>
          <div class="progress" style={{ height: "6px" }}>
            <div class="progress-bar" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between mb-1">
            <div>WordPress</div>
            <div>85%</div>
          </div>
          <div class="progress" style={{ height: "6px" }}>
            <div class="progress-bar" style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>
      <div className="home-left-language">
        <h5 className="mt-4">Extra Skills</h5>
        <div className="mb-1">
          <div className="d-flex mb-1 extraSkill">
            <div>
              <img src={require(`../assests/extraSkillIcons.png`)} />
            </div>
            <div>Bootstrap, Materialize</div>
          </div>
          <div className="d-flex mb-1 extraSkill">
            <div>
              <img src={require(`../assests/extraSkillIcons.png`)} />
            </div>
            <div>Stylus, Saas, Less</div>
          </div>
          <div className="d-flex mb-1 extraSkill">
            <div>
              <img src={require(`../assests/extraSkillIcons.png`)} />
            </div>
            <div>Gulp, Webpack, Grunt</div>
          </div>
          <div className="d-flex mb-1 extraSkill">
            <div>
              <img src={require(`../assests/extraSkillIcons.png`)} />
            </div>
            <div>GIT Knowledge</div>
          </div>
        </div>
      </div>
      <div className="home-left-language download-btn">
        <a href="your_cv_file.pdf" download>
          <button className="btn bg-yellow">
            DOWNLOAD CV
            <img src={require(`../assests/dowloadIcon.png`)} />
          </button>
        </a>
      </div>
    </div>
  );
}

export default HomeLeft;
