import { Outlet } from "react-router-dom";
import StateCards from "./component/StateCards";

// StateCards
const Integration = () => {
    return (
        <section className="w-full py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="row align-items-center">
                    {/* Left Section - Text Content */}
                    <div className="col-12 col-md-6 p-5">
                        <h2 className="text-2xl font-semibold text-[#0c2957] mb-3">
                            Integration Division
                        </h2>
                        <p className="text-gray-800 text-lg text-justify mb-3">
                            Hariom Feeds is a trusted name in meeting your nutritional and
                            protein needs. With over 23 years of excellence, Hariom continues
                            to empower rural parts of Bihar, Jharkhand & Uttar Pradesh,
                            supporting more than 50,000 livelihoods. Committed to its vision,
                            the company strives to strengthen the nation by providing the
                            highest quality protein sources.
                        </p>
                        <p className="text-gray-800 text-lg text-justify mb-3">
                            Over the years, the company has expanded to offer comprehensive
                            support to farmers through integrated farm solutions across Bihar,
                            Jharkhand & Uttar Pradesh. With a strong commitment to empowering
                            farmers and partners, Hariom fosters a meaningful impact in their
                            lives while ensuring a steady supply of protein. Driven by this
                            vision, Hariom continues to progress as a leader in the protein
                            industry.
                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div className="col-12 col-md-6 d-flex justify-content-center p-5">
                        <img
                            src="public/assets/images/b1.jpg"
                            alt="Farms Overview"
                            className="w-100 rounded shadow-lg"
                        />
                    </div>
                </div>

                {/* Our Branches Section */}
                <div className="sec-title text-center">
                    <h2>Our Branches</h2>
                    <div className="text-decoration">
                        <span className="left"></span>
                        <span className="right"></span>
                    </div>
                </div>

                {/* Replace Static Cards with StateCards Component */}
                <StateCards />
            </div>
            <Outlet />

        </section>

    );
};

export default Integration;
