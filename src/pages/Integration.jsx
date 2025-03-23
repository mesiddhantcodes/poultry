import { Outlet } from "react-router-dom";
import StateCards from "./component/StateCards";
import ContactCard from "./component/ContactCard";

// StateCards
const Integration = () => {
    const contactData = [
        { title: "BOKARO", address: "Jaina More, Bokaro-829301", phone: "+91-7781002152", email: "int.bkr@hariomfeeds.co.in" },
        { title: "RAMGARH", address: "KOTHAR,Ramgarh-829122", phone: "+91-9264290426", email: "int.rmg@hariomfeeds.co.in" },
        { title: "BARHI", address: "", phone: "+91-7781002157", email: "int.bar@hariomfeeds.co.in" },

    ];
    return (
        <section className="w-full py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="row align-items-center">
                    {/* Left Section - Text Content */}
                    <div className="col-12 col-md-6 p-5 site-heading">
                        <h2 className="text-2xl font-semibold text-[#0c2957] mb-3">
                            Integration Division
                        </h2>
                        <div className=" " />

                        <p className="global-paragraph" align="justify">
                            This Division plays a crucial role in supporting the poultry industry by catering to the needs of 7,000 poultry farmers, ranging from small-scale backyard poultry keepers to large commercial enterprises. These farmers
                            are spread across the entire state of Bihar and its neighboring regions, making efficient service delivery a significant responsibility.
                        </p>
                        <p className="global-paragraph" align="justify">
                            The Division ensures timely supply of essential inputs, including high-quality feed, vaccines, and technical expertise, helping farmers maintain healthy
                            and productive poultry operations. In addition, it provides technical guidance and advisory services, equipping farmers with modern rearing techniques, disease prevention strategies, and best management practices to enhance productivity.
                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div className="col-12 col-md-6 d-flex justify-content-center p-5 about-style-one">
                        <img
                            src="src/assets/images/b1.jpg"
                            alt="Farms Overview"
                            className=""
                        />
                    </div>
                </div>

                {/* Our Branches Section */}
                <div className="sec-title text-center site-heading">
                    <h2>Our Branches</h2>
                    <div className="" />

                    <div className="text-decoration">
                        <span className="left"></span>
                        <span className="right"></span>
                    </div>
                </div>

                <StateCards />
                <div className="d-flex justify-content-center about-style-one p-4">
                    <div className="card shadow-lg rounded-lg text-center p-4" style={{ width: "350px", background: "#ffffff" }}>
                        <img
                            src="src/assets/images/MDSIR.jpg"
                            alt="Integration Head"
                            className="img-fluid rounded-circle mx-auto"
                            style={{ width: "120px", height: "120px", objectFit: "cover", border: "4px solid #0c2957" }}
                        />
                        <h4 className="mt-1 text-[#0c2957]">Gyan Ranjan Linka </h4>
                        <p className="text-muted">Integration Head</p>
                        <p className="text-muted">
                            <strong>Phone:</strong> +91-7781021445
                        </p>
                        <p className="text-muted">
                            <strong>Email:</strong> integration@hariomfeeds.co.in
                        </p>
                    </div>
                </div>
            </div>


            <Outlet />

        </section>

    );
};

export default Integration;
