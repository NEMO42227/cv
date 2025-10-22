import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiMail, FiSmartphone } from "react-icons/fi";

const copy = {
  sectionTag: {
    es: "Contacto",
    en: "Contact"
  },
  sectionTitle: {
    es: "Construyamos lo próximo",
    en: "Let's build what's next"
  },
  responseTime: {
    es: "Respuesta rápida en menos de 24 horas.",
    en: "I typically reply within 24 hours."
  },
  realtime: {
    es: "Conversemos ideas en tiempo real.",
    en: "Let's exchange ideas in real time."
  }
};

const ContactPanel = ({ contact, language }) => {
  return (
    <section id="contacto">
      <div className="container contact">
        <header className="section-header">
          <div className="section-header__title">
            <span className="tag">{copy.sectionTag[language] || copy.sectionTag.es}</span>
            <h2>{copy.sectionTitle[language] || copy.sectionTitle.es}</h2>
            <p>{contact.message}</p>
          </div>
        </header>
        <div className="contact__grid">
          <motion.a
            href={`mailto:${contact.email}`}
            className="contact__card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="tag">Email</span>
            <strong style={{ fontSize: "1.3rem" }}>{contact.email}</strong>
            <span style={{ color: "var(--muted)" }}>
              {copy.responseTime[language] || copy.responseTime.es}
            </span>
            <FiMail size={20} />
          </motion.a>
          <motion.a
            href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="contact__card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="tag">WhatsApp</span>
            <strong style={{ fontSize: "1.3rem" }}>{contact.phone}</strong>
            <span style={{ color: "var(--muted)" }}>
              {copy.realtime[language] || copy.realtime.es}
            </span>
            <FiSmartphone size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

ContactPanel.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired,
  language: PropTypes.string.isRequired
};

export default ContactPanel;
