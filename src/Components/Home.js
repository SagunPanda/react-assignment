import React from "react";
import BannerImage from "../Assets/home-banner-image.png";
import Upperbar from "./Upperbar";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <>
      <Upperbar />
      <Navbar />

      <div className="home-container"
        style={{
          height: "100wh",
          width: "100wv",
          backgroundColor: "#daeefe",
          paddingLeft: "10vw",
          paddingRight: "10vw",

        }}
      >

        <div className="home-banner-container">
          <div className="home-bannerImage-container">

          </div>
          <div className="home-text-section">
            <p className="primary-text">
              Ki Name dhake Bolito tomake
            </p>
            <h1 className="primary-heading">
              We are Consulting for Your Bisiness Finances.
            </h1>
            <p className="primary-text">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <button className="secondary-button">
              Start Now
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
