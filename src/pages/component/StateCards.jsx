import React, { useState } from "react";

const StateCards = () => {
    // State to track which state is clicked
    const [selectedState, setSelectedState] = useState(null);

    // Sample data for states
    const stateDetails = {
        Bihar: {
            name: "Bihar",
            image: "public/assets/images/Bihar.png",
            location: "Patna, Bihar",
            contact: "+91 12345 67890",
            description: "Bihar is known for its growing agriculture and poultry industry.",
        },
        "Uttar Pradesh": {
            name: "Uttar Pradesh",
            image: "public/assets/images/UPP.png",
            location: "Lucknow, Uttar Pradesh",
            contact: "+91 98765 43210",
            description: "Uttar Pradesh is a major hub for poultry, dairy, and sugar industries.",
        },
        Jharkhand: {
            name: "Jharkhand",
            image: "public/assets/images/jha.png",
            location: "Ranchi, Jharkhand",
            contact: "+91 11223 44556",
            description: "Jharkhand has a rapidly growing poultry and agriculture sector.",
        },
    };

    return (
        <div className="container mt-5">
            {/* Grid for State Cards */}
            <div className="row justify-content-center">
                {Object.keys(stateDetails).map((state, index) => (
                    <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div
                            className="inner-box shadow-lg rounded-lg overflow-hidden text-center p-3 bg-white position-relative"
                            onClick={() => setSelectedState(state)}
                            style={{
                                cursor: "pointer",
                                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                borderRadius: "15px",
                                background: "rgba(255, 255, 255, 0.2)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.2)";
                            }}
                        >
                            {/* Image Box */}
                            <div className="image-box position-relative rounded overflow-hidden" style={{ height: "250px" }}>
                                <img
                                    src={stateDetails[state].image}
                                    className="lazy-image img-fluid w-100 h-100"
                                    alt={state}
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                                    }}
                                />
                                {/* Overlay Effect */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{
                                        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
                                        borderRadius: "12px",
                                    }}
                                ></div>
                            </div>

                            {/* Title */}
                            <h5 className="fw-bold mt-3" style={{ color: "#0c2957", fontSize: "1.2rem" }}>{state}</h5>
                        </div>
                    </div>
                ))}
            </div>


            {/* Details Section */}
            {selectedState && (
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                        <div
                            className="card p-4 shadow-lg rounded-lg text-center bg-light position-relative"
                            style={{
                                animation: "fadeIn 0.5s ease-in-out",
                                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            {/* Close Button */}
                            <button
                                className="btn btn-danger btn-sm position-absolute top-0 end-0 m-3"
                                onClick={() => setSelectedState(null)}
                            >
                                ✖
                            </button>

                            {/* State Details */}
                            <h3 className="fw-bold text-primary">{stateDetails[selectedState].name}</h3>
                            <img
                                src={stateDetails[selectedState].image}
                                className="img-fluid rounded shadow-lg mt-3"
                                alt={selectedState}
                                style={{ maxWidth: "250px", border: "5px solid #0c2957" }}
                            />
                            <p className="mt-3 text-muted">{stateDetails[selectedState].description}</p>
                            <p className="fw-bold">
                                📍 <strong>Location:</strong> {stateDetails[selectedState].location}
                            </p>
                            <p className="fw-bold">
                                📞 <strong>Contact:</strong> {stateDetails[selectedState].contact}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StateCards;
