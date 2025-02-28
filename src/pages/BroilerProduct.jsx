import React, { useState } from 'react';

const variants = [
    { id: 0, name: "Broiler Pre  Starter Crumb ", description: "Used for chicks in early stages of life." },
    { id: 1, name: "Broiler Starter Crumb ", description: "Provides balanced nutrition for growing chicks." },
    { id: 2, name: "Broiler Developer Pellet ", description: "Supports growth and skeletal development." },
    { id: 3, name: "Broiler JUmbo-Jet 33% Concentrate ", description: "Enhances laying performance in hens." },
    { id: 4, name: "Broiler Supremo 23% Concentrate ", description: "Helps in uniform flock development." }
    
];
const BroilerProduct = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="fw-bold text-primary mb-4"> Broiler Products</h1>
                    <p className="lead text-secondary">Explore our premium range of layer feeds designed for optimal poultry growth.</p>
                </div>
            </div>
            <h2 className="text-center mb-4">Types of Variant</h2>

            <div className="row">
                {/* Sidebar - Variant List */}
                <div className="col-md-4">
                    <div className="list-group">
                        {variants.map((variant) => (
                            <button
                                key={variant.id}
                                className={`list-group-item list-group-item-action ${activeTab === variant.id ? "active" : ""}`}
                                onClick={() => setActiveTab(variant.id)}
                            >
                                {variant.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content - Variant Details */}
                <div className="col-md-8">
                    <div className="card shadow p-4">
                        <h4>{variants[activeTab].name}</h4>
                        <p>{variants[activeTab].description}</p>
                        <img
                            src={`https://via.placeholder.com/300?text=${variants[activeTab].name}`}
                            alt={variants[activeTab].name}
                            className="img-fluid mt-3 rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BroilerProduct;
