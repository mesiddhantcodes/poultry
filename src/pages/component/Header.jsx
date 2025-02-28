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
                <img src="assets/images/logo1.png" className="logo" alt="Hariom Feeds Pvt. Ltd." />
                <Logo />
              </a>

            </div>

            {/* Main Navigation */}
            <div className={`main-nav-content ${menuOpen ? "show-menu" : ""}`}>
              <button type="button" className="navbar-toggle close-btn" onClick={toggleMenu}>
                <i className="fas fa-times" />
              </button>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>

                {/* About Us Dropdown */}
                {/* <li className="dropdown">

                </li> */}

                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle" onClick={() => toggleDropdown("about")}>
                    About Us
                  </Link>
                  <ul className={`dropdown-menu ${dropdownOpen === "about" ? "show" : ""}`}>
                    <li><Link to="/about" >About Us</Link></li>
                    <li><Link to="/director" >Directors Desk</Link></li>
                    <li><Link to="/journey" >Our Journey</Link></li>
                    <li><Link to="/mission" >Vision & Mission</Link></li>
                    <li><Link to="/why-choose-us" >Why Choose Us</Link></li>
                  </ul>
                </li>
                {/* Products Dropdown */}
                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle" onClick={() => toggleDropdown("products")}>
                    Products
                  </Link>
                  <ul className={`dropdown-menu ${dropdownOpen === "products" ? "show" : ""}`}>
                    <li><Link to="/layer-feed" onClick={toggleMenu}>Layer Feed</Link></li>
                    <li><Link to="/broiler-feed" onClick={toggleMenu}>Broiler Feed</Link></li>
                    <li><Link to="/breeder-feed" onClick={toggleMenu}>Breeder Feed</Link></li>
                  </ul>
                </li>

                {/* Divisions Dropdown */}
                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle" onClick={() => toggleDropdown("divisions")}>
                    Divisions
                  </Link>
                  <ul className={`dropdown-menu ${dropdownOpen === "divisions" ? "show" : ""}`}>
                    <li><Link to="/poultry-division" onClick={toggleMenu}>Poultry Division</Link></li>
                    <li><Link to="https://shivgangapashuaahar.com/index.php" onClick={toggleMenu}>Cattle Division</Link></li>
                    <li><Link to="/integration" onClick={toggleMenu}>Integration Division</Link></li>
                  </ul>
                </li>

                <li><a href="gallery.php" onClick={toggleMenu}>Gallery</a></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
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
