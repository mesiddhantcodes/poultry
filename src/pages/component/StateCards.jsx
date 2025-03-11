import React from "react";
import { Link } from "react-router-dom";

const StateCards = () => {
    const cards = [
        { title: "Bihar", image: "src/assets/images/Bihar.png", link: "/integration/bihar" },
        { title: "Jharkhand", image: "src/assets/images/Jha.png", link: "/integration/jharkhand" },
        { title: "Uttar Pradesh", image: "src/assets/images/UPP.png", link: "/integration/uttar-pradesh" },
    ];

    const cardStyle = {
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    return (
        <div className="row justify-content-center">
            {cards.map((card, index) => (
                <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <Link to={card.link} style={{ textDecoration: "none" }} className="d-block">
                        <div
                            className="inner-box shadow-lg overflow-hidden position-relative bg-white"
                            style={cardStyle}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                const overlay = e.currentTarget.querySelector(".overlay");
                                const title = e.currentTarget.querySelector(".card-title");
                                if (overlay) overlay.style.opacity = 1;
                                if (title) title.style.opacity = 1;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                const overlay = e.currentTarget.querySelector(".overlay");
                                const title = e.currentTarget.querySelector(".card-title");
                                if (overlay) overlay.style.opacity = 0;
                                if (title) title.style.opacity = 0;
                            }}
                        >
                            {/* <div
                                className="image-box position-relative"
                                style={{ height: "250px", borderRadius: "5px", overflow: "hidden" }}
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="img-fluid w-100 h-100"
                                    style={imageStyle}
                                />
                                <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={overlayStyle}></div>
                                <h5 className="card-title" style={titleStyle}>
                                    {card.title}
                                </h5>
                            </div> */}
                            <div
                                className="image-box position-relative"
                                style={{
                                    height: "250px",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                }}

                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
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
                                >
                                    <Link to={card.link} className="btn btn-light global-paragraph">
                                        {card.title}
                                    </Link>
                                </div>


                            </div>

                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default StateCards;
