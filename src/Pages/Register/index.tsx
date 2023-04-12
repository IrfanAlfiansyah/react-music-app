import React from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";
import person from "../../assets/img/person.png";
import music from "../../assets/img/music.png";
import mail from "../../assets/img/mail.png";
import lock from "../../assets/img/lock.png";

export default function Register() {
  const navigate = useNavigate();
  return (
    <main title="Sign Up">
      <div className="main-container">
        <div className="left-side">
          <h1 className="title-logo" 
              onClick={() => {
              navigate(`/`);
              }}>Replay</h1>
          <div className="phone-group">
            <img
              src={music}
              alt="music"
              width={300}
              height={300}
            ></img>
          </div>
          <h2 className="app-text">Over 100+ Milion Songs</h2>
          <p className="app-description">
            Enjoy the million of songs on the go on your smartphone, dekstop, ippod, everywhere for free...
          </p>
        </div>
        <div className="right-side">
          <div className="responsive">
            <h1 className="phone-responsive">Sign Up</h1>
            <p className="phone-responsive-desc">
              Create your account to access FazzPay.
            </p>
          </div>
          <h1 className="right-text-signup">
            Registration
          </h1>
          <p className="app-description_right">
            Music that inspire you to grow!
          </p>
          <div className="form-input">
            <div className="form-input_signup">
              <img src={person} width={20} height={20} alt="person"></img>
              <input
                type="text"
                placeholder="Enter your firstname"
                name="firstName"
              />
            </div>
            <div className="form-input_signup">
              <img src={person} width={20} height={20} alt="person"></img>
              <input
                type="text"
                placeholder="Enter your lastname"
                name="lastName"
              />
            </div>
            <div className="form-input_signup">
              <img src={mail} width={20} height={20} alt="mail"></img>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div className="form-input_signup">
              <img src={lock} width={20} height={20} alt="lock"></img>
              <input
                placeholder="Create your password"
                name="password"
              />
            </div>
          </div>
            <button
              className="button-signup"
            >
              Sign Up
            </button>
          <div className="has-account-text">
            <p className="has-account">Already have an account? Let’s</p>
            <button
              className="has-account-button"
              onClick={() => {
                navigate(`/login`);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
