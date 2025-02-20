import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="top-bar-area text-light">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-9">
              <div className="flex-item left">
                <p className="more101">Hariom Feeds Pvt. Ltd.</p>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt" /> Gopalganj, Bihar
                  </li>
                  <li>
                    <i className="fas fa-phone-alt" />
                    <a href="tel:+91 7781021426"> +91 7781021426</a>
                  </li>
                </ul>
                <div className="content">
                  <strong>Email:</strong>
                  <a href="mailto:contact@hariomfeeds.co.in">
                    contact@hariomfeeds.co.in
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-end">
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  {/* <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li> */}
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header>
        {/* Start Navigation */}
        <nav className="navbar mobile-sidenav inc-shape navbar-common navbar-default validnavs">
          {/* <!-nav class="navbar mobile-sidenav inc-shape navbar-common navbar-sticky navbar-default validnavs"*/}
          {/* Start Top Search */}
          <div className="top-search">
            <div className="container-xl">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="input-group-addon close-search">
                  <i className="fa fa-times" />
                </span>
              </div>
            </div>
          </div>
          {/* End Top Search */}
          <div className="container d-flex justify-content-between align-items-center">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="./">
                <img
                  src="assets/images/logo.png"
                  className="logo"
                  alt="Hariom Feeds Pvt. Ltd."
                />
              </a>
            </div>
            {/* End Header Navigation */}
            {/* Main Nav */}
            <div className="main-nav-content">
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="navbar-menu">
                <img
                  src="assets/images/logo.png"
                  alt="Hariom Feeds Pvt. Ltd."
                />
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fas fa-times" />
                </button>
                <ul
                  className="nav navbar-nav navbar-right"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li className="dropdown">
                    <a href="./">Home</a>
                  </li>

                  <li className="dropdown">
                    <Link to="/about">About Us</Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/about"> About Us</Link>
                      </li>
                      <li>
                        <Link to="/directors-desk">Directors Desk</Link>
                      </li>
                      <li>
                        <Link to="/journey"> Our Journey</Link>
                      </li>
                      <li>
                        <Link to="/vision-mission"> Vision &amp; Mission</Link>
                      </li>
                      <li>
                        <Link to="/why-choose-us"> Why Choose Us</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Products
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="hariom-Layer.php">Layer Feed </a>
                      </li>
                      <li>
                        <a href="hariom-Broiler.php"> Broiler Feed </a>
                      </li>
                      <li>
                        <a href="hariom-Breeder.php"> Breeder Feed </a>
                      </li>
                    </ul>
                  </li>
                  {/* <-------------------------DIVISION SECTION START  -------------------------------------------*/}
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Divisions
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="Poultry.php">Poultry Division </a>
                      </li>
                      <li>
                        <a href="Cattle.php"> Cattle Division </a>
                      </li>
                      <li>
                        <a href="Integration.php"> Integration Division </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="gallery.php">Gallery</a>
                  </li>
                  <li>
                    <a href="contact.php">Contact</a>
                  </li>
                </ul>
              </div>
              {/* <-------------------------DIVISION SECTION END  -------------------------------------------*/}
              {/* /.navbar-collapse */}
              <div className="attr-right">
                {/* Start Atribute Navigation */}
                <div className="attr-nav">
                  <ul>
                    <li className="contact">
                      <div className="call">
                        {/* <div class="icon">
                        <i class="fas fa-comments-alt"></i>
                      </div>
                      <div class="info">
                        <p>Have any Questions?</p>
                        <h5><a href="enquiry.php"> Enquiry</a></h5>
                      </div> */}
                      </div>
                    </li>
                  </ul>
                </div>
                {/* End Atribute Navigation */}
              </div>
              {/* Overlay screen for menu */}
              <div className="overlay-screen" />
              {/* End Overlay screen for menu */}
            </div>
            {/* Main Nav */}
          </div>
        </nav>
        {/* End Navigation */}
      </header>
    </>
  );
};

export default Header;
