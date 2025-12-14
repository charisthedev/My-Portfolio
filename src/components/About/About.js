import { motion } from "framer-motion";

import { FaJava, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiSpringboot,
  SiNestjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Brand from "../../files/brand.jpg";

const About = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: (
        <SiJavascript className="text-[#F7DF1E] text-[40px] md:text-[20px]" />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <SiTypescript className="text-[#3178C6] text-[40px] md:text-[20px]" />
      ),
    },
    {
      name: "Java",
      icon: <FaJava className="text-[#007396] text-[40px] md:text-[20px]" />,
    },
    {
      name: "Golang",
      icon: <SiGo className="text-[#00ADD8] text-[40px] md:text-[20px]" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB] text-[40px] md:text-[20px]" />,
    },
    {
      name: "React Native",
      icon: (
        <TbBrandReactNative className="text-[#61DAFB] text-[40px] md:text-[20px]" />
      ),
    },
    {
      name: "NestJS",
      icon: <SiNestjs className="text-[#E0234E] text-[40px] md:text-[20px]" />,
    },
    {
      name: "Spring Boot",
      icon: (
        <SiSpringboot className="text-[#6DB33F] text-[40px] md:text-[20px]" />
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative pb-20 md:pt-20 md:pb-20 bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 mt16 md:mt24">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mobile Layout */}
            <div className="md:hidden mb-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-32 h-32 mb-4">
                  <div className="rounded-full border-4 border-white/5 bg-gradient-to-br from-blue-500/5 to-blue-900/5 shadow-2xl group relative w-full h-full">
                    <img
                      src={Brand}
                      alt="Charis"
                      className="w-full h-full rounded-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-[5%] right-[5%] z-50">
                      <div className="relative group">
                        <div className="flex items-center h-5 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 overflow-hidden w-5 group-hover:w-20">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                          </div>
                          <span className="text-xs text-gray-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 delay-75 ml-1">
                            Available
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Crafting Digital Experiences That{" "}
                  <span className="text-blue-400">Inspire</span>
                </h3>
              </div>

              <div className="space-y-4 mb-8 text-gray-300">
                <p>
                  I'm <span className="text-gradient">Sikiru Razak</span>, a
                  passionate Software Engineer with a proven track record of
                  building scalable, high-impact solutions and driving
                  collaboration across cross-functional teams.
                </p>
                <p>
                  My approach combines technical expertise with creative
                  problem-solving, ensuring that every project not only meets
                  but exceeds expectations.
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block relative clearfix">
              <div className="float-left mr-8 mb-4 shape-circle w-60 h-60">
                <div className="rounded-full border-4 border-white/5 bg-gradient-to-br from-blue-500/5 to-blue-900/5 shadow-2xl group relative w-full h-full">
                  <img
                    src={Brand}
                    alt="Charis"
                    className="w-full h-full rounded-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-[5%] right-[5%] z-50">
                    <div className="relative group">
                      <div className="flex items-center h-6 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 overflow-hidden w-6 group-hover:w-24">
                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                        </div>
                        <span className="text-xs text-gray-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 delay-75 ml-1">
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Crafting Digital Experiences That{" "}
                <span className="text-blue-400">Inspire</span>
              </h3>

              <div className="space-y-4 mb-8 text-gray-300">
                <p>
                  I'm <span className="text-gradient">Sikiru Razak</span>, a
                  passionate Software Engineer with a proven track record of
                  building scalable, high-impact solutions and driving
                  collaboration across cross-functional teams.
                </p>
                <p>
                  My approach combines technical expertise with creative
                  problem-solving, ensuring that every project not only meets
                  but exceeds expectations.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-6">
                My <span className="text-blue-400">Skills</span>
              </h4>
              <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 md:p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 gap-4 flex-shrink-0 min-w-[180px] md:min-w-[100px]"
                    whileHover={{ y: -2, scale: 1.02 }}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-gray-200 font-medium text-base md:text-xs">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex">
              <motion.a
                href="#contact"
                className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2 group"
                data-cursor-hover
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Work Together</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
