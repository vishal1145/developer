import React from 'react';
import '../css/style.css';
import Pick from '../assests/Your Image 1.png';
import LeftArrow from '../assests/Frame.png';

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 home-left">1 of 3</div>
        <div className="col-8 home-mid">
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
        <div className="col-1 home-right">3 of 3</div>
      </div>
    </div>
  );
}

export default Home;