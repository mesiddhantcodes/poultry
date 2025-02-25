import React, { useState } from "react";
import { Link } from "react-router-dom";

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
              <a className="navbar-brand" href="/">
                <img src="assets/images/logo.png" className="logo" alt="Hariom Feeds Pvt. Ltd." />
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
                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle" onClick={() => toggleDropdown("about")}>
                    About Us
                  </Link>
                  <ul className={`dropdown-menu ${dropdownOpen === "about" ? "show" : ""}`}>
                    <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                    <li><Link to="/director" onClick={toggleMenu}>Directors Desk</Link></li>
                    <li><Link to="/journey" onClick={toggleMenu}>Our Journey</Link></li>
                    <li><Link to="/mission" onClick={toggleMenu}>Vision & Mission</Link></li>
                    <li><Link to="/why-choose-us" onClick={toggleMenu}>Why Choose Us</Link></li>
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
                <li><a href="contact.php" onClick={toggleMenu}>Contact</a></li>
              </ul>
            </div>

            {/* Overlay screen for menu */}
            {menuOpen && <div className="overlay-screen" onClick={toggleMenu} />}
          </div>
        </nav>
      </header>

      {/* Custom CSS */}
      <style>
        {`
          .navbar-toggle {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
          }
          .main-nav-content {
            position: fixed;
            top: 0;
            right: -250px;
            width: 250px;
            height: 100vh;
            background: white;
            box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            transition: right 0.3s ease-in-out;
            display: flex;
            flex-direction: column;
            z-index: 1000;
          }
          .main-nav-content.show-menu {
            right: 0;
          }
          .nav li {
            list-style: none;
            padding: 10px 0;
          }
          .nav li a {
            text-decoration: none;
            color: #333;
            font-size: 18px;
            display: block;
          }
          .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
          }
          .overlay-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
          }
          .dropdown-menu {
            display: none;
            padding-left: 15px;
          }
          .dropdown-menu.show {
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default Header;
