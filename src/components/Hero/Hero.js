import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Pragmatism</span> isn’t compromise,
            It’s <span className="text-gradient">clarity</span>.
          </motion.h1>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn btn-primary group"
            >
              View My Work
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:sikirurazak1@gmail.com"
              className="btn btn-outline group"
            >
              Get In Touch
              <FiMail className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Social links */}
      <div className="hidden md:flex flex-col items-center space-y-6 fixed left-8 bottom-0 z-20">
        {[
          { icon: <FiGithub />, url: "https://github.com/charisthedev" },
          { icon: <FiLinkedin />, url: "https://linkedin.com/in/sikiru-razak" },
          { icon: <FiTwitter />, url: "https://x.com/charis_dev" },
          { icon: <FiMail />, url: "mailto:sikirurazak1@gmail.com" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={`Social link ${index + 1}`}
          >
            {React.cloneElement(social.icon, { size: 20 })}
          </a>
        ))}
        <div className="w-px h-24 bg-gray-700"></div>
      </div>
    </section>
  );
};
export default Hero;
