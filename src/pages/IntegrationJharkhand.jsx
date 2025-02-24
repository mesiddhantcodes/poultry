import ContactCard from './component/ContactCard';

const IntegrationJharkhand = () => {
    const contactData = [
        { title: "Integration Bihar", address: "Bihar", phone: "+98765456789", email: "sdsdfsdfasdfasd" },
        { title: "Integration Bihar", address: "Bihar", phone: "+98765456789", email: "sdsdfsdfasdfasd" },
        { title: "Integration Bihar", address: "Bihar", phone: "+98765456789", email: "sdsdfsdfasdfasd" },
        { title: "Integration Bihar", address: "Bihar", phone: "+98765456789", email: "sdsdfsdfasdfasd" },
        { title: "Integration Bihar", address: "Bihar", phone: "+98765456789", email: "sdsdfsdfasdfasd" },
        { title: "Integration Bihar", address: "Bihar", phone: "+98765456789", email: "sdsdfsdfasdfasd" },
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
