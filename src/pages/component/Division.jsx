import PropTypes from "prop-types";

const Division = ({ image, title, paragraphs }) => {
  return (
    <section
      className="division-card py-5"
      style={{ background: "linear-gradient(135deg, #f7f9fc, #e9eff5)" }}
    >
      <div className="container">
        <div className="card shadow border-0 rounded-lg">
          <div className="row align-items-center g-0">
            {/* Left Column - Content */}
            <div className="col-lg-7 p-4">
              <h2 className="mb-3 text-primary">{title}</h2>
              <hr
                className="mb-4"
                style={{ borderTop: "2px solid #0c2957", width: "50px" }}
              />
              {paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-secondary mb-3"
                  style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
                >
                  {para}
                </p>
              ))}
            </div>
            {/* Right Column - Image */}
            <div className="col-lg-5">
              <div className="thumb">
                <img
                  src={image}
                  alt={title}
                  className="img-fluid rounded-end"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    minHeight: "300px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Division.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Division;
