import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/sikirurazak",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/sikirurazak",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/sikirurazak",
      color: "hover:text-blue-300",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/sikirurazak",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Email Contact */}
          <div className="text-center">
            <a
              href="mailto:sikirurazak1@gmail.com"
              className="inline-flex items-center text-white hover:text-blue-300 transition-colors duration-300 text-lg group"
              data-cursor-hover
            >
              <FaEnvelope className="text-blue-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
              sikirurazak1@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                data-cursor-hover
                aria-label={social.name}
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Copyright */}
          <div className="text-gray-400 text-center">
            <p>© {currentYear} Charis</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
