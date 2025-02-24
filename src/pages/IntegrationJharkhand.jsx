import ContactCard from './component/ContactCard';

const IntegrationJharkhand = () => {
    const contactData = [
        { title: "BOKARO", address: "Jaina More, Bokaro-829301", phone: "+91-7781002152", email: "int.bkr@hariomfeeds.co.in" },
        { title: "RAMGARH", address: "KOTHAR,Ramgarh-829122", phone: "+91-9264290426", email: "int.rmg@hariomfeeds.co.in" },
        { title: "BARHI", address: "", phone: "+91-7781002157", email: "int.bar@hariomfeeds.co.in" },

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

export default IntegrationJharkhand;
