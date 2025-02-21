import React from "react";

const Poultry = () => {
  return (
    <section className="w-full py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="row align-items-center">
          {/* Left Section - Text Content */}
          <div className="col-12 col-md-6 p-5">
            <h2 className="text-2xl font-semibold text-[#0c2957] mb-3">
              Farms-Overview
            </h2>
            <p className="text-gray-800 text-lg text-justify mb-3">
              Suguna Foods is a name that resonates with your nutritional and
              protein requirements. With a rich legacy of 35+ years, Suguna
              continues to energize rural India by enriching more than 40,000
              livelihoods. It envisages a march towards the vision of
              strengthening the nation through its highest quality protein
              sources.
            </p>
            <p className="text-gray-800 text-lg text-justify mb-3">
              The company has diversified over the years to provide 360 degrees
              of support to farmers with integrated farm solutions across India.
              With a belief in empowering our farmers and partners through
              encouraging productive impact in their lives as consistent protein
              suppliers, Suguna understands to progress as a ‘protein leader’.
            </p>
            {/* <a
              href="#"
              className=" bg-red-600  px-6 py-2 rounded-lg mt-4 text-lg text-center shadow-lg hover:bg-red-700 transition"
            >
              Enquire Now
            </a> */}
          </div>

          {/* Right Section - Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center p-5">
            <img
              src="public/assets/images/b1.jpg"
              alt="Farms Overview"
              className="w-100 rounded-circle shadow-lg"
            />
          </div>
        </div> <div className="sec-title text-center ">
          <h2>Our Verticals</h2>
          <div className="text-decoration ">
            <span className="left "></span>
            <span className="right "></span>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            {/* Broiler Card 1 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 service-block-six">
              <div className="inner-box shadow-lg rounded-lg overflow-hidden">
                <div className="image-box position-relative">
                  <img
                    decoding="async"
                    width="100%"
                    height="auto"
                    src="https://sugunafoods.com/wp-content/uploads/2022/04/1-1.png"
                    className="lazy-image img-fluid"
                    alt="Broiler"
                  />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="https://sugunafoods.com/broiler/" className="btn btn-light">
                      <span className="flaticon-right" /> Learn More
                    </a>
                  </div>
                </div>
                <div className="content p-3 text-center">
                  <h5 className="fw-bold">Broiler</h5>
                </div>
              </div>
            </div>

            {/* Broiler Card 2 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 service-block-six">
              <div className="inner-box shadow-lg rounded-lg overflow-hidden">
                <div className="image-box position-relative">
                  <img
                    decoding="async"
                    width="100%"
                    height="auto"
                    src="https://sugunafoods.com/wp-content/uploads/2022/04/1-1.png"
                    className="lazy-image img-fluid"
                    alt="Broiler"
                  />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="https://sugunafoods.com/broiler/" className="btn btn-light">
                      <span className="flaticon-right" /> Learn More
                    </a>
                  </div>
                </div>
                <div className="content p-3 text-center">
                  <h5 className="fw-bold">Broiler</h5>
                </div>
              </div>
            </div>
            {/* Broiler Card 3 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 service-block-six">
              <div className="inner-box shadow-lg rounded-lg overflow-hidden">
                <div className="image-box position-relative">
                  <img
                    decoding="async"
                    width="100%"
                    height="auto"
                    src="https://sugunafoods.com/wp-content/uploads/2022/04/1-1.png"
                    className="lazy-image img-fluid"
                    alt="Broiler"
                  />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="https://sugunafoods.com/broiler/" className="btn btn-light">
                      <span className="flaticon-right" /> Learn More
                    </a>
                  </div>
                </div>
                <div className="content p-3 text-center">
                  <h5 className="fw-bold">Broiler</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>




    </section>
  );
};

export default Poultry;
