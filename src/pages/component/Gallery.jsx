
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles (optional)
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import galleryImages from "../../data/galleryImages";

const Gallery = () => {
    return (
        <div className="gallery-style-one-area default-padding-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h2 className="title">Gallery Of Our Products</h2>
                            <div className="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container-stage">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    {galleryImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="gallery-style-one">
                                <img src={item.src} alt={item.title} />
                                <div className="overlay">
                                    <span>{item.title}</span>
                                    <h4>
                                        <a href="#">{item.location}</a>
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
