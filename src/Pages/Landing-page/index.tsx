import React from 'react'
import "./index.css";
import Header from "../../Component/header";
import arrow from "../../assets/img/arrow.png";
import banner from "../../assets/img/banner.jpg";
import { useNavigate } from "react-router-dom";

export default function landingPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  
  return (
    <>
      <div className="container-fluid">
        <Header />
        <main className="box-1" style={{ height: "auto", width: "100%" }}>
          <div className="home-banner">
            <div className="search-section">
              <h1 className="banner-text">Enjoy the million of songs on the go on your smartphone, dekstop, ippod, everywhere for free...</h1>
              <div className="search text-center gap-3">
                <input
                  type="text"
                  placeholder="Search Music..."
                />
                <button className="search-button" >
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </main>
        <main className="row event-box">
          <div className="box-2">
            <div className="row justify-content-center" style={{ margin: 0 }}>
              <div className="line-event">--- Replay</div>
            </div>
            <h1 className="event-for-you">Music For You</h1>
            <div className="card-container gap-5">
            <div className="card-music" onClick={() => {
                navigate(`detail`);
              }}>
              <img src={banner} alt="music" />
              <h3 className="name">Laskar Pelangi</h3>
              <h5 className="singer">Nidji</h5>
            </div>
            <div className="card-music" onClick={() => {
                navigate(`detail`);
              }}>
              <img src={banner} alt="music" />
              <h3 className="name">Laskar Pelangi</h3>
              <h5 className="singer">Nidji</h5>
            </div>
            <div className="card-music" onClick={() => {
                navigate(`detail`);
              }}>
              <img src={banner} alt="music" />
              <h3 className="name">Laskar Pelangi</h3>
              <h5 className="singer">Nidji</h5>
            </div>
            <div className="card-music" onClick={() => {
                navigate(`detail`);
              }}>
              <img src={banner} alt="music" />
              <h3 className="name">Laskar Pelangi</h3>
              <h5 className="singer">Nidji</h5>
            </div>
            <div className="card-music" onClick={() => {
                navigate(`detail`);
              }}>
              <img src={banner} alt="music" />
              <h3 className="name">Laskar Pelangi</h3>
              <h5 className="singer">Nidji</h5>
            </div>
            </div>
            <div className="d-flex gap-2 justify-content-center w-100 my-5">
              <button className="btn btn-primary">
                &lt;
              </button>
              <button
                className="btn btn-primary"
              >
                &gt;
              </button>
            </div>
            <div className="row justify-content-center" style={{ margin: 0 }}>
              <button className="see-all">See All</button>
            </div>
          </div>
        </main>
        <main className="row category-box">
          <div className="box-3">
            <div className="row justify-content-center" style={{ margin: 0 }}>
              <div className="line-event">--- C A T E G O R Y</div>
            </div>
            <h1 className="category-for-you">Browse Music By Category</h1>
          </div>
        </main>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="row collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav justify-content-center gap-5 ">
                <a className="nav-item nav-link" href="#">
                  Rock
                </a>
                <a className="nav-item nav-link" href="#">
                  Pop
                </a>
                <a className="nav-item nav-link" href="#">
                  Jazz
                </a>
                <a className="nav-item nav-link " href="#">
                  R & B
                </a>
                <a className="nav-item nav-link" href="#">
                  Accapela
                </a>
                <a className="nav-item nav-link" href="#">
                  Festival
                </a>
                <a className="nav-item nav-link" href="#">
                  Dangdut
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="row partner">
          {/* <img className="partner" src={} alt="partner" /> */}
        </div>
      </div>
    </>
  )
}
