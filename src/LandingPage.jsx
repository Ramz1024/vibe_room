import "./LandingPage.css";
import { motion } from "framer-motion";

  const moods = [
  { name: "Happy", desc: "Soak in the sunshine and celebrate the good vibes", img: "/images/happy.jpeg" },
  { name: "Angry", desc: "Let it out safely and feel heard, not judged", img: "/images/angry.jpeg" },
  { name: "Sleeping", desc: "Unwind into serenity and drift into stillness", img: "/images/sleeping.jpeg" },
  { name: "Chill", desc: "Settle into mellow vibes", img: "images/chill.jpeg" },
  { name: "Sad", desc: "Release the weight and find quiet comfort in company", img: "/images/sad.jpeg" },
  { name: "Studying", desc: "Stay focused and flow with calm, distraction-free beats", img: "/images/studying.jpeg" },
  { name: "Party", desc: "Turn up the volume and ride the rhythm together", img: "/images/party.jpeg" }
];

export default function LandingPage() {
  return (
    <div className="vibe-root">
      <div className="vibe-topbar">
        <div className="vibe-logo">Vibe Room</div>
        <nav className="vibe-nav">
          <a href="#">Rooms</a>
          <a href="#">About</a>
          <a href="#">Login</a>
        </nav>
      </div>

      <section className="vibe-hero">
        <div className="vibe-hero-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="vibe-hero-sub"
          >
            Choose a mood and step inside—<br />
            listen, chat, and find your people in a space that truly gets you.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="vibe-hero-title"
          >
            Feel it. Share it. <br /> Connect now.
          </motion.h1>
          <div className="vibe-hero-buttons">
            <button className="hero-btn">Join now</button>
            <button className="hero-btn ghost">Explore rooms</button>
          </div>
        </div>
        <div className="vibe-hero-right">
          <div className="hero-image-placeholder" />
        </div>
      </section>
<section className="vibe-moods">
  {moods.map(({ name, desc, img }) => (
    <motion.div
      key={name}
      className="vibe-rotate-card"
      style={{ backgroundImage: `url(${img})` }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="overlay" />
      <div className="text-content">
        <h3>{name}</h3>
        <p>{desc}</p>
        <button>Join Room</button>
      </div>
    </motion.div>
        ))}
      </section>

      <section className="vibe-about">
        <div className="about-left">
          <h2>Your mood, your room, your people</h2>
          <p>
            Step into a space that feels just right for you. Explore rooms that match your mood,
            connect with others who understand, and let music and conversation lift you up—no pressure, just good vibes.
          </p>
        </div>
        <div className="about-right">
          <img src="/images/hero.jpg" alt="Hero Art" />
        </div>
      </section>
      <footer className="vibe-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Vibe Room</h3>
          <p>Find your vibe, feel the connection.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Vibe Room. All rights reserved.
      </div>
    </footer>

    </div>
    
  );
}
