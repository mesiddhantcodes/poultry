import React from 'react';

const WhyChooseUs = () => {
    return (
        <div>
            {/* Breadcrumb Section */}
            <div
                className="breadcrumb-area text-center shadow dark bg-fixed text-light"
                style={{ backgroundImage: "url(src/assets/images/chikcs.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Why Choose Us</h1>
                            
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="./">
                                            <i className="fas fa-home" /> Home
                                        </a>
                                    </li>
                                    <li className="active">Why Choose Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Content Section */}
            <div className="about-style-one-area default-padding pb-50">
                <div className="container">
                    <div className="row">
                        {/* Text Content */}
                        <div className="col-xl-7 col-lg-6 about-style-one pr-50 site-heading">
                            <h2 className="heading">Why Choose Us </h2>
                            <div className="devider" />

                            <p className="global-paragraph" align="justify">
                                From the start, Hariom Feeds Pvt. Ltd. has established a range of values and commitments
                                that are incorporated into its daily practices, which are showcased in the following aspects :
                            </p>
                            <ul className=" custom-list mt-20">
                                <li><i className="fas fa-check-circle"></i> Customer Service </li>
                                <li><i className="fas fa-check-circle"></i> Sustainability</li>
                                <li><i className="fas fa-check-circle"></i> Quality</li>
                                <li><i className="fas fa-check-circle"></i> Satisfaction</li>
                                <li><i className="fas fa-check-circle"></i> Experience</li>
                                <li><i className="fas fa-check-circle"></i> Reliability</li>
                                <li><i className="fas fa-check-circle"></i> Unity</li>
                                <li><i className="fas fa-check-circle"></i> Dedication to Success</li>

                            </ul>
                        </div>
                        {/* Image Section */}
                        <div className="col-xl-5 col-lg-6 about-style-one pl-50 pr-md-15 pr-xs-15">
                            <img
                                src="src/assets/images/why.jpeg"
                                alt="Hariom Feeds"
                                className="why-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
