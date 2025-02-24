import PropTypes from "prop-types";

const ContactCard = ({ title, address, phone, email }) => {
  return (
    <div
      className="area-box shadow-lg rounded-lg text-center"
      style={{
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        minHeight: "250px",
        padding: "2rem",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.05)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <h4 className="fw-bold mt-2">{title}</h4>
      <p className="mb-2">{address}</p>
      {phone && (
        <p className="mb-2">
          <strong>Phone:</strong> {phone}
        </p>
      )}
      {email && (
        <p className="mb-0">
          <strong>Email:</strong> {email}
        </p>
      )}
    </div>
  );
};

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
};

export default ContactCard;
