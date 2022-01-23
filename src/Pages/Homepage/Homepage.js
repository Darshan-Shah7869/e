import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Popup from "../../Components/Popup/Popup";

import axios from "axios";

import img from "./../../Images/DarshanShah.jpg";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6")
      .then((data) => {
        const usersData = data.data.clients.map((el) => {
          return { name: el.name, company: el.company };
        });
        setUsers(usersData);
      });
  }, []);

  return (
    <div className="w-100 position-relative  h-100vh bg-gradient-default ">
      <Navbar />
      <div className="container mt-5 h-75">
        <div className="body h-100  p-4 bg-white w-100 mx-auto d-flex flex-column justify-content-between">
          {showPopup && (
            <Popup
              users={users}
              clicked={() => {
                setShowPopup(false);
              }}
            />
          )}
          <div className="head d-flex justify-content-between align-items-center">
            <div className="left d-flex">
              <div>
                <img
                  style={{
                    width: "100px",
                    height: "auto",

                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                  src={img}
                  alt=""
                  className="avatar avatar-lg d-inline mr-3"
                />
              </div>
              <div>
                <div className="display-4">Darshan Shah</div>
                <div className="mb-1">Ahmedabad, Gujarat</div>
                <a href="https://portfolio-f0334.web.app/" target="_blank">
                  {" "}
                  <div className="btn btn-sm btn-info">CONNECT</div>
                </a>
              </div>
            </div>
            <div className="right">
              <div style={{ marginTop: "-16px" }} className="">
                3rd Year BE IT
              </div>
              <div>LD college of Engineering</div>
            </div>
          </div>
          <div className="text-center">
            <div className="title h3 text-center">
              Full Stack Developer &amp; <br /> UI / UX Designer
            </div>
            {!showPopup && (
              <button
                style={{ zINdex: 100 }}
                onClick={() => {
                  setShowPopup(true);
                }}
                className="btn btn-primary mx-auto "
              >
                Click Here
              </button>
            )}
          </div>
          <div>
            <div className="skillTitle h4 text-center ">Skills</div>
            <div className="skills w-50 text-center mx-auto">
              <div className="skill btn btn-sm mb-2 btn-danger">HTML</div>
              <div className="skill btn btn-sm mb-2 btn-primary">CSS</div>
              <div className="skill btn btn-sm mb-2 btn-success">
                Javascript
              </div>
              <div className="skill btn btn-sm mb-2 btn-info">ReactJS</div>
              <div className="skill btn btn-sm mb-2 btn-warning">AngularJS</div>
              <div className="skill btn btn-sm mb-2 btn-success">Bootstrap</div>
              <div className="skill btn btn-sm mb-2 btn-default">SCSS</div>
              <div className="skill btn btn-sm mb-2 btn-primary">NodeJS</div>
              <div className="skill btn btn-sm mb-2 btn-warning">MongoDB</div>
              <div className="skill btn btn-sm mb-2 btn-info">Mongoose</div>
              <div className="skill btn btn-sm mb-2 btn-danger">Firebase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
