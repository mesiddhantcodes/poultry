import React, { useState } from "react";
import { Container, Typography, TextField, MenuItem, Button, Paper, Grid, Box } from "@mui/material";
import MapComponent from "./component/MapComponent";

const branches = {
    Bihar: ["Gopalganj", "Motihari", "Marhaura", "Mohania", "Musarigharari", "Nokha", "Madhuban", "Arwal"],
    Jharkhand: ["Ramgarh", "Bokaro", "Barhi"],
    UttarPradesh: ["Kasia", "Mau", "Varanasi"],
};
const roles = {
    "Farmer": "Farmer",
    "Dealer": "Dealer",
    "Distributor": "Distributor",
    "Retailer": "Retailer",
}

const ContactForm = () => {
    const [formData, setFormData] = useState({
        joinus: "",
        name: "",
        mobile: "",
        email: "",
        address: "",
        state: "",
        branch: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="pb-5" style={{ backgroundColor: "#f9f9f9", paddingBottom: "40px" }}>
            <Container
                maxWidth="xl"
                sx={{ mt: 4, width: "100%", mx: "auto", px: { xs: 2, sm: 3, md: 5 } }}
            >
                {/* Title */}
                <Typography
                    variant="h4"
                    align="center"
                    className="site-heading"
                    sx={{ fontWeight: "bold", color: "primary.main", mb: 3 }}
                >
                    <h2 className="text-2xl font-semibold text-[#0c2957] mb-3"
                    >
                        Contact Us

                    </h2>
                    <div className="" />

                </Typography>

                <Grid
                    container
                    spacing={4}
                    sx={{
                        minHeight: "80vh",
                        display: "flex",
                        alignItems: "stretch",
                        flexDirection: { xs: "column", md: "row" } // Stack on mobile, side-by-side on larger screens
                    }}
                >
                    {/* Form Section */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%"
                        }}
                    >
                        <Paper
                            sx={{
                                p: { xs: 2, sm: 3, md: 4 },
                                boxShadow: 5,
                                borderRadius: 3,
                                bgcolor: "white",
                                height: "100%",
                                minHeight: { xs: "auto", md: "550px" },
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                                width: { xs: "100%", sm: "90%", md: "90%", lg: "70%" },
                                mx: "auto"
                            }}
                        >
                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    padding: "10px",
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                    overflowY: "auto",
                                    paddingBottom: "10px"
                                }}
                            >
                                <TextField
                                    select
                                    fullWidth
                                    size="small"
                                    label="Join Us"
                                    name="joinus"
                                    value={formData.joinus}
                                    onChange={handleChange}
                                    required
                                    InputProps={{
                                        sx: { height: "54px" }
                                    }}
                                >
                                    {Object.keys(roles).map((role) => (
                                        <MenuItem key={role} value={role}>
                                            {roles[role]}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField fullWidth size="small" label="Name" name="name" value={formData.name} onChange={handleChange} required InputProps={{
                                    sx: { height: "54px" }
                                }} />
                                <TextField fullWidth size="small" label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} required InputProps={{
                                    sx: { height: "54px" }
                                }} />
                                <TextField fullWidth size="small" label="Email" name="email" value={formData.email} onChange={handleChange} required InputProps={{
                                    sx: { height: "54px" }
                                }} />
                                <TextField fullWidth size="small" label="Address" name="address" value={formData.address} onChange={handleChange} required InputProps={{
                                    sx: { height: "54px" }
                                }} />

                                <TextField select fullWidth size="small" label="State" name="state" value={formData.state} onChange={handleChange} required InputProps={{
                                    sx: { height: "54px" }
                                }}>
                                    {Object.keys(branches).map((state) => (
                                        <MenuItem key={state} value={state}>{state}</MenuItem>
                                    ))}
                                </TextField>

                                {formData.state && (
                                    <TextField select fullWidth size="small" label="Branch" name="branch" value={formData.branch} onChange={handleChange} required>
                                        {branches[formData.state].map((branch) => (
                                            <MenuItem key={branch} value={branch}>{branch}</MenuItem>
                                        ))}
                                    </TextField>
                                )}

                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                    required
                                />

                                {/* Submit Button - Always Visible */}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{
                                        mt: "auto",
                                        py: 1.5,
                                        fontSize: "1rem",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Submit
                                </Button>
                            </form>
                        </Paper>
                    </Grid>

                    {/* Map Section */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%"
                        }}
                    >


                        <Paper
                            sx={{
                                p: 2,
                                boxShadow: 5,
                                borderRadius: 3,
                                width: { xs: "100%", sm: "90%", md: "100%" },
                                height: { xs: "300px", md: "100%" },
                                minHeight: "500px",
                                display: "flex",
                                flexDirection: "column",  // Ensures vertical stacking
                                justifyContent: "flex-start", alignItems: "center",
                                bgcolor: "#ffffff"
                            }}
                        >
                            <Typography
                                variant="h6"
                                align="center"
                                sx={{ mb: 2, fontWeight: "bold", color: "primary.dark" }}
                            >
                                Selected Location: {formData.state ? `${formData.state} - ${formData.branch || "None"}` : "None"}
                            </Typography>
                            <Box sx={{ flexGrow: 1, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <MapComponent selectedState={formData.state} selectedCity={formData.branch} />
                            </Box>                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>


    );
};

export default ContactForm;
