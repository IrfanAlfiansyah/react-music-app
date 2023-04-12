import React from "react";
// import { useNavigate } from "react-router-dom";
import "./index.css";
import bell from "../../assets/img/bell.png";
import image from "../../assets/img/user.png";

export default function Header() {

  return (
    <div className="header">
      <div className="header-text">
        <div className="header-title">
          <h1>Replay</h1>
        </div>
        <div className="header-name">
          {/* <h1>Hello Anonymous!</h1> */}
        </div>
        <div className="header-profile">
            <img src={bell} width={30} height={30} alt="notification"></img>
          <div style={{ cursor: "pointer" }}>
            <img
              src={image}
              className="photo"
              width={30}
              height={30}
              alt="profile"
            />
          </div>
            <h5>anonymous</h5>
        </div>
      </div>
    </div>
  );
}
