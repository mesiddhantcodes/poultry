import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light" style={{ backgroundImage: "url()" }}>
      <div className="container">
        <div className="f-items default-padding">
          <div className="row">
            {/* Single Itme */}
            <div className="col-lg-4 col-md-6 item">
              <div className="footer-item about">
                <img
                  className="logo"
                  src="/assets/images/logo.png"
                  alt="Hariom Feeds India Pvt. Ltd."
                />
                <p>
                  Hariom Feeds Pvt. Ltd. is a feed manufacturing company
                  producing compounded poultry feed, catering to the animal
                  health and nutrition industry
                </p>
              </div>
            </div>
            {/* End Single Itme */}
            {/* Single Itme */}
            <div className="col-lg-2 col-md-6 item">
              <div className="footer-item link">
                <h4 className="widget-title">Explore</h4>
                <ul>
                  <li>
                    <a href="./">Home</a>
                  </li>
                  <li>
                    <a href="about.php">About Us</a>
                  </li>
                  <li>
                    <a href="vision-mission.php">Vision &amp; Mission</a>
                  </li>
                  <li>
                    <a href="contact.php">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Itme */}
            {/* Single Itme */}
            <div className="col-lg-3 col-md-6 item">
              <div className="footer-item link">
                <h4 className="widget-title">Products</h4>
                <ul>
                  <li>
                    <a href="hariom-Layer.php">Layer Feed</a>
                  </li>
                  <li>
                    <a href="hariom-Broiler.php">Broiler Feed </a>
                  </li>
                  <li>
                    <a href="hariom-Breeder.php">Breeder Feed</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Itme */}
            {/* Single Itme */}
            <div className="col-lg-3 col-md-6 item">
              <div className="footer-item contact">
                <h4 className="widget-title">Contact Info</h4>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-home" />
                    </div>
                    <div className="content">
                      <strong>Corporate office:</strong>
                      405, Shashi Complex, Exibition Road, Patna-800001 (BIHAR)
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <strong>Email:</strong>
                      <a href="mailto:contact@hariomfeeds.co.in">
                        contact@hariomfeeds.co.in
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="content">
                      <strong>Phone:</strong>
                      <a href="tel:+91 9264496800">+91 7544000912</a>,
                      <a href="tel:+91 7544000903">7544000903</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Single Itme */}
          </div>
        </div>
        {/* Start Footer Bottom */}
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-12">
              <p>
                © Copyright 2025. Hariom Feeds Pvt. Ltd. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        {/* End Footer Bottom */}
      </div>
      <div className="shape-right-bottom">
        {/* <img src="assets/images/foooty.jpg" alt="Image Not Found" /> */}
      </div>
      <div className="shape-left-bottom">
        <img src="assets/images/foooty.jpg" alt="Image Not Found" />
      </div>
    </footer>
  );
};

export default Footer;
