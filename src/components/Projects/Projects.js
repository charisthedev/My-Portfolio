import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Matakai",
    description:
      "A modern social media platform for immigrants to share experiences around the world.",
    image: "matakai.jpeg",
    link: "https://matakai.com",
    linkType: "live",
  },
  {
    id: 2,
    title: "Lucent",
    description:
      "A robust B2B data analytics platform for businesses to make data-driven decisions.",
    image: "lucent.jpeg",
    link: "https://mylucent.io",
    linkType: "live",
  },
  {
    id: 3,
    title: "Amtil",
    description:
      "A modern 3-D interactive education platform for aviation students and professionals.",
    image: "amtil.jpeg",
    link: "https://amtil.co",
    linkType: "live",
  },
  {
    id: 4,
    title: "SkaleTek",
    description:
      "A modern compliance as a service platform for businesses to manage their compliance requirements.",
    image: "skaletek.jpeg",
    link: "https://skaletek.io",
    linkType: "live",
  },
  {
    id: 5,
    title: "Kargoplex",
    description:
      "A modern shipment tracking platform for businesses to manage their shipments.",
    image: "kargoplex.jpeg",
    link: "https://kargoplex.com",
    linkType: "live",
  },
  {
    id: 6,
    title: "Aibanc",
    description:
      "A modern fintech platform focusing on providing easily accessible loans to individuals.",
    image: "aibanc.jpeg",
    link: "https://aibanc.co",
    linkType: "live",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Recent <span className="text-gradient">Works</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection some of my recent work.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="relative overflow-hidden pt-[56.25%] bg-gray-100 dark:bg-gray-700"
                style={{
                  backgroundImage: `url(${require(`../../files/${project.image}`)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    {project.linkType === "github" ? (
                      <>
                        <FiGithub className="w-5 h-5" />
                        <span>View Code</span>
                      </>
                    ) : (
                      <>
                        <FiExternalLink className="w-5 h-5" />
                      </>
                    )}
                  </a>
                </div>
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300  flex-grow">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
