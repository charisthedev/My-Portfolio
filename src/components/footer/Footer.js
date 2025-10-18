import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="mailto:sikirurazak1@gmail.com"
              className="inline-flex items-center text-white hover:text-blue-300 transition-colors duration-300 text-lg"
            >
              <FaEnvelope className="text-blue-500 mr-2" />
              sikirurazak1@gmail.com
            </a>
          </div>
          <div className="text-gray-400">© {currentYear} Sikiru Razak</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
