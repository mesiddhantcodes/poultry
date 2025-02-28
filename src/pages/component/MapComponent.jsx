import React from "react";
import { Box } from "@mui/material";
import IndiaMap from "./IndiaMap";

const MapComponent = ({ selectedState, selectedCity }) => {
    console.log("MapComponent - Selected State:", selectedState);
    console.log("MapComponent - Selected City:", selectedCity);

    return (
        <Box sx={{ width: "100%", height: 300, display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
            <IndiaMap highlightedState={selectedState} highlightedCity={selectedCity} />
        </Box>
    );
};

export default MapComponent;
