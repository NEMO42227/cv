import { motion } from "framer-motion";

const LoadingScene = () => {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center"
      }}
    >
      <motion.div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.1)",
          display: "grid",
          placeItems: "center",
          background: "rgba(255,255,255,0.05)"
        }}
        animate={{
          rotate: [0, 5, -5, 0],
          boxShadow: [
            "0 0 0 rgba(154,124,255,0.4)",
            "0 0 32px rgba(154,124,255,0.25)",
            "0 0 0 rgba(154,124,255,0.4)"
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
          ease: "easeInOut"
        }}
      >
        <motion.span
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--accent-2))"
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingScene;
