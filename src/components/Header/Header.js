import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", to: "about" },
  { name: "Portfolio", to: "projects" },
  { name: "Contact", to: "contact" },
];

const socialLinks = [
  { icon: <FiGithub />, url: "https://github.com/charisthedev" },
  { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/sikiru-razak" },
  { icon: <FiTwitter />, url: "https://x.com/charis_dev" },
  { icon: <FiMail />, url: "mailto:sikirurazak1@gmail.com" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-surface/80 backdrop-blur-md border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-white flex items-center group"
          >
            <span className="text-gradient text-3xl font-semibold">{"</"}</span>
            <span className="text-primary">𝐶𝒽𝒶𝓇𝒾𝓈</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                activeClass="text-white"
                spy={true}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.4, duration: 0.3 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 flex flex-col items-end space-y-1.5 transition-all duration-300 ${
              mobileMenuOpen ? "transform rotate-180" : ""
            }`}
          >
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "w-5"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden overflow-hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex space-x-4 pt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
