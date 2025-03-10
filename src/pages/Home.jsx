
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaGlobe, FaTachometerAlt, FaDribbble, FaFile } from "react-icons/fa";
// import "./public/assets/css/BuisnessOverview.css";
import Gallery from "./component/Gallery";
import "../assets/css/BusinessOverview.css";
// import "./styles.css"; // Import your styles

const Home = () => {
  const BannerSlider = () => {
    const businessData = [
      {
        icon: <FaGlobe />,
        title: "FEED MILL",
        description:
          "Hariom Group is the leading commercial Poultry Feed and Cattle Feed company in India comprising 3 Feed Mills with advanced technology.",
      },
      {
        icon: <FaTachometerAlt />,
        title: "CONTRACT FARMING",
        description:
          "Over more than 1000 partner farmers provided with global technological support for both open and closed houses, PAN India.",
      },
      {
        icon: <FaDribbble />,
        title: "PARENT FARM",
        description:
          "Our state-of-the-art Parent Farms have best-in-class biosecurity and are built as per global standards.",
      },
      {
        icon: <FaFile />,
        title: "HATCHERY",
        description:
          "Strict processes ensure only the finest quality DOCs are produced at our state-of-the-art hatcheries adhering to global standards.",
      },
    ];
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
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            centeredSlides={true}
            watchOverflow={true}
            spaceBetween={0}
            className="banner-fade"
            style={{ height: "700px", overflow: "hidden" }}
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
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12">
                <div className="card shadow-lg border-0 p-4">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="site-heading">

                        <h2 className="title fw-bold  mb-4">
                          Hariom Feeds Private Limited
                        </h2>
                        <div className="divider mx-auto mb-4" />
                      </div>
                    </div>
                  </div>

                  <p className="text-justify text-muted lead">
                    <strong>Hariom Feeds Pvt. Ltd.</strong>, founded in 2003 by{" "}
                    <strong>Mr. Dilip Kumar Singh</strong> in Gopalganj, Bihar, has grown
                    into a leading producer of high-quality cattle and poultry feeds in
                    India. With a production capacity of <strong>250 MT daily</strong>, we
                    serve <strong>three states</strong> with a network of{" "}
                    <strong>500 dealers</strong> and employ more than{" "}
                    <strong>500 dedicated professionals</strong>.
                  </p>

                  <p className="text-justify text-muted lead">
                    We offer a diverse range of feeds and integrated broiler farming,
                    leveraging modern technology and in-house R&D labs. Our commitment to
                    innovation and quality makes <strong>Hariom Feeds</strong> the
                    preferred choice for farmers and leading poultry businesses across
                    India.
                  </p>

                  <div className="bg-light p-4 rounded">
                    <h4 className="text-center text-primary fw-bold mb-3">
                      Why Choose Us?
                    </h4>
                    <ul className="list-unstyled check-solid-list">
                      <li className="mb-2">
                        <strong>An ISO 9001:2015 Certified Company</strong>
                      </li>
                      <li className="mb-2">
                        <strong>Cutting-Edge Modern Technology</strong>
                      </li>
                      <li className="mb-2">
                        <strong>Stringent Quality Control Measures</strong>
                      </li>
                      <li><strong>Highly Experienced & Skilled Team</strong></li>
                    </ul>
                  </div>

                  <p className="text-center text-dark fw-bold mt-4">
                    <em>
                      "Grow Poultry & Farmers for a Happy India" - Our Commitment to
                      Excellence!
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="services-style-one-area position-relative py-5"
          style={{
            background: "var(--bg-gray)",
            color: "var(--color-text)"
          }}>

          {/* Section Header */}
          <div className="container text-center">
            {/* <h5 className="fw-bold lead22"
              style={{
                color: "var(--color-secondary)",
                letterSpacing: "1px",
                textTransform: "uppercase"
              }}>
              Premium Quality Feeds
            </h5> */}
            <div className="site-heading text-center">
              {/* <h5 className="sub-title">Awesome Gallery</h5> */}
              <h2 className="title">              Our Exclusive Products
              </h2>
              <div className="devider" />
            </div>

            <p className="lead">
              High-performance feeds for the best poultry and livestock growth.
            </p>
          </div>


          {/* Product Section */}
          <div className="container mt-5">
            <div className="row justify-content-center">
              {[
                { img: "/assets/images/feeder.png", name: "Breeder", info: "Specially formulated breeder feed for strong and healthy livestock.", link: "/breeder-feed" },
                { img: "/assets/images/Layer2.png", name: "Layer", info: "Optimized layer feed for enhanced egg production and quality.", link: "/layer-feed" },
                { img: "/assets/images/boiler.png", name: "Broiler", info: "High-protein broiler feed for superior weight gain and efficiency.", link: "/broiler-feed" }
              ].map((product, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="product-card text-center shadow p-4 position-relative"
                    style={{
                      background: "var(--white)",
                      borderRadius: "8px",
                      boxShadow: "var(--box-shadow-primary)",
                      transition: "transform 0.3s ease-in-out"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    {/* Product Image */}
                    <div className="product-image ">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="img-fluid product-img" /* Add a class for CSS control */
                        style={{
                          width: "100%", /* Ensures the image scales proportionally */
                          maxWidth: "620px", /* Set max width for larger screens */
                          filter: "drop-shadow(12px 10px 6px rgba(0, 0, 0, 0.4))",
                          transition: "all 0.3s ease-in-out"
                        }}
                      />

                    </div>

                    {/* Product Title */}
                    <h3 className="fw-bold lead "
                      style={{
                        fontFamily: "var(--font-secondary)",
                        fontSize: "1.4rem"
                        // color: "var(--color-heading)",
                      }}>
                      {product.name}
                    </h3>

                    {/* Product Description */}


                    {/* More Info Button with Link */}
                    <a href={product.link} className="btn btn-lg mt-3"
                      style={{
                        background: "var(--color-primary)",
                        color: "var(--white)",
                        border: "none",
                        borderRadius: "6px",
                        padding: "10px 20px",
                        transition: "background 0.3s ease-in-out",
                        boxShadow: "var(--box-shadow-secondary)",
                        textDecoration: "none"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-secondary)"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "var(--color-primary)"}>
                      More Info
                    </a>
                  </div>
                </div>
              ))}
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



        <section className="business-overview">
          <div className="container">
            <h2 className="title text-center mb-50">Business Overview of Our Company</h2>
            <div className="row">
              {businessData.map((item, index) => (
                <div className="col-xl-3 col-md-6 d-flex" key={index}>
                  <div className="business-card">
                    <div className="icon">{item.icon}</div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
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
