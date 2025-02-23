
const Journey = () => {
    return (
        <>
        <div className="">
            {/* Bs container */}
            <div className="container">
                <h2 className="pb-3 pt-2 border-bottom mb-5">Our Journey</h2>
                {/*first section/row*/}
                <div className="row align-items-center how-it-works d-flex milestone">
                    <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                        <div className="circle font-weight-bold">1</div>
                    </div>
                    <div className="col-6">
                        <h5>
                            {/* 1st january 1990-{" "} */}
                            {/* <span style={{ color: "#666" }}> The Beginning</span> */}
                        </h5>
                        {/* <p>Poultry farming training certificate </p> */}
                        {/*p>Starting with a poultry farming training certificate and an initial investment with 100 birds  of 10,000 Rs., we took the first step towards establishing our business on January 1, 1990. It's a commendable endeavor that demonstrates your determination and interest in the poultry industry.</p*/}
                    </div>
                    {/* carousel col */}
                    <div className="col-3 text-center d-inline-flex justify-content-center align-items-center">
                        {/* carousel elements */}
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/18.png"
                                        alt="First slide"
                                    />
                                    {/* <div className="carousel-caption d-none d-md-block">
                                        <p>100 birds</p>
                                    </div> */}
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/18.png"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <p>100 birds</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/11.jpg"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <p>100 birds</p> */}
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        {/* /carousel elements */}
                    </div>
                    {/* /carousel col */}
                </div>
                {/* /first section/row*/}
                {/*path between 1-2*/}
                <div className="row timeline">
                    <div className="col-2">
                        <div className="corner top-right" />
                    </div>
                    <div className="col-8">
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="corner left-bottom" />
                    </div>
                </div>
                {/*second section*/}
                <div className="row align-items-center justify-content-end how-it-works d-flex milestone">
                    {/* carousel col */}
                    <div className="col-3 text-center d-inline-flex justify-content-center align-items-center">
                        {/* carousel elements */}
                        <div
                            id="carouselExampleIndicator"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            {/* when using dynamic languages certain elements like the <ol> below will have to be shown or not with else statements depending on how many images are stored in the DB or web service call */}
                            {/*<ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicator" data-slide-to="0" class="active"></li>
        </ol>*/}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/18.png"
                                        alt="First slide"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/j22.jpg"
                                        alt="First slide"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/j222.jpg"
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                            {/* when using dynamic languages certain elements like the <ol> below will have to be shown or not with else statements depending on how many images are stored in the DB or web service call */}
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicator"
                                role="button"
                                data-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicator"
                                role="button"
                                data-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        {/* /carousel elements */}
                    </div>
                    {/* /carousel col */}
                    <div className="col-6 text-right">
                        <h5>
                            {/* 1990-2000 <span style={{ color: "#666" }}>Growing Business </span> */}
                        </h5>
                        {/* <p>
                            Starting a poultry feed and chicks business and becoming a no.1 trader
                            in Bihar from 1990 to 2013 shows dedication and success in the
                            industry. Farm was established in the year 2000 with 20,000 birds in
                            Balwakuari.
                        </p> */}
                    </div>
                    <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                        <div className="circle font-weight-bold">2</div>
                    </div>
                </div>
                {/*path between 2-3*/}
                <div className="row timeline">
                    <div className="col-2">
                        <div className="corner right-bottom" />
                    </div>
                    <div className="col-8">
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="corner top-left" />
                    </div>
                </div>
                {/*/path between 2-3*/}
                {/*third section*/}
                <div className="row align-items-center how-it-works d-flex milestone">
                    <div className="col-2 text-center fullLeft d-inline-flex justify-content-center align-items-center">
                        <div className="circle font-weight-bold">3</div>
                    </div>
                    <div className="col-6">
                        <h5>
                            {/* 2012 - <span style={{ color: "#666" }}>Bird Farming </span> */}
                        </h5>
                        {/* <p>
                            In 2012, a climate control shed was established in Didarganj, Patna.
                            Climate control sheds are designed to regulate temperature, humidity,
                            and other environmental factors to create optimal conditions for the
                            well-being and productivity of poultry.
                        </p> */}
                    </div>
                </div>
                {/*path between 3-4*/}
                <div className="row timeline">
                    <div className="col-2">
                        <div className="corner top-right" />
                    </div>
                    <div className="col-8">
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="corner left-bottom" />
                    </div>
                </div>
                {/*/path between 3-4*/}
                {/* section 4 */}
                <div className="row align-items-center justify-content-end how-it-works d-flex milestone">
                    <div className="col-6 text-right">
                        <h5>
                            {/* 2013 - <span style={{ color: "#666" }}>Manufacturing Unit</span> */}
                        </h5>
                        {/* <p>
                            In 2013, M/s Henraajh Feeds India Pvt. Ltd. proposed to establish a
                            poultry feed unit at Plot No. S-1, S-2, S-3, S-9, S-10 &amp; S-11,
                            Industrial Area, Fatuha, Patna (Bihar). The company acquired the
                            mentioned area on a leasehold basis from BIADA (Bihar Industrial Area
                            Development Authority).
                        </p> */}
                    </div>
                    <div className="col-3 text-center d-inline-flex justify-content-center align-items-center">
                        {/* carousel elements */}
                        <div
                            id="carouselExampleIndicators1"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators1"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#carouselExampleIndicators1" data-slide-to={1} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/18.png"
                                        alt="First slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <p>2013</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/mu2.jpg"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <p>2013</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/mu3.jpg"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <p>2013</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/mu4.jpg"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <p>2013</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/mu5.jpg"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <p>2013</p> */}
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators1"
                                role="button"
                                data-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators1"
                                role="button"
                                data-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        {/* /carousel elements */}
                    </div>
                    <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                        <div className="circle font-weight-bold">4</div>
                    </div>
                </div>
                {/* /section 4 */}
                {/*path between 4-5 */}
                <div className="row timeline">
                    <div className="col-2">
                        <div className="corner right-bottom" />
                    </div>
                    <div className="col-8">
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="corner top-left" />
                    </div>
                </div>
                {/*/path between 4-5 */}
                {/* section 5 */}
                <div className="row align-items-center how-it-works d-flex milestone">
                    <div className="col-2 text-center fullLeft d-inline-flex justify-content-center align-items-center">
                        <div className="circle font-weight-bold">5</div>
                    </div>
                    <div className="col-3 text-center d-inline-flex justify-content-center align-items-center">
                        {/* carousel elements */}
                        <div
                            id="carouselExampleIndicators2"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators2"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#carouselExampleIndicators2" data-slide-to={1} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/18.png"
                                        alt="First slide"
                                    />
                                    {/* <div className="carousel-caption d-none d-md-block">
                                        <p>2016</p>
                                    </div> */}
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/j33.jpg"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <p>2016</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/j333.jpg"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <p>2016</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/j3333.jpg"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <p>2016</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/j33333.jpg"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <p>2016</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src="assets/images/j333333.jpg"
                                        alt="Second slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <p>2016</p> */}
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators2"
                                role="button"
                                data-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        {/* /carousel elements */}
                    </div>
                    <div className="col-6">
                        <h5>
                            Year 2016 -{" "}
                            <span style={{ color: "#666" }}>Manufacturing Unit Start</span>
                        </h5>
                        {/* <p>
                            On May 23, 2016, Production of Poultry Feed Brand "King Star Super
                            Premium" and "Gold King Premium Quality" started in the Industrial
                            Area of Fatuha, Patna.
                        </p> */}
                    </div>
                </div>
                {/* /section 5 */}
                {/*path between 5-6 */}
                <div className="row timeline">
                    <div className="col-2">
                        <div className="corner top-right" />
                    </div>
                    <div className="col-8">
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="corner left-bottom" />
                    </div>
                </div>
                {/*/path between 5-6 */}
                {/*section 6 */}
                <div className="row align-items-center justify-content-end how-it-works d-flex milestone">
                    <div className="col-6 text-right">
                        <h5>
                            Year 2018 -{" "}
                            <span style={{ color: "#666" }}>Climate Control Shed</span>
                        </h5>
                        {/* <p>
                            In the year 2018, our business continued to experience growth with the
                            establishment of a new poultry farm in Karataha, Lalaganj, Hajipur,
                            with a capacity to house 130,000 birds.
                        </p> */}
                    </div>
                    <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                        <div className="circle font-weight-bold">6</div>
                    </div>
                </div>
                {/*/section 6 */}
                {/*path between 6-7 */}
                <div className="row timeline">
                    <div className="col-2">
                        <div className="corner right-bottom" />
                    </div>
                    <div className="col-8">
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="corner top-left" />
                    </div>
                </div>
                {/*/path between 6-7 */}
                {/* section 7 */}
                <div className="row align-items-center how-it-works d-flex milestone">
                    <div className="col-2 text-center fullLeft d-inline-flex justify-content-center align-items-center">
                        <div className="circle font-weight-bold">7</div>
                    </div>
                    <div className="col-6">
                        <h5>
                            Year 2023 - <span style={{ color: "#666" }}>Present Turnover</span>
                        </h5>
                        {/* <p>
                            Company, along with its Proprietorship Firm, has achieved a turnover
                            of 150 crore to 200 crore.
                        </p> */}
                    </div>
                </div>
                {/* /section 7 */}
                <div className="row timeline">
                    <div className="col-2">
                        <div className="corner top-right" />
                    </div>
                    <div className="col-8">
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="corner left-bottom" />
                    </div>
                </div>
                {/* /section 7 */}
                <div className="row align-items-center justify-content-end how-it-works d-flex milestone">
                    <div className="col-6 text-right">
                        <h5>
                            Future Plan - <span style={{ color: "#666" }}>Growing Business</span>
                        </h5>
                        {/* <p>
                            Expanding into a breeding hatchery and establishing a frozen chicken
                            unit are exciting future plans for our company. These initiatives can
                            provide opportunities for growth, diversification, and potentially
                            increased revenue.{" "}
                        </p> */}
                    </div>
                    <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                        <div className="circle font-weight-bold">8</div>
                    </div>
                </div>
                {/* /section 7 */}
                <div className="row timeline">
                    <div className="col-2">
                        <div className="corner right-bottom" />
                    </div>
                    <div className="col-8">
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="corner top-left" />
                    </div>
                </div>
            </div>
            {/* /Bs container */}
        </div>

        </>
    );
}

export default Journey;
