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
                                <h2 className="heading">Henraajh Feeds India Pvt. Ltd.</h2>
                                <p align="justify">
                                    Henraajh Feeds India Pvt. Ltd. is the top feed company in Patna
                                    Bihar, providing the best premium quality broiler poultry feed. Our
                                    wholesome and nutritional feed is the most preferred meal in the
                                    Bihar poultry market. We offer the best poultry feed in Bihar that
                                    is well-balanced to fulfill the different requirements of different
                                    birds. Our feed is specially formulated to ensure your birds get the
                                    essential nutrients they need. Through an unwavering commitment
                                    towards quality, excellence, and strategic integration since On May
                                    23, 2016. Our feed mills ensure timely delivery of high-quality feed
                                    in desired quantities. To ensure that only the best feed reaches our
                                    customers, we have a fully-equipped in-house laboratory that
                                    monitors the quality of the feed across the entire production line –
                                    from raw materials to the finished product.
                                </p>
                                <p align="justify">
                                    The factory of Henraajh Feeds India Pvt. Ltd. was installed in Plot
                                    No S-1, Phase II, Industrial Area, Fatuha, Patna- 803201,M/s
                                    Henraajh Feeds India Pvt. Ltd. was incorporated on 09.05.2012 under
                                    Companies Act, 1956 bearing corporate Identity No.
                                    U15490BR2012PTC018622, having registered office at Neem Ghat, Water
                                    Tank road Khajekalan, Patna (Bihar).
                                </p>
                                <p align="justify">
                                    We at Henraajh Feeds India Pvt. Ltd. are strongly committed to offer
                                    high quality poultry feed to the Indian poultry farming community
                                    and support them to bring down their production costs of raising
                                    broilers and thus helping them to prosper economically. We will
                                    re-engineer and improvise our technology and invest in our research
                                    and development and thereby always remain ahead of the competition.
                                    We will innovate always...and be pioneers in broiler feeding!!!
                                </p>
                            </div>
                            <div className="col-xl-5 col-lg-6 about-style-one pl-50 pr-md-15 pr-xs-15">
                                <img src="/assets/images/slideHF2.jpg" alt="Henraajh Feeds" />
                            </div>
                            <div className="col-xl-12 col-lg-12 about-style-one">
                                <p align="justify">
                                    Henraajh Feeds India Pvt. Ltd. is a feed manufacturing company
                                    producing compounded poultry feed, catering to the animal health and
                                    nutrition industry and among the top 3 feed producing companies in
                                    North-East India, focused on sustainable quality and poultry
                                    nutritional solutions to today's biggest poultry nutritional
                                    challenges. Regd Office in Patna, Bihar, India, Henraajh Feeds India
                                    Pvt. Ltd. have production facilities and distri- butors
                                    strategically located across the north and eastern belts of India.
                                </p>
                                <p align="justify">
                                    The factory of Henraajh Feeds India Pvt. Ltd. was installed in Plot
                                    No S-1, Phase II, Industrial Area, Fatuha, Patna- 803201
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    );
}

export default About;
