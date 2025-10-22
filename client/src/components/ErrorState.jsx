import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

const copy = {
  heading: {
    es: "No pudimos cargar tu API",
    en: "We couldn't load your API"
  },
  retry: {
    es: "Reintentar",
    en: "Retry"
  },
  defaultMessage: {
    es: "Verifica que el servidor backend esté corriendo en el puerto 4000. Mientras tanto, mostramos la versión offline de tu CV.",
    en: "Check that the backend server is running on port 4000. In the meantime, we're showing the offline version of your CV."
  }
};

const ErrorState = ({
  onRetry,
  compact = false,
  message,
  language = "es"
}) => {
  const containerStyles = compact
    ? {
        display: "grid",
        gap: "0.8rem",
        alignItems: "center"
      }
    : {
        minHeight: "60vh",
        display: "grid",
        placeItems: "center"
      };

  return (
    <div style={containerStyles}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", maxWidth: "380px", gap: "1rem", width: "100%" }}
      >
        <FiAlertTriangle size={36} style={{ color: "var(--accent)" }} />
        <h3>{copy.heading[language] || copy.heading.es}</h3>
        <p style={{ color: "var(--muted)" }}>
          {message || copy.defaultMessage[language] || copy.defaultMessage.es}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="pill-button"
          style={{ display: "inline-flex", justifyContent: "center" }}
        >
          <FiRefreshCw /> {copy.retry[language] || copy.retry.es}
        </button>
      </motion.div>
    </div>
  );
};

ErrorState.propTypes = {
  onRetry: PropTypes.func.isRequired,
  compact: PropTypes.bool,
  message: PropTypes.string,
  language: PropTypes.string
};

export default ErrorState;
