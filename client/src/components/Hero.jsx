import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiMessageCircle } from "react-icons/fi";
import SkillOrbit from "./SkillOrbit.jsx";

const copy = {
  greeting: {
    es: "Hola, soy",
    en: "Hi, I'm"
  },
  profileHeading: {
    es: "Perfil profesional",
    en: "Professional profile"
  },
  profileParagraph: {
    es: "Enfoco cada proyecto en la entrega de resultados medibles. Defino arquitecturas, coordino experimentos y traduzco hallazgos técnicos en decisiones claras para los equipos. Mi objetivo es construir soluciones robustas que conecten la estrategia con la ejecución.",
    en: "I focus every project on measurable outcomes. I design architectures, coordinate experiments, and translate technical findings into clear decisions for teams. My goal is to build reliable solutions that connect strategy with execution."
  }
};

const Hero = ({ cvData, language }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <motion.div
            className="hero__headline"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag">
              {copy.greeting[language] || copy.greeting.es} {cvData.name.split(" ")[0]}
            </span>
            <h2>
              <span className="accent-text">{cvData.tagline}</span>
            </h2>
            <p className="hero__bio">{cvData.bio}</p>
            <div className="hero__meta">
              <span className="pill">
                <FiMapPin /> {cvData.location}
              </span>
              <span className="pill">
                <FiMail /> {cvData.contact.email}
              </span>
              <span className="pill">
                <FiMessageCircle /> {cvData.availability}
              </span>
            </div>
          </motion.div>

          <div className="hero__outer-card">
            <motion.div
              className="card"
              initial={{ opacity: 0, scale: 0.92, y: 28 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
              <h3>{copy.profileHeading[language] || copy.profileHeading.es}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {copy.profileParagraph[language] || copy.profileParagraph.es}
              </p>
              <SkillOrbit skills={cvData.skills} />
            </motion.div>

            <div className="spark-group">
              <motion.span
                className="floating-spark"
                style={{ top: "-10%", right: "-12%" }}
                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
              />
              <motion.span
                className="floating-spark"
                style={{
                  bottom: "-20%",
                  left: "-15%",
                  background:
                    "radial-gradient(circle, rgba(255,144,232,0.3), transparent 65%)"
                }}
                animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  cvData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    contact: PropTypes.shape({
      email: PropTypes.string.isRequired
    }).isRequired,
    skills: PropTypes.array.isRequired
  }).isRequired,
  language: PropTypes.string.isRequired
};

export default Hero;
