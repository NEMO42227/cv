import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

const SkillOrbit = ({ skills }) => {
  return (
    <div className="skill-orbit">
      {skills.map((group, index) => (
        <motion.div
          key={group.title}
          className="card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="tag">{group.title}</div>
          <div className="skill-orbit__row">
            {group.items.map((skill) => (
              <span key={skill} className="skill-orbit__badge">
                <FiZap size={16} />
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

SkillOrbit.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default SkillOrbit;
