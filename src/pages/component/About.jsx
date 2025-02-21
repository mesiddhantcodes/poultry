import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <>
                <div
                    className="breadcrumb-area text-center shadow dark bg-fixed text-light"
                    style={{ backgroundImage: "url(/assets/images/chikcs.jpg)" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>About Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li>
                                            <a href="./">
                                                <i className="fas fa-home" /> Home
                                            </a>
                                        </li>
                                        <li className="active">About</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-style-one-area default-padding">
                    {/* Shape */}
                    {/* End Shape */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6 about-style-one">
                                <h2 className="heading">Hariom Feeds Pvt. Ltd.</h2>
                                <p align="justify">
                                    Hariom Feeds Private Limited is a company, promoted by young professionals from the Poultry Sector, 
                                    offering the best quality products from Last nine years. Hariom Feeds is known as a fast growing feed manufacturing company. 
                                    We are manufacturing feeds for poultry, cattle & fish. Because of best delivery, behavior, quality product , services and time bound regular supplies 
                                    invariably and has already achieved a surprising growth in many folds in its turnover and market share. The company is backed by qualified and
                                     experienced veterinarians, nutritionists and consultants of the industry.

                                </p>
                                <p align="justify">
                                Hariom Feeds recognizes that, in general terms, despite the same types of problems faced by 
                                intensive poultry producers, factors such as environmental and climatic conditions create specific 
                                problems and  special requirements in each market.

                                </p>
                                <p align="justify">
                                The feed manufactured by us can adaptable to every breed available in the Poultry Scenario and can be
                                 offered to suit the genetic characters and growth parameters of different breeds of broiler and layer. 
                                 Hariom Feeds always promises to offer consistency in quality and time bound regular supplies to all of the Customers, Dealers & Distributors of our products. 
                                The company also promises to offer the best possible rates for its complete range of products available in the market with guaranteed quality.
                                </p>
                            </div>
                            <div className="col-xl-5 col-lg-6 about-style-one pl-50 pr-md-15 pr-xs-15">
                                <img src="/assets/images/slideHF2.jpg" alt="Henraajh Feeds" />
                            </div>
                            <div className="col-xl-12 col-lg-12 about-style-one">
                                <p align="justify">   </p>
                                <p align="justify">   </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    );
}

export default About;
