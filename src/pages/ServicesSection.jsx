import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
    const services = [
        { title: "Broiler", image: "/public/assets/images/broiler.jpg", link: "/poultry-division/broiler" },
        { title: "Layer", image: "/public/assets/images/layer.jpeg", link: "/poultry-division/layer" },
        { title: "Breeder", image: "/public/assets/images/1.jpg", link: "/poultry-division/feeder" },
    ];

    const cardStyle = {
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0,0,0,0.3)";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.2)";
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                {services.map((service, index) => (
                    <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div
                            className="inner-box shadow-lg rounded-lg overflow-hidden position-relative bg-white"
                            style={cardStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div
                                className="image-box position-relative"
                                style={{ height: "250px", overflow: "hidden", borderRadius: "12px" }}
                            >
                                <img
                                    decoding="async"
                                    src={service.image}
                                    alt={service.title}
                                    className="img-fluid w-100 h-100"
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                        transition: "transform 0.3s ease",
                                    }}
                                />
                                <div
                                    className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                    style={{
                                        background: "rgba(0, 0, 0, 0.4)",
                                        opacity: 0,
                                        transition: "opacity 0.3s ease",
                                        borderRadius: "12px",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                                >
                                    <Link to={service.link} className="btn btn-light">
                                        <span className="flaticon-right"></span> Learn More
                                    </Link>
                                </div>
                            </div>
                            <div className="content p-3 text-center">
                                <h5 className="fw-bold mb-0">{service.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
