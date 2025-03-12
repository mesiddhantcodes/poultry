import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ContactCard = ({ title, address, phone, email, delay }) => {
  return (
    <motion.div
      className="contact-card text-center"
      style={{
        background: "linear-gradient(135deg, rgb(0, 0, 0), rgb(73, 70, 70))",
        borderRadius: "15px",
        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)", // Soft blur effect
        WebkitBackdropFilter: "blur(10px)", // Support for Safari
        minHeight: "300px",
        padding: "2rem",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        transition: "0.4s ease-in-out",
      }}
      initial={{ opacity: 0, x: "-100%", scale: 0.9 }} // Starts from the left & smaller
      animate={{ opacity: 1, x: 0, scale: 1 }} // Moves to original position
      transition={{ duration: 0.8, ease: "easeOut", delay }} // Delay for staggered effect
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 15px 30px rgba(255, 255, 255, 0.25)",
        border: "2px solid rgba(255, 255, 255, 0.6)",
      }} // Unique hover glow effect
    >
      {/* Gradient Glow Effect */}
      <div
        style={{
          position: "absolute",
          width: "120px",
          height: "120px",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          top: "-30px",
          left: "-30px",
          filter: "blur(20px)",
        }}
      />

      <h4
        className="fw-bold mt-2"
        style={{
          fontSize: "1.6rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "#FFD700",
        }}
      >
        {title}
      </h4>

      {/* Address */}
      <p
        className="mb-3"
        style={{
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          color: "#EAEAEA",
        }}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: "1.2rem" }} /> {address}
      </p>

      {/* Phone */}
      {phone && (
        <p
          className="mb-2"
          style={{
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <FontAwesomeIcon icon={faPhone} style={{ fontSize: "1.2rem", color: "#fff" }} />
          <a href={`tel:${phone}`} style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
            {phone}
          </a>
        </p>
      )}

      {/* Email */}
      {email && (
        <p
          className="mb-0"
          style={{
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.2rem", color: "#fff" }} />
          <a href={`mailto:${email}`} style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
            {email}
          </a>
        </p>
      )}
    </motion.div>
  );
};

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  delay: PropTypes.number, // New delay prop for stagger effect
};

export default ContactCard;
