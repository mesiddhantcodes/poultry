// import React from "react";
import ContactCard from "./component/ContactCard";

const IntegrationBihar = () => {
    const contactData = [
        { title: "MOTIHARI", address: "Near Sugar Mill Chhota Bariyarpur,East Champaran,845401 ", phone: "+91-7880650014", email: "int.mot@hariomfeeds.co.in" },
        { title: "GOPALGANJ", address: "Near Railway Station Beside Sanskriti Pathshala,Gopalganj,845428", phone: "+91-9119900951", email: "int.gpj@hariomfeeds.co.in" },
        { title: "MARHAURA", address: "Marhaura,Saran-841418", phone: "+91-9264290422", email: "int.mar@hariomfeeds.co.in" },
        { title: "MOHANIA", address: "Near GT Road Beside Lalita Hospital,Kaimur-821109", phone: "+91-9119900952", email: "int.moh@hariomfeeds.co.in" },
        { title: "MUSARIGHARARI", address: "Near Jagadamba Petrol Pump,Samastipur-848101", phone: "+91-7781000593", email: "int.mgh@hariomfeeds.co.in" },
        { title: "NOKHA", address: "Beside Bajaj Show Room,Patelpuri,Rohtas-802215", phone: "+91-7781000598", email: "int.nkh@hariomfeeds.co.in" },
        { title: "MADHUBAN", address: "Near Jio Tower PipraBangla,Arwal-804402", phone: "+91-8201901748", email: "int.arl@hariomfeeds.co.in" },
        { title: "ARWAL", address: "Near Jio Tower PipraBangla,Arwal-804402", phone: "+91-8201901748", email: "int.arl@hariomfeeds.co.in" },
    ];

    return (
        <div className="container">
            <div className="row">
                {contactData.map((contact, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 mt-4">
                        <ContactCard {...contact} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IntegrationBihar;
