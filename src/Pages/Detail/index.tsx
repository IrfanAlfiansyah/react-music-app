import "./index.css";
import Header from "../../Component/header";

import map_pin from "../../assets/img/map-pin.png";
import clock from "../../assets/img/clock.png";
import attendees from "../../assets/img/attendees.png";
import map from "../../assets/img/map.png";
import banner from "../../assets/img/banner.jpg";

export default function Event() {
  return (
    <>
      <Header />
      <main className="primary">
        <div className="main-content">
          <div className="side-order">
            <img src={banner} alt="" />
            <div className="add-wishlist">
              Add to Wishlist
            </div>
          </div>
          <div className="event-class">
            <div className="head-event-class">
              <p className="event-text">Laskar Pelangi</p>
            </div>
            <div className="event-card">
              <div className="section-img">
                <img className="map" src={map_pin} alt="map-pin" />
              </div>
              <div className="event-description">
                <p className="section">Nidji</p>
              </div>
              <div className="section-img">
                <img className="map" src={clock} alt="clock" />
              </div>
              <div className="event-description">
                <p className="section">Laskar Pelangi</p>
              </div>
            </div>
            <div className="attendees-card">
              <div className="attendees-description">
                <p className="attendees">Attendees</p>
              </div>
              <div className="attendees-img">
                <img
                  className="attendees-img"
                  src={attendees}
                  alt="attendees"
                />
              </div>
            </div>
            <div className="detail-event">
              <div className="detail-event-info">
                <h1 className="detail-event-info-text">Music Detail</h1>
                <p className="detail-event-value-text">Enjoy the million of songs on the go on your smartphone, dekstop, ippod, everywhere for free...</p>
                <p className="detail-event-value-more">Read More</p>
                <p className="detail-event-info-text">Location</p>
                <img className="map-location" src={map} alt="map" />
              </div>
            </div>
            <button className="button-checkout">
              Play
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
