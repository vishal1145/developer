import React from "react";
import "../css/style.css";
import "./Education.css";

const educationData = [
  {
    course: "University of Toronto",
    type: "Student",
    certificate: "Certificate of Web Training",
    date: "Jan 2018 - Dec 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    course: "Programming Course",
    type: "Student",
    certificate: "Certificate of Web Training",
    date: "Jan 2018 - Dec 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    course: "Web Developer course",
    type: "Student",
    certificate: "Certificate of Web Training",
    date: "Jan 2018 - Dec 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
];

function Education() {
  return (
    <div className="services">
      <h1>Education</h1>
      <div className="service-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="education-board">
        {educationData.map((val, idx) => (
          <div className="mb-4 d-flex">
            <div className="education-div1">
              <div className="text-bold">{val.course}</div>
              <div className="text-small student">
                {val.type} <span className="bg-yellow">{val.date}</span>
              </div>
            </div>
            <div className="education-div2">
              <div className="text-bold">{val.certificate}</div>
              <div className="text-small text-gray">{val.about}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
