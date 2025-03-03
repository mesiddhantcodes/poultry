import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
    "1.jpg", "4.jpeg", "5.jpg", "b2.jpg", "6.jpeg"
];

const GalleryPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div className="gallery-page-container">
            <div className="gallery-header text-center">
                <h2 className="">Our Product Gallery</h2>
                <p className="subtitle">Explore our premium products</p>
            </div>

            <div className="gallery-slider">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    navigation
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {galleryImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="gallery-item" onClick={() => {
                                setPhotoIndex(index);
                                setIsOpen(true);
                            }}>
                                <img src={`/assets/images/${img}`} alt="Gallery Item" />
                                <div className="overlay">
                                    <span>Click to View</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={galleryImages.map((img) => ({ src: `/assets/images/${img}` }))}
                    index={photoIndex}
                />
            )}
        </div>
    );
};

export default GalleryPage;
