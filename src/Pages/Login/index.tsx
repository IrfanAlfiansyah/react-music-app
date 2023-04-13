import React from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";
import music from "../../assets/img/music.png";
import mail from "../../assets/img/mail.png";
import lock from "../../assets/img/lock.png";

export default function Login() {
  const navigate = useNavigate();
  return (
    <main title="Sign Up">
      <div className="main-container">
        <div className="left-side">
          <h1 className="title-logo" 
              onClick={() => {
              navigate(`/`);
              }}
              >Replay</h1>
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
            Login
          </h1>
          <p className="app-description_right">
            Login to your existing account to access all the features in Replay.
          </p>
          <div className="form-input">
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
              onClick={() => {
                navigate(`/`);
              }}
            >
              Login
            </button>
              <div className="forgot-button">
                <button
                  className="forgot"
                >
                  Forgot password?
                </button>
              </div>
          <div className="has-account-text">
            <p className="has-account">Don’t have an account? Let’s</p>
            <button
              className="has-account-button"
              onClick={() => {
                navigate(`/register`);
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
