import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

const copy = {
  sectionTag: {
    es: "Colección de proyectos",
    en: "Project collection"
  },
  sectionTitle: {
    es: "Experiencias que cuentan historias",
    en: "Experiences that tell a story"
  },
  sectionLead: {
    es: "Cada proyecto mezcla datos y diseño para construir soluciones medibles y confiables.",
    en: "Each project blends data and design to deliver measurable, reliable solutions."
  },
  featuredCount: {
    es: (count) => `${count} proyectos destacados`,
    en: (count) => `${count} featured projects`
  },
  resultsHeading: {
    es: "Resultados obtenidos",
    en: "Key results"
  },
  externalLabel: {
    es: "Abrir enlace",
    en: "Open link"
  }
};

const ProjectShowcase = ({ projects, language }) => {
  return (
    <section id="proyectos">
      <div className="container projects">
        <header className="section-header">
          <div className="section-header__title">
            <span className="tag">{copy.sectionTag[language] || copy.sectionTag.es}</span>
            <h2>{copy.sectionTitle[language] || copy.sectionTitle.es}</h2>
            <p>{copy.sectionLead[language] || copy.sectionLead.es}</p>
          </div>
          <span className="pill">
            <FiStar /> {(copy.featuredCount[language] || copy.featuredCount.es)(projects.length)}
          </span>
        </header>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="card projects__card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>
                {project.name}
                {project.period && project.period.trim() && (
                  <span className="tag">{project.period}</span>
                )}
              </h3>
              <p>{project.description}</p>
              <div className="projects__tags">
                {project.stack.map((stackItem) => (
                  <span key={stackItem} className="pill">
                    {stackItem}
                  </span>
                ))}
              </div>
              {project.highlights.length > 0 && (
                <div style={{ marginTop: "1rem" }}>
                  <h4 style={{ marginBottom: "0.6rem" }}>
                    {copy.resultsHeading[language] || copy.resultsHeading.es}
                  </h4>
                  <ul style={{ listStyle: "none", color: "var(--muted)", padding: 0 }}>
                    {project.highlights.map((highlight) => (
                      <li key={highlight} style={{ marginBottom: "0.4rem" }}>
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="projects__links">
                {project.links.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                    {link.label} <FiArrowUpRight aria-label={copy.externalLabel[language] || copy.externalLabel.es} />
                  </a>
                ))}
              </div>
              <motion.span
                className="floating-spark"
                style={{
                  top: "-20%",
                  right: "-25%",
                  opacity: 0.35
                }}
                animate={{ rotate: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

ProjectShowcase.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      period: PropTypes.string,
      description: PropTypes.string.isRequired,
      stack: PropTypes.arrayOf(PropTypes.string).isRequired,
      highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired,
  language: PropTypes.string.isRequired
};

export default ProjectShowcase;
