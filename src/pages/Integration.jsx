import { Outlet } from "react-router-dom";
import StateCards from "./component/StateCards";

// StateCards
const Integration = () => {
    return (
        <section className="w-full py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="row align-items-center">
                    {/* Left Section - Text Content */}
                    <div className="col-12 col-md-6 p-5 site-heading">
                        <h2 className="text-2xl font-semibold text-[#0c2957] mb-3">
                            Integration Division
                        </h2>
                        <div className="devider " />

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
                    <div className="devider " />

                    <div className="text-decoration">
                        <span className="left"></span>
                        <span className="right"></span>
                    </div>
                </div>

                <StateCards />
            </div>
            <Outlet />

        </section>

    );
};

export default Integration;
