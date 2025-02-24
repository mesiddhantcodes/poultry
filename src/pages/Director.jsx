
const Director = () => {
    return (
        <>
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
            <div className="farmer-single-area bg-gray default-padding-top">
                <div className="container">
                    <div className="farmer-content-top">
                        <div className="row">
                            <div className="col-lg-5 left-info">
                                <div className="thumb">
                                    <img src="public/assets/images/MDSIR.jpg" alt="Thumb" />
                                </div>
                            </div>
                            <div className="col-lg-7 right-info">
                                <h2>Mr. Dilip Kumar Singh </h2>
                                <span>Managing Director</span>
                                <p align="justify">
                                    Welcome to Hariom Feeds Pvt.Ltd. where quality, sustainability, and innovation are at the heart of everything we do.
                                    As a leading poultry manufacturer, we take pride in providing premium products that meet the highest standards of safety and excellence.
                                    Our commitment to integrity, sustainability, and customer satisfaction drives us to continually improve and exceed industry standards.
                                </p>
                                <p align="justify">
                                    We believe in the power of collaboration, both within our team and with our valued partners.
                                    By harnessing the latest technologies and adhering to ethical practices, we strive to offer products that are not only nutritious but also contribute positively to the communities we serve.
                                    Thank you for your continued trust in Hariom Feeds Pvt.Ltd. We are excited about the future and look forward to serving you with the
                                    same dedication and passion that has been the foundation of our success.
                                </p>
                            </div>
                            <div className="col-lg-5 left-info pt-50">
                                <div className="thumb">
                                    {/* <img src="public/assets/images/" alt="Thumb" /> */}
                                </div>
                            </div>
                            <div className="col-lg-7 right-info pt-50">
                                <h2></h2>
                                <span></span>
                                <p align="justify">

                                </p>
                                <p align="justify">

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Director;
