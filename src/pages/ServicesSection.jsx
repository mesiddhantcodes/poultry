import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
    const services = [
        { title: "Broiler", image: "src/assets/images/broiler.jpg", link: "/poultry-division/broiler" },
        { title: "Layer", image: "src/assets/images/layer.jpeg", link: "/poultry-division/layer" },
        { title: "Breeder", image: "src/assets/images/b2.jpg", link: "/poultry-division/feeder" },
    ];

    // const cardStyle = {
    //     cursor: "pointer",
    //     transition: "transform 0.3s ease, box-shadow 0.3s ease",
    // };

    // const handleMouseEnter = (e) => {
    //     e.currentTarget.style.transform = "scale(1.03)";
    //     e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0,0,0,0.3)";
    // };

    // const handleMouseLeave = (e) => {
    //     e.currentTarget.style.transform = "scale(1)";
    //     e.currentTarget.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.2)";
    // };

    return (
        <div className="container my-5">

            <div className="row justify-content-center">
                {services.map((service, index) => (
                    <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="service-card">
                            <div className="image-box">
                                <img src={service.image} alt={service.title} className="service-image" />
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
                                        <span className="flaticon-right"></span> {service.title}
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="service-title">{service.title}</div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
