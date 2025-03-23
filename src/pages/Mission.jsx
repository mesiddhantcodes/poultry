import React from 'react';


const Mission = () => {
    return (
        <>
            {/* Breadcrumb Area */}
            <div
                className="breadcrumb-area text-center shadow dark bg-fixed text-light"
                style={{ backgroundImage: "url(src/assets/images/chikcs.jpg)" }}
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

                        <div className="col-xl-7 col-lg-6 about-style-one pr-50 site-heading">
                            <h2 className="heading">Our Vision</h2>
                            <div className="" />

                            <p className="global-paragraph" align="justify">
                                At Hariom feeds Private Limited, we are committed to producing premium poultry feed that meets
                                the highest nutritional standards.Our goal is to become a trusted reference for
                                quality in the poultry industry, ensuring the well-being and growth of poultry for future generations.
                                Through teamwork, social responsibility, and innovative practices,we create feed solutions that are both functional
                                and affordable,helping farmers maximize productivity without incurring extra expenses.

                            </p>
                        </div>

                        <div className="col-xl-5 col-lg-6 about-style-one pl-50 pr-md-15 pr-xs-15">
                            <img
                                src="src/assets/images/vision.jpg"
                                alt="Hariom Feeds."
                                className="styled-img"
                            />
                        </div>

                        {/* Mission Section */}
                        <div className="col-xl-5 col-lg-6 about-style-one pr-50 pr-md-15 pr-xs-15 pt-50">
                            <img
                                src="src/assets/images/mission.jpg"
                                alt="Hariom Feeds"
                                className="styled-img"
                            />
                        </div>

                        <div className="col-xl-7 col-lg-6 about-style-one site-heading  pl-50 pt-50">
                            <h2 className="heading">Our Mission</h2>
                            <div className="" />

                            <p className="global-paragraph" align="justify">
                                At Hariom Feeds Private Limited, Our mission is to
                                produce poultry feed of national standards,ensuring consistent quality and delivering unparalleled
                                performance benefits to poultry farmers at an affordable price.
                            </p>
                            <p className="global-paragraph" align="justify">
                                Since our inception,we have been dedicated to developing superior-quality broiler feed that meets the demands of
                                modern poultry farming.our unwavering focus on broiler feed has enabled us to achieve exceptional results,particularly with today’s genetically improved broilers.
                                By Combining advanced nutrition science,cutting-edge technology, and a deep understanding of poultry needs,we empower farmers to maximize growth,health,and
                                profitability in their flocks.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Mission;
