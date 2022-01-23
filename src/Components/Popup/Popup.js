import React from "react";

const Popup = (props) => {
  return (
    <div
      style={{ zINdex: 1000 }}
      className="popupBox position-absolute top-0 left-0 w-100 h-100vh d-flex justify-content-center align-items-center"
    >
      <div className="popup  w-25 bg-dark text-white p-4">
        <div className="title mb-5 h3 text-white text-center">User List</div>
        <div className="d-flex justify-content-between">
          <p className="h5 mb-3 text-white">Name</p>
          <p className="h5 mb-3 text-white">Company</p>
        </div>
        {props.users.map((el) => {
          return (
            <div className="d-flex justify-content-between">
              <p>{el.name}</p>
              <p>{el.company}</p>
            </div>
          );
        })}
        <div className="text-center ">
          {" "}
          <button onClick={props.clicked} className="btn btn-warning mx-auto">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
