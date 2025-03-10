import React from "react";
import "../../assets/css/Logo.css";


const Logo = () => {
  return (
    <>
      <div className="logo-wrapper">
        <img src="/assets/images/logo1.png" className="logo" alt="Hariom Feeds Pvt. Ltd." />
        <span className="registered-symbol">®</span>
      </div>
      <div className="logo-container">

        {/* Main Logo Text with Gradient Effect */}
        <h1 className="logo-text">Hariom Feeds Pvt. Ltd.

        </h1>
        {/* <span className="registered-symbol">®</span> */}


        {/* Certification Subtitle with a Stylish Look */}
        <p className="logo-subtitle">An ISO 9001:2015 Certified Company</p>
      </div>
    </>

  );
};

export default Logo;
