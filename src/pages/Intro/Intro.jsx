import Pick from "../assests/Your Image 1.png";
import LeftArrow from "../assests/Frame.png";

function Intro() {
  return (
    <div>
      <div className="home-inner">
        <div className="h-m-div1">
          <h1 className="h-heading">
            I’m Rayan Adlrdard <span className="h-fd">Front-end</span> Developer
          </h1>
          <div className="h-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </div>
          <button className="hire-btn">
            HIRE ME
            <img src={LeftArrow} className="leftArrow" />
          </button>
        </div>
        <div className="h-m-div2">
          <img src={Pick} className="profile-img" />
        </div>

        <img
          src={require(`../assests/Ellipse1.png`)}
          id="Ellipse1"
          className="into-bg-icons"
          alt=""
        />
        <img
          src={require(`../assests/Ellipse2.png`)}
          id="Ellipse2"
          className="into-bg-icons"
          alt=""
        />
        <img
          src={require(`../assests/Ellipse3.png`)}
          id="Ellipse3"
          className="into-bg-icons"
          alt=""
        />
        <img
          src={require(`../assests/Ellipse4.png`)}
          id="Ellipse4"
          className="into-bg-icons"
          alt=""
        />
        <img
          src={require(`../assests/Ellipse5.png`)}
          id="Ellipse5"
          className="into-bg-icons"
          alt=""
        />
        <div
          src={require(`../assests/Ellipse5.png`)}
          id="Ellipse6"
          className="into-bg-icons"
        ></div>
        <div
          src={require(`../assests/Ellipse5.png`)}
          id="Ellipse7"
          className="into-bg-icons"
        ></div>
      </div>
    </div>
  );
}

export default Intro;
