import PropTypes from "prop-types";

const copy = {
  signature: {
    es: (name) =>
      `(c) ${new Date().getFullYear()} ${name}. Enfocado en soluciones de IA, IoT y software confiable.`,
    en: (name) =>
      `(c) ${new Date().getFullYear()} ${name}. Focused on reliable AI, IoT, and software solutions.`
  }
};

const Footer = ({ name, socials, language }) => {
  return (
    <footer className="container footer">
      <span>{(copy.signature[language] || copy.signature.es)(name)}</span>
      <div className="footer__links">
        {socials.map((social) => (
          <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  language: PropTypes.string.isRequired
};

export default Footer;
