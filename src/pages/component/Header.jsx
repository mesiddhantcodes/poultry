import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <>
      <div className="top-bar-area text-light">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-9">
              <div className="flex-item left">
                <p className="more101">Hariom Feeds Pvt. Ltd. </p>
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
        <nav className="navbar mobile-sidenav navbar-common">
          <div className="container d-flex justify-content-between align-items-center">
            {/* Navbar Header */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" onClick={toggleMenu}>
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand d-flex align-items-center" href="/">
                <div className="logo-wrapper">
                  <img src="assets/images/logo1.png" className="logo" alt="Hariom Feeds Pvt. Ltd." />
                  <span className="registered-symbol">®</span>
                </div>
                <Logo />
              </a>

            </div>

            {/* Main Navigation */}
            <div className={`main-nav-content ${menuOpen ? "show-menu" : ""}`}>
              <button type="button" className="navbar-toggle close-btn" onClick={toggleMenu}>
                <i className="fas fa-times" />
              </button>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/" onClick={toggleMenu} className="textt">Home</Link></li>

                {/* About Us Dropdown */}
                {/* <li className="dropdown">

                </li> */}

                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle textt" onClick={() => toggleDropdown("about")}>
                    About Us
                  </Link>
                  <ul className={`dropdown-menu ${dropdownOpen === "about" ? "show" : ""}`}>
                    <li><Link to="/about" className="textt">About Us</Link></li>
                    <li><Link to="/director" className="textt">Directors Desk</Link></li>
                    <li><Link to="/journey" className="textt" >Our Journey</Link></li>
                    <li><Link to="/mission" className="textt">Vision & Mission</Link></li>
                    <li><Link to="/why-choose-us" className="textt" >Why Choose Us</Link></li>
                  </ul>
                </li>
                {/* Products Dropdown */}
                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle textt" onClick={() => toggleDropdown("products")}>
                    Products
                  </Link>
                  <ul className={`dropdown-menu ${dropdownOpen === "products" ? "show" : ""}`}>
                    <li><Link to="/layer-feed" className="textt">Layer Feed</Link></li>
                    <li><Link to="/broiler-feed" className="textt" >Broiler Feed</Link></li>
                    <li><Link to="/breeder-feed" className="textt" >Breeder Feed</Link></li>
                  </ul>
                </li>

                {/* Divisions Dropdown */}
                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle textt" onClick={() => toggleDropdown("divisions")}>
                    Divisions
                  </Link>
                  <ul className={`dropdown-menu ${dropdownOpen === "divisions" ? "show" : ""}`}>
                    <li><Link to="/poultry-division" className="textt">Poultry Division</Link></li>
                    <li><Link to="https://shivgangapashuaahar.com/index.php" className="textt" >Cattle Division</Link></li>
                    <li><Link to="/integration" className="textt" >Integration Division</Link></li>
                  </ul>
                </li>

                <li><Link to="/gallery" className="textt" >Gallery</Link></li>
                <li><Link to="/contact" className="textt" >Contact</Link></li>
              </ul>
            </div>

            {/* Overlay screen for menu */}
            {menuOpen && <div className="overlay-screen show" onClick={toggleMenu} />}
          </div>
        </nav>
      </header>

      {/* Custom CSS */}

    </>
  );
};

export default Header;
