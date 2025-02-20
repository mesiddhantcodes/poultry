import React from 'react';

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
                                    <img src="assets/images/dm1.jpg" alt="Thumb" />
                                </div>
                            </div>
                            <div className="col-lg-7 right-info">
                                <h2>Mr. Jaydeep Narayan Srivastava</h2>
                                <span>Director</span>
                                <p align="justify">
                                    Mr. Jaydeep Narayan Srivastava, S/o Late Laxmi Narayan Srivastava,
                                    resident of Neem Ghat, Water Tank Road, Khajekalan, Patna City,
                                    Patna (Bihar) is about 45 years old and having educational
                                    qualification is Graduation. He has working Experience from 15 to
                                    27 in the field of trading of poultry feed business.
                                </p>
                                <p align="justify">
                                    He is also proprietor of M/s Jay Enterprises. He is actively
                                    engaged in the trading of Ready birds &amp; Poultry Feeds and
                                    activities regarding purchase, sale &amp; overall management of
                                    the firms.
                                </p>
                            </div>
                            <div className="col-lg-5 left-info pt-50">
                                <div className="thumb">
                                    <img src="assets/images/dm2.jpg" alt="Thumb" />
                                </div>
                            </div>
                            <div className="col-lg-7 right-info pt-50">
                                <h2>Mrs. Jaya Srivastava</h2>
                                <span>Director</span>
                                <p align="justify">
                                    Mrs. Jaya Srivastava, w/o Jaydeep Narayan Srivastava, resident of
                                    Neem Ghat, Water Tank Road, Khajekalan, Patna City, Patna (Bihar)
                                    is about 42 years old and having educational qualification is
                                    Graduation. She has working Experience from 15 to 25 years in the
                                    field of trading of poultry feed business.
                                </p>
                                <p align="justify">
                                    She is also proprietor of M/s Western Poultry Farm and M/s Jay
                                    Enterprises. She is actively engaged in the trading of Ready birds
                                    &amp; Poultry Feeds and activities regarding purchase, sale &amp;
                                    overall management of the firms.
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
