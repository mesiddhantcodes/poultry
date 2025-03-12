import { Link } from "react-router-dom";
import Logo from "./Logo";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="bg-dark text-light" style={{ backgroundImage: "url()" }}>
      <div className="container global-paragraph">
        <div className="f-items default-padding">
          <div className="row">
            {/* Single Itme */}
            <div className="col-lg-4 col-md-6 item ">
              <div className="footer-item about">
                <div className="footer-logo">
                  <a className="navbar-brand d-flex align-items-center" href="/">
                    <div className="footer-logo-wrapper ">
                      <Logo />
                    </div>
                  </a>


                </div>

                <p align="">
                  Hariom Feeds Pvt.Ltd. is a feed manufacturing company
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
                    <Link to="./">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/mission"> Vision &amp; Mission</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
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
                    <Link to="/layer-feed">Layer Feed</Link>
                  </li>
                  <li>
                    <Link to="/broiler-feed">Broiler Feed </Link>
                  </li>
                  <li>
                    <Link to="/breeder-feed">Breeder Feed </Link>

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
                      <strong>Corporate office :</strong>
                      405, Shashi Complex, Exibition Road, Patna-800001 (BIHAR)
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <strong>Email :</strong>
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
                      <strong>Phone :</strong>
                      <a href="tel:+91 9264496800">+917544000912</a>,
                      <a href="tel:+91 7544000903">+917544000903</a>
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
