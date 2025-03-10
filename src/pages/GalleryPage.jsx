import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryImages from "../data/galleryImages";
// galleryImages
const GalleryPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div className="gallery-page-container">
            <div className="gallery-header text-center">
                <h2>Our Product Gallery</h2>
                <p className="subtitle">Explore our premium products</p>
            </div>

            {/* Gallery Slider with Lightbox Feature */}
            <div className="gallery-slider">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                >

                    {galleryImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="gallery-item" onClick={() => {
                                setPhotoIndex(index);
                                setIsOpen(true);
                            }}>
                                <img src={item.src} alt={item.title} />
                                <div className="overlay">
                                    <span>Click to View</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Lightbox for Image Preview */}
            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={galleryImages.map((item) => ({ src: item.src }))}
                    index={photoIndex}
                />
            )}
        </div>
    );
};

export default GalleryPage;
