import React from "react";
import '../css/style.css';
import Profile from '../assests/Profile.jpg';
import Available from '../assests/Available.png';

function HomeLeft() {
  return (
    <div className="home-left p-4">
      <div className="d-flex flex-column align-items-center  mt-3">
        <div style={{ position: 'relative'}}>
          <img src ={Profile} style={{ position: 'relative', width: '100px', height: '100px' }}/>
          <img src ={Available} className="availableImg" />
        </div>
        <h5 className="mt-4">Rayan Adlardard</h5>
        <p className="" style={{color:"#767676"}}>Font-end Developer</p>
      </div>
    </div>
  )
}

export default HomeLeft;
