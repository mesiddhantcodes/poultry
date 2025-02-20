import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Gallery from "./component/Gallery";
// import "./styles.css"; // Import your styles

const Home = () => {
  const BannerSlider = () => {
    const slides = [
      {
        image: "/assets/images/slideHF2.jpg",
        title: "Hariom Feeds Pvt. Ltd.",
        subtitle: "Perfect Feed",
        boldText: "Happy Farmer",
      },
      {
        image: "/assets/images/slide2.jpg",
        title: "Hariom Feeds Pvt. Ltd.",
        subtitle: "Uncompromising Quality",
        boldText: "Unmatched Results",
      },
      {
        image: "/assets/images/slide3.jpg",
        title: "Hariom Feeds Pvt. Ltd.",
        subtitle: "Progress with Purpose",
        boldText: "Passion in Action",
      },
      {
        image: "/assets/images/SlideHF1.jpg",
        title: "Hariom Feeds Pvt. Ltd.",
        subtitle: "Passion For",
        boldText: "Sustainability",
      },
    ];
    return (
      <>
        {/* <Header /> */}
        <div className="banner-fade banner-area navigation-circle text-light banner-style-one zoom-effect overflow-hidden">
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            className="banner-fade"
            style={{ height: "700px" }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="banner-style-one">
                <div
                  className="banner-thumb bg-cover shadow dark"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                <div className="container">
                  <div className="row align-center">
                    <div className="col-xl-7">
                      <div className="content">
                        <h4>{slide.title}</h4>
                        <h2>
                          <strong>{slide.subtitle} </strong> {slide.boldText}
                        </h2>
                        <p>
                          Supports faster growth rate, better feed conversion,
                          Higher meat yield and Outstanding FCR.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="about-style-one-area default-padding"
          style={{ background: 'url("/assets/images/7583.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 about-style-one">
                <div className="card">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div className="site-heading text-center">
                        <h5 className="sub-title" />
                        <h2 className="title">Hariom Feeds Pvt. Ltd</h2>
                        <div className="devider" />
                      </div>
                    </div>
                  </div>{" "}
                  <p align="justify">
                    Hariom Feeds Pvt. Ltd., founded in 2003 by Mr. Dilip Kumar
                    Singh in Gopalganj, Bihar, has grown into a leading producer
                    of high-quality cattle and poultry feeds in India, producing
                    250 MT daily. With a strong presence in 15 states, a network
                    of 500 dealers, and over 500 employees, the company offers a
                    diverse range of feeds and integrated broiler farming.
                    Equipped with modern technology and in-house R&D labs,
                    Hariom Feeds is the preferred choice for farmers and major
                    companies. Our motto: "Grow Poultry & Farmer for a Happy
                    India."{" "}
                    <span className="d-none d-sm-block">
                      Today Hariom Feeds Pvt. Ltd. Group In Poultry Sector
                      Requirement of More Than 15 States of India With A Network
                      of 500 Dealers And More Than 500 Numbers of Employees,
                      Hariom Feeds Pvt. Ltd. Has Developed Research &amp;
                      Development Wing With In-House Laboratories. Our Staff And
                      Employees Have Extensive Industry Experience And Are
                      Committed To Maintain And Enhance The Quality And Variety
                      of Its Animal Feed &amp; Livestock Products. Within A
                      Short Span of Time, Hariom Feeds Pvt. Ltd. Has Become The
                      Preferred Choice For Farmers In Broiler, Layer, Cattle
                      Feeds, We Are The India's Leading Processing Company For
                      Poultry &amp; Cattle Feeds Catering To The Needs of
                      Various Big Companies
                    </span>
                  </p>
                  <ul className="check-solid-list mt-20">
                    <li>An ISO 9001:2008 Certified Company</li>
                    <li>Use of Modern Technology</li>
                    <li>Strict Quality Control</li>
                    <li>Experienced Team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-style-one-area default-padding bg-gray half-bg-theme">
          <div className="shape-extra">
            <img src="/assets/images/" alt="Image Not Found" />
          </div>
          <div className="container">
            <div className="heading-left">
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div className="site-heading text-center">
                        <h5 className="sub-title" />
                        <h2 className="title">Our Products</h2>
                        <div className="devider" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div className="right-info">
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              {/* item */}
              <div className="col-md-4 text-center">
                <div className="b1">
                  <img src="/assets/images/feeder.png" alt="Breeder" />
                  <h3 className="sub-title ">Breeder</h3>
                </div>
              </div>
              {/* item */}
              <div className="col-md-4 text-center">
                <div className="b1">
                  <img src="/assets/images/layer.png" alt="Layer" />
                  <h3 className="sub-title ">Layer</h3>
                </div>
              </div>
              {/* item */}
              <div className="col-md-4 text-center">
                <div className="b1">
                  <img src="/assets/images/boiler.png" alt="Broiler" />
                  <h3 className="sub-title ">Broiler</h3>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="choose-us-style-two-area half-bg-light bg-gray default-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="choose-us-style-two">
                  <img src="/assets/images/rt1.jpg" alt="Thumb" />
                  {/* <h3 class="title mt-30">Technology at Hariom Feeds</h3> */}
                  <div className="content">
                    {/* <ul class="list-grid">
            <li>Stringent Raw Material Testing</li>
            <li>Silo-based Storage</li>
            <li>Centralised Control</li>
            <li>Automated Packaging</li>
          </ul> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-80 mt-xs-0">
                <div className="choose-us-style-two">
                  <h2 className="title mb-30 mt-xs-30">
                    Research &amp; Development at Hariom Feeds
                  </h2>
                  <div className="fun-fact-style-one mb-50">
                    <p>
                      Research &amp; Development has been an integral part of
                      Hariom Feeds growth story. In every step of our journey,
                      we have innovated to overcome challenges.
                    </p>
                    <p>
                      At our state-of-the-art in-house nutrition lab, we
                      research and analyze feed reports to ascertain the right
                      nutritional content for our feed
                    </p>
                  </div>
                  <img src="assets/images/rt2.jpg" alt="Thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Gallery />



        <section
          className="w3l-features-4 py-5   "
          style={{ background: "linear-gradient(135deg, #ff9a8b, #ff6a88)" }}
        >
          <div className="container pb-lg-5 pb-md-4 pb-3">
            <h3
              className="title-big mb-md-5 mb-4 mw-100 text-center"
              style={{
                fontFamily: '"Roboto", sans-serif',
                fontWeight: "bold",
                fontSize: 36,
                color: "white",
              }}
            >
              Business Overview Our Company
            </h3>
            <div className="row features4-grids">
              <div className="col-xl-3 col-sm-6 mt-xl-0 mt-4">
                <div
                  className="features4-grid"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    padding: 20,
                    transition: "transform 0.3s",
                  }}
                >
                  <div
                    className="feature-images"
                    style={{ fontSize: 50, color: "#ff6a88", marginBottom: 15 }}
                  >
                    <span className="fa fa-globe" aria-hidden="true" />
                  </div>
                  <h5 style={{ fontSize: 22, color: "#2c3e50" }}>FEED MILL</h5>
                  <p style={{ color: "#7f8c8d", fontSize: 16 }}>
                    Hariom group is the leading commercial Poultry Feed and
                    cattle Feed company in India comprising 3 Feed Mills with
                    advanced technology.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mt-xl-0 mt-4">
                <div
                  className="features4-grid"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    padding: 20,
                    transition: "transform 0.3s",
                  }}
                >
                  <div
                    className="feature-images"
                    style={{ fontSize: 50, color: "#ff6a88", marginBottom: 15 }}
                  >
                    <span className="fa fa-tachometer" aria-hidden="true" />
                  </div>
                  <h5 style={{ fontSize: 22, color: "#2c3e50" }}>
                    CONTRACT FARMING
                  </h5>
                  <p style={{ color: "#7f8c8d", fontSize: 16 }}>
                    Over more than 1000 partner farmers provided with global
                    technological support for both open and closed houses, PAN
                    India.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mt-xl-0 mt-4">
                <div
                  className="features4-grid"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    padding: 20,
                    transition: "transform 0.3s",
                  }}
                >
                  <div
                    className="feature-images"
                    style={{ fontSize: 50, color: "#ff6a88", marginBottom: 15 }}
                  >
                    <span className="fa fa-dribbble" aria-hidden="true" />
                  </div>
                  <h5 style={{ fontSize: 22, color: "#2c3e50" }}>
                    PARENT FARM
                  </h5>
                  <p style={{ color: "#7f8c8d", fontSize: 16 }}>
                    Our state of the art Parent Farms have best in class Bio
                    security and is built as per global standards.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mt-xl-0 mt-4">
                <div
                  className="features4-grid"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    padding: 20,
                    transition: "transform 0.3s",
                  }}
                >
                  <div
                    className="feature-images"
                    style={{ fontSize: 50, color: "#ff6a88", marginBottom: 15 }}
                  >
                    <span className="fa fa-file" aria-hidden="true" />
                  </div>
                  <h5 style={{ fontSize: 22, color: "#2c3e50" }}>HATCHERY</h5>
                  <p style={{ color: "#7f8c8d", fontSize: 16 }}>
                    Strict Processes ensure only finest quality DOC's are
                    produced at our state of the art hatcheries adhering to
                    global standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </>
    );
  };

  return (
    <>
      <BannerSlider />
    </>
  );
};

export default Home;
