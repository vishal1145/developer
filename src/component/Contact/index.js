import React from "react";
import "../css/style.css";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leave-us">
        <h1 className="text-bold">Leave Us Your Info</h1>
        <div className="leave-us-form">
          <label htmlFor="name" className="form-label">
            Your Full Name (Required)
          </label>
          <input type="text" className="form-control" />
          <label htmlFor="email">Your Email(Required)</label>
          <input type="email" className="form-control" />
          <label htmlFor="name">Your Subject (Required)</label>
          <input type="text" className="form-control" />
          <label htmlFor="name">Your Message (Required)</label>
          <input type="text" className="form-control" />
          <input type="sumbit" className="btn bg-yellow" value="Submit" />
        </div>
      </div>
      <div className="contact-info">
        <h1>Contact Information</h1>
        <div className="contact-card">
          <div className="contact-card-details">
            <img src={require("../assests/mail.png")} />
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <div>Contact</div>
              <div>Bangladesh</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>City</div>
              <div>Dhaka</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Street</div>
              <div>35 vhatara, Badda</div>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card-details">
            <img src={require("../assests/Mobile.png")} />
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <div>Email:</div>
              <div>Youemial@gmail.com</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Skype: </div>
              <div>@YourUsernamer</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Telegram</div>
              <div>@YourUsernamer</div>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card-details">
            <img src={require("../assests/location.png")} />
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <div>Support Services: </div>
              <div>15 hs</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Office:</div>
              <div>+63521735216</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Personal</div>
              <div>+7623579</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
