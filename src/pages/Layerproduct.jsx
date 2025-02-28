import React, { useState } from 'react';

const variants = [
    { id: 0, name: "Layer phase 1", description: "Used for chicks in early stages of life." },
    { id: 1, name: "Layer phase 2 ", description: "Provides balanced nutrition for growing chicks." },
    { id: 2, name: "Layer phase 3", description: "Supports growth and skeletal development." },
    { id: 3, name: "Layer Chick Crumb  / Mash ", description: "Enhances laying performance in hens." },
    { id: 4, name: "Layer Grower Crumb ", description: "Helps in uniform flock development." },
    { id: 5, name: "Layer Concentrate ", description: "Essential nutrients for high egg production." },
    { id: 5, name: "Layer Pre Layer Mash ", description: "Essential nutrients for high egg production." }
    
];

const Layerproduct = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="fw-bold text-primary mb-4">Layer Products</h1>
                    <p className="lead text-secondary">One of the most important parts of raising chickens is feeding them a balanced diet. For hens who are actively laying eggs, a crucial component of a balanced diet is layer feed.
Layer feed typically contains higher levels of protein and calcium compared to other types of chicken feed. These essential nutrients help hens produce strong, healthy eggs. Many feeds for laying hens also include supplements such as probiotics, which can help support gut health and improve nutrient absorption.
Feeding chickens a high-quality layer feed can lead to better egg production and help prevent health issues such as calcium deficiencies and egg-binding. By choosing the right feed for laying hens, you can help support their overall health and wellbeing while also enjoying the delicious eggs they produce.</p>
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
};

export default Layerproduct;
