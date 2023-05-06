import React from "react";
import Footerimg from "../Assets/footer-img.jpg";

const Footer = () => {
  return (
    <div className="backround"
      style={{
        backgroundImage: `url(${Footerimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>

      <div className="about-section-container"
        style={{
          height: "100wh",
          width: "100wv",
          paddingLeft: "10vw",
          paddingRight: "10vw"

        }}>
        <div className="footer-wrapper">

          <h1 className="primary-heading">
            Subsribe our newsletter for more update
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="about-section-image-container" style={{ paddingLeft: "8vw" }}>
          <button className="secondary-button" >
            Subscribe
          </button>
        </div>
      </div>

    </div>











  );
};

export default Footer;
