import React, { useState } from 'react';

const variants = [
    { id: 0, image: "FUTURE1.png", name: "Breeder Starter Crumble", description: "Used for chicks in early stages of life." },
    { id: 1, image: "FUTURE2.png", name: "Breeder Chick Crumble ", description: "Provides balanced nutrition for growing chicks." },
    { id: 2, image: "FUTURE3.png", name: "Breeder Chick Crumble ", description: "Provides balanced nutrition for growing chicks." },

];
const BreederProduct = () => {
    const [activeTab, setActiveTab] = useState(0);


    return (
        <div className="container mt-5">
            {/* Header Section */}
            <div className="text-center site-heading">
                <h2 className="fw-bold mb-4 ">Breeder Products</h2>
                <div className="devider" />

                <p className="lead text-secondary mx-auto" style={{ maxWidth: "800px" }}>
                    Explore our premium range of breeder feeds designed for optimal poultry growth.
                </p>
            </div>

            <h3 className="text-center text-primary fw-bold mb-4">Types of Variant</h3>

            <div className="row">
                {/* Sidebar - Variant List */}
                <div className="col-md-4">
                    <div className="list-group">
                        {variants.map((variant) => (
                            <button
                                key={variant.id}
                                className={`list-group-item list-group-item-action text-start fw-semibold ${activeTab === variant.id ? "active btn-primary" : "btn-light"}`}
                                onClick={() => setActiveTab(variant.id)}
                                style={{
                                    transition: "all 0.3s ease-in-out",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    marginBottom: "8px",
                                }}
                            >
                                {variant.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content - Variant Details */}
                <div className="col-md-8 pb-15" >
                    <div
                        className="card shadow-lg p-4 text-center"
                        style={{
                            borderRadius: "12px",
                            transition: "all 0.3s ease-in-out",
                            background: "transparent", // Ensures no unwanted background color
                            boxShadow: "none", // Removes box shadow from the container
                        }}
                    >
                        <h4 className="text-primary fw-bold">{variants[activeTab].name}</h4>
                        <p className="text-secondary">{variants[activeTab].description}</p>
                        <img
                            src={`src/assets/Products/${variants[activeTab].image}`}
                            alt={variants[activeTab].name}
                            className="img-fluid mt-3"
                            style={{
                                maxHeight: "350px",
                                objectFit: "contain",
                                transition: "all 0.3s ease-in-out",
                                filter: "drop-shadow(25px 25px 15px rgba(0, 0, 0, 0.6))", // Shadow applied only to PNG elements
                            }}
                        />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default BreederProduct;
