import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// import "./Gallery.css"; // Add this to style the images properly



const Gallery = () => {
    return (
        <div className="gallery-style-one-area default-padding-top ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            {/* <h5 className="sub-title">Awesome Gallery</h5> */}
                            <h2 className="title">Gallery Of Our Products</h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container-stage">
                <Swiper
                    slidesPerView={3} // Adjust based on screen size
                    spaceBetween={20} // Adds some spacing between images
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {/* Single Item */}
                    {["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "g5.jpg"].map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="gallery-style-one">
                                <img src={`assets/images/${img}`} alt="Gallery" />
                                <div className="overlay">
                                    <span>Factory</span>
                                    <h4>
                                        <a href="#">Industrial Area, Fatuha</a>
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Gallery;
