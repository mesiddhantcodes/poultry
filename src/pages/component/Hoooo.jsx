import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css"; // Import your styles

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
    <div className="banner-fade banner-area navigation-circle text-light banner-style-one zoom-effect overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        className="banner-fade"
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
  );
};

export default BannerSlider;
