import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiGlobe } from "react-icons/fi";

const labels = {
  availability: {
    es: "Disponible",
    en: "Available"
  },
  downloadCta: {
    es: "Descargar CV",
    en: "Download Resume"
  },
  languageToggle: {
    es: "Ver en inglés",
    en: "See in Spanish"
  }
};

const NavigationBar = ({
  name,
  socials,
  availability,
  language,
  onToggleLanguage,
  canToggleLanguage,
  cvFiles
}) => {
  const downloads = Array.isArray(cvFiles) ? cvFiles : [];
  const downloadLabel = labels.downloadCta[language] || labels.downloadCta.es;
  const normalizedLanguage = (language || "").toLowerCase();
  const activeDownload =
    downloads.find((file) => (file.language || "").toLowerCase() === normalizedLanguage) ||
    downloads[0] ||
    null;
  const downloadHref = activeDownload ? activeDownload.url : "#contacto";
  const downloadFileName = activeDownload?.fileName || undefined;
  const downloadTitle =
    (activeDownload?.labels && (activeDownload.labels[language] || activeDownload.labels.es)) ||
    downloadLabel;

  return (
    <motion.nav
      className="navigation"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navigation__brand">
        <h1>{name}</h1>
        <span className="tag">
          {labels.availability[language] || labels.availability.es} - {availability}
        </span>
      </div>
      <div className="navigation__links">
        {socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ opacity: 1, y: -2 }}
            style={{ opacity: 0.76 }}
          >
            {social.label} <FiExternalLink />
          </motion.a>
        ))}
      </div>
      <div className="navigation__actions">
        {canToggleLanguage && (
          <button
            type="button"
            className="pill-button"
            style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)" }}
            onClick={onToggleLanguage}
          >
            <FiGlobe /> {labels.languageToggle[language] || labels.languageToggle.es}
          </button>
        )}
        <a
          className="pill-button"
          href={downloadHref}
          download={activeDownload ? downloadFileName : undefined}
          aria-label={downloadTitle}
          title={downloadTitle}
        >
          <FiDownload /> {downloadLabel}
        </a>
      </div>
    </motion.nav>
  );
};

NavigationBar.propTypes = {
  name: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  availability: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  onToggleLanguage: PropTypes.func.isRequired,
  canToggleLanguage: PropTypes.bool,
  cvFiles: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.string,
      shortLabel: PropTypes.string,
      url: PropTypes.string.isRequired,
      fileName: PropTypes.string,
      labels: PropTypes.objectOf(PropTypes.string)
    })
  )
};

NavigationBar.defaultProps = {
  canToggleLanguage: false,
  cvFiles: []
};

export default NavigationBar;
