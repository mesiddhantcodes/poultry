import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  // Close menu and dropdown on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(null);
  }, [location.pathname]);

  return (
    <>
      <div className="top-bar-area text-light global-paragraph">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-9">
              <div className="flex-item left ">
                <p className="more101 lead22">Hariom Feeds Pvt. Ltd. </p>
                <ul className="lead22">
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Gopalganj, Bihar
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />


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
                {/* <div className="logo-wrapper">
                  <img src="assets/images/logo1.png" className="logo" alt="Hariom Feeds Pvt. Ltd." />
                  <span className="registered-symbol">®</span>
                </div> */}
                <Logo />
              </a>
            </div>

            {/* Main Navigation */}
            <div className={`main-nav-content ${menuOpen ? "show-menu" : ""}`} key={location.pathname}>
              <button type="button" className="navbar-toggle close-btn" onClick={toggleMenu}>
                <i className="fas fa-times" />
              </button>
              <ul className="nav navbar-nav navbar-right ">
                <li><Link to="/" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Home</Link></li>

                {/* About Us Dropdown */}
                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle" onClick={() => toggleDropdown("about")}>
                    About Us
                  </Link>
                  <ul className={`dropdown-menu ${dropdownOpen === "about" ? "show" : ""}`}>
                    <li><Link to="/about" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>About Us</Link></li>
                    <li><Link to="/director" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Directors Desk</Link></li>
                    <li><Link to="/journey" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Our Journey</Link></li>
                    <li><Link to="/mission" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Vision & Mission</Link></li>
                    <li><Link to="/why-choose-us" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Why Choose Us</Link></li>
                  </ul>
                </li>

                {/* Products Dropdown */}
                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle" onClick={() => toggleDropdown("products")}>
                    Products
                  </Link>
                  <ul className={`dropdown-menu ${dropdownOpen === "products" ? "show" : ""}`}>
                    <li><Link to="/layer-feed" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Layer Feed</Link></li>
                    <li><Link to="/broiler-feed" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Broiler Feed</Link></li>
                    <li><Link to="/breeder-feed" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Breeder Feed</Link></li>
                  </ul>
                </li>

                {/* Divisions Dropdown */}
                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle" onClick={() => toggleDropdown("divisions")}>
                    Divisions
                  </Link>
                  <ul className={`dropdown-menu ${dropdownOpen === "divisions" ? "show" : ""}`}>
                    <li><Link to="/poultry-division" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Poultry Division</Link></li>
                    <li><Link to="https://shivgangapashuaahar.com/index.php" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Cattle Division</Link></li>
                    <li><Link to="/integration" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Integration Division</Link></li>
                  </ul>
                </li>

                <li><Link to="/gallery" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Gallery</Link></li>
                <li><Link to="/contact" onClick={() => { toggleMenu(); setDropdownOpen(null); }}>Contact</Link></li>
              </ul>
            </div>

            {/* Overlay screen for menu */}
            {menuOpen && <div className="overlay-screen show" onClick={toggleMenu} />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
