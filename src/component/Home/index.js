import React from 'react';
import '../css/style.css';
import Pick from '../assests/Your Image 1.png';
import LeftArrow from '../assests/Frame.png';
import HomeLeft from '../utility/homeLeft';
import HomeRight from '../utility/homeRight';

function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex">
        <HomeLeft/>
        <div className="col-9 home-mid">
          <div className="home-inner">
            <div className="h-m-div1">
              <h1 className="h-heading">
                I’m Rayan Adlrdard <span className="h-fd">Front-end</span>{" "}
                Developer
              </h1>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                suspendisse nunc lectus.
              </div>
              <button className="btn hire-btn">
                HIRE ME
                <img src={LeftArrow} className=''/>
              </button>
            </div>
            <div className="h-m-div2">
              <img src={Pick} />
            </div>
          </div>
        </div>
        <HomeRight/>
      </div>
    </div>
  );
}

export default Home;