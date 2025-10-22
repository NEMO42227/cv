import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

const copy = {
  tag: {
    es: "Testimonios",
    en: "Testimonials"
  },
  title: {
    es: "Lo que cuentan las alianzas creativas",
    en: "What collaborators say"
  },
  badge: {
    es: "Feedback real",
    en: "Real feedback"
  }
};

const TestimonialCarousel = ({ testimonials, language = "es" }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [testimonials]);

  return (
    <section id="testimonios">
      <div className="container testimonials">
        <header className="section-header">
          <div className="section-header__title">
            <span className="tag">{copy.tag[language] || copy.tag.es}</span>
            <h2>{copy.title[language] || copy.title.es}</h2>
          </div>
          <span className="pill" style={{ gap: "0.4rem" }}>
            <FiMessageCircle /> {copy.badge[language] || copy.badge.es}
          </span>
        </header>

        <div className="card testimonials__quotes">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={testimonials[current].author}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              "{testimonials[current].quote}"
              <cite>- {testimonials[current].author}</cite>
            </motion.blockquote>
          </AnimatePresence>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {testimonials.map((item, index) => (
              <motion.button
                key={item.author}
                type="button"
                onClick={() => setCurrent(index)}
                style={{
                  width: index === current ? "2.2rem" : "0.7rem",
                  height: "0.7rem",
                  borderRadius: "999px",
                  border: "none",
                  background:
                    index === current
                      ? "linear-gradient(135deg, var(--accent), var(--accent-2))"
                      : "rgba(255,255,255,0.16)",
                  cursor: "pointer"
                }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired,
  language: PropTypes.string
};

export default TestimonialCarousel;
