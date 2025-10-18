import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";

// Import Components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Footer";

// Import Tailwind CSS
import "./index.css";

function App() {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <CustomCursor />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="min-h-screen bg-gray-900 text-white font-sans cursor-none"
      >
        <Header />
        <main className="pt-16">
          <Hero />
          <About />
          <Projects />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
