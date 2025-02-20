import React from 'react';

const WhyChooseUs = () => {
    return (
        <div>
            {/* Breadcrumb Section */}
            <div
                className="breadcrumb-area text-center shadow dark bg-fixed text-light"
                style={{ backgroundImage: "url(assets/images/chikcs.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Promoters &amp; Directors</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="./">
                                            <i className="fas fa-home" /> Home
                                        </a>
                                    </li>
                                    <li className="active">Promoters &amp; Directors</li>
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
                        <div className="col-xl-7 col-lg-6 about-style-one pr-50">
                            <h2 className="heading">Value</h2>
                            <p align="justify">
                                From the day of establishment, Henraajh Feeds India Pvt. Ltd. has
                                adopted a series of values and undertakings which are shown in its
                                day-to-day operations, and are defined through the following
                                aspects:
                            </p>
                            <ul className="check-solid-list mt-20">
                                <li>Customer focus</li>
                                <li>Teamwork</li>
                                <li>Commitment to achieving results</li>
                                <li>Sustainability</li>
                                <li>Interest in people</li>
                                <li>Corporate Social Responsibility</li>
                                <li>Quality and Food Safety</li>
                                <li>Uprightness</li>
                            </ul>
                        </div>
                        {/* Image Section */}
                        <div className="col-xl-5 col-lg-6 about-style-one pl-50 pr-md-15 pr-xs-15">
                            <img
                                src="assets/images/value-img.png"
                                alt="Henraajh Feeds"
                                style={{
                                    boxShadow:
                                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, " +
                                        "rgba(0, 0, 0, 0.12) 0px -12px 30px, " +
                                        "rgba(0, 0, 0, 0.12) 0px 4px 6px, " +
                                        "rgba(0, 0, 0, 0.17) 0px 12px 13px, " +
                                        "rgba(0, 0, 0, 0.09) 0px -3px 5px"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
