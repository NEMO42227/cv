import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

const copy = {
  tag: {
    es: "Trayectoria",
    en: "Journey"
  },
  title: {
    es: "Momentos que marcaron el rumbo",
    en: "Milestones that shaped my path"
  },
  lead: {
    es: "Cada etapa sumó nuevas herramientas y perspectivas para diseñar productos más humanos y estratégicos.",
    en: "Each stage added tools and perspectives to design more human, strategic products."
  },
  badge: {
    es: "Enfoque constante en aprender y entregar valor",
    en: "Committed to learning and delivering value"
  }
};

const JourneyTimeline = ({ journey, language }) => {
  return (
    <section id="trayectoria">
      <div className="container journey">
        <header className="section-header">
          <div className="section-header__title">
            <span className="tag">{copy.tag[language] || copy.tag.es}</span>
            <h2>{copy.title[language] || copy.title.es}</h2>
            <p>{copy.lead[language] || copy.lead.es}</p>
          </div>
          <span className="pill">
            <FiClock /> {copy.badge[language] || copy.badge.es}
          </span>
        </header>

        <div className="card">
          {journey.map((item, index) => (
            <motion.article
              key={item.title}
              className="journey__item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="journey__title">{item.title}</h3>
              {item.period && item.period.trim() && (
                <div className="journey__period">{item.period}</div>
              )}
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

JourneyTimeline.propTypes = {
  journey: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      period: PropTypes.string,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  language: PropTypes.string.isRequired
};

export default JourneyTimeline;
