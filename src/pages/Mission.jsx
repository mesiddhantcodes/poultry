import React from 'react';


const Mission = () => {
    return (
        <>
            {/* Breadcrumb Area */}
            <div
                className="breadcrumb-area text-center shadow dark bg-fixed text-light"
                style={{ backgroundImage: "url(assets/images/chikcs.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Vision & Mission</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="./">
                                            <i className="fas fa-home"></i> Home
                                        </a>
                                    </li>
                                    <li className="active">Vision & Mission</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision & Mission Content */}
            <div className="about-style-one-area default-padding pb-50">
                <div className="container">
                    <div className="row">
                        {/* Vision Section */}
                        <div className="col-xl-7 col-lg-6 about-style-one pr-50">
                            <h2 className="heading">Our Vision</h2>
                            <p>
                                Henraajh Feeds India Pvt. Ltd. aims to become a reference of
                                quality in food for future generations, working as a team in a
                                socially responsible manner and using all our resources to
                                respond correctly to the new demands raised by the market. Our
                                work is focused on the constant development of new products and
                                services, including all the processes that lead us to achieve
                                an end product with functional capacity and a high nutritional
                                standard, without this incurring any extra expense for
                                consumers.
                            </p>
                        </div>

                        <div className="col-xl-5 col-lg-6 about-style-one pl-50 pr-md-15 pr-xs-15">
                            <img
                                src="assets/images/vm-img.jpg"
                                alt="Henraajh Feeds"
                                className="styled-img"
                            />
                        </div>

                        {/* Mission Section */}
                        <div className="col-xl-5 col-lg-6 about-style-one pr-50 pr-md-15 pr-xs-15 pt-50">
                            <img
                                src="assets/images/mission-img.jpg"
                                alt="Henraajh Feeds"
                                className="styled-img"
                            />
                        </div>

                        <div className="col-xl-7 col-lg-6 about-style-one pl-50 pt-50">
                            <h2 className="heading">Our Mission</h2>
                            <p>
                                To produce feed of international standards with consistent
                                quality and deliver unparalleled performance benefits at an
                                affordable price to the poultry farmer.
                            </p>
                            <p>
                                Since inception, the company has been relentlessly working on
                                developing superior quality broiler feed. The absolute focus
                                all through on broiler feeds has helped us in achieving
                                excellent results with modern-day genetically improved
                                broilers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Mission;
