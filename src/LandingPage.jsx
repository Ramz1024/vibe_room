import "./LandingPage.css";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="vibe-root">
      <div className="vibe-topbar">
        <div className="vibe-logo">Vibe Room</div>
        <nav className="vibe-nav">
          <a href="#how">How</a>
          <a href="#moods">Moods</a>
          <a href="#join">Join</a>
        </nav>
      </div>

      <section className="vibe-hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Step Into Your Mood
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A space to vibe, feel, and connect — together.
        </motion.p>
      </section>

      <motion.section
        id="how"
        className="vibe-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>How It Works</h2>
        <div className="vibe-steps">
          <div><span>🎧</span>Pick a Mood</div>
          <div><span>🎶</span>Listen Together</div>
          <div><span>💬</span>Chat & Chill</div>
        </div>
      </motion.section>

      <motion.section
  id="moods"
  className="vibe-section"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <h2>Mood Rooms</h2>
  <div className="vibe-rotate-container">
    {["Chill", "Sad", "Energetic", "Focus", "Romantic", "Lo-fi"].map((mood) => (
      <motion.div
        key={mood}
        className="vibe-rotate-card"
        whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <h3>{mood}</h3>
        <p>Feel the {mood.toLowerCase()} vibe</p>
        <button>Join Room</button>
      </motion.div>
    ))}
  </div>
</motion.section>


      <motion.section
        id="join"
        className="vibe-cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Join the Vibe</h2>
        <p>Connect with your emotions, people & music. Anytime.</p>
        <button>Get Started</button>
      </motion.section>

      <footer className="vibe-footer">
        © {new Date().getFullYear()} Vibe Room
      </footer>
    </div>
  );
}
