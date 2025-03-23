import ContactCard from './component/ContactCard';

const IntegrationUp = () => {
    const contactData = [
        { title: "KASIA", address: "Kudwa Urf Dilip Nagar Tola Bakuladah,Kushinagar-274402", phone: "+91-9119900955,7880650011", email: "int.kas@hariomfeeds.co.in" },
        { title: "MAU", address: "Ram Nagar Colony,ChandraBhanpur,Mau-275101", phone: "+91-7781021433", email: "int.mau@hariomfeeds.co.in" },
        { title: "VARANASI", address: "Ram Nagar Colony,ChandraBhanpur,-275101", phone: "+91-7781021433,7880650015", email: "int.mau@hariomfeeds.co.in" },
        
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
}

export default IntegrationUp;
