import chicks from "@/assets/images/chikcs.jpg"
import slider from "@/assets/images/slideHF2.jpg"
import slider2 from "@/assets/images/slideHF1.jpg"
const About = () => {
    return (
        <>
            <>
                <div
                    className="breadcrumb-area text-center shadow dark bg-fixed text-light"
                    style={{ backgroundImage: `url(${chicks})` }}
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
                            <div className="col-xl-7 col-lg-6 about-style-one site-heading text-center ">
                                <h2 className="heading">Hariom Feeds Pvt. Ltd.</h2>
                                <div className=" " />


                                <p className="global-paragraph " align="justify">
                                    Hariom Feeds Private Limited is a company, promoted by young professionals from the Poultry Sector,
                                    offering the best quality products from Last 23 years. Hariom Feeds is known as a fast growing feed manufacturing company.
                                    We are manufacturing feeds for poultry, cattle & fish. Because of best delivery, behavior, quality product, services and time bound regular supplies
                                    invariably and has already achieved a surprising growth in many folds in its turnover and market share. The company is backed by qualified and
                                    experienced veterinarians, nutritionists and consultants of the industry.

                                </p>
                                <p className="global-paragraph " align="justify">
                                    Hariom Feeds recognizes that, in general terms, despite the same types of problems faced by
                                    intensive poultry producers, factors such as environmental and climatic conditions create specific
                                    problems and  special requirements in each market.

                                </p>
                                <p className="global-paragraph " align="justify">
                                    The feed manufactured by us can adaptable to every breed available in the Poultry Scenario and can be
                                    offered to suit the genetic characters and growth parameters of different breeds of broiler and layer.
                                    Hariom Feeds always promises to offer consistency in quality and time bound regular supplies to all of the Customers, Dealers & Distributors of our products.
                                    The company also promises to offer the best possible rates for its complete range of products available in the market with guaranteed quality.
                                </p>
                            </div>

                            <div className="col-xl-5 col-lg-6 about-style-one pl-50 pr-md-15 pr-xs-15">
                                <img src={slider} alt="Hariom Feeds" className="" />
                                <img src={slider2} alt="Hariom Feeds" className=" mt-4" />
                            </div>

                        </div>
                    </div>
                </div>
            </>

        </>
    );
}

export default About;
