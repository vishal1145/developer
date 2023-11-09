import React from "react";
import "./WorkHistory.css";

const educationData = [
  {
    course: "Lead Web Designer",
    type: "Student",
    certificate: "Certificate of Web Training",
    date: "Jan 2018 - Dec 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    course: "Junior Web Designer",
    type: "Student",
    certificate: "Certificate of Web Training",
    date: "Jan 2018 - Dec 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    course: "Senior Web Designer",
    type: "Student",
    certificate: "Certificate of Web Training",
    date: "Jan 2018 - Dec 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
];

function WorkHistory() {
  return (
    <div className="services" id="workHistory">
      <h1>Work History</h1>
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
                {val.type}{" "}
                <span className="date">{val.date}</span>
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

export default WorkHistory;
