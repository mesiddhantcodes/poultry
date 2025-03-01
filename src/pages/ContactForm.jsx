import React, { useState } from "react";
import { Container, Typography, TextField, MenuItem, Button, Paper, Grid } from "@mui/material";
import MapComponent from "./component/MapComponent";

const branches = {
    Bihar: ["Gopalganj", "Motihari", "Marhaura", "Mohania", "Musarigharari", "Nokha", "Madhuban", "Arwal"],
    Jharkhand: ["Ramgarh", "Bokaro", "Barhi"],
    UttarPradesh: ["Kasia", "Mau", "Varanasi"],
};

const ContactForm = () => {
    const [formData, setFormData] = useState({ 
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
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Contact Us
            </Typography>

            <Grid container spacing={4} alignItems="stretch">
                {/* Form Section */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
                        <form onSubmit={handleSubmit}>
                            <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" required />
                            <TextField fullWidth label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} margin="normal" required />
                            <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} margin="normal" required />
                            <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} margin="normal" required />

                            <TextField select fullWidth label="State" name="state" value={formData.state} onChange={handleChange} margin="normal" required>
                                {Object.keys(branches).map((state) => (
                                    <MenuItem key={state} value={state}>{state}</MenuItem>
                                ))}
                            </TextField>

                            {formData.state && (
                                <TextField select fullWidth label="Branch" name="branch" value={formData.branch} onChange={handleChange} margin="normal" required>
                                    {branches[formData.state].map((branch) => (
                                        <MenuItem key={branch} value={branch}>{branch}</MenuItem>
                                    ))}
                                </TextField>
                            )}

                            <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} margin="normal" multiline rows={4} required />

                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, py: 1.5, fontSize: '1rem' }}>
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </Grid>

                {/* Map Section */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, boxShadow: 3, borderRadius: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Selected State: {formData.state || "None"}
                        </Typography>
                        <MapComponent selectedState={formData.state} selectedCity={formData.branch} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactForm;
