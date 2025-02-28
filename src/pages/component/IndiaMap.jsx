import React from "react";
import IndiaSvg from "./IndiaSvg";

const IndiaMap = ({ highlightedState, highlightedCity }) => {
    console.log("IndiaMap - Highlighted State:", highlightedState);
    console.log("IndiaMap - Highlighted City:", highlightedCity);

    return (
        <div style={{ width: "100%", height: "auto" }}>
            <IndiaSvg selectedState={highlightedState} selectedCity={highlightedCity} />
        </div>
    );
};

export default IndiaMap;
