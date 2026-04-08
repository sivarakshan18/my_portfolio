import { FaAppStore } from "react-icons/fa";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const servicesData = [
    {
      title: "Web Development",
      description: "Responsive and modern websites using HTML, CSS, JavaScript, and React.",
    },
    {
      title: "Full-Stack Development",
      description: "Building complete web applications using Java stack or Django + React.",
    },
    {
      title: "API Integration",
      description: "Connecting third-party services and REST APIs to enhance app functionality.",
    },
    {
      title: "Database Management",
      description: "Designing and managing SQL and NoSQL databases like MySQL and MongoDB.",
    },
    {
      title: "Technical Documentation",
      description: "Writing clear, structured, and maintainable docs for projects and APIs.",
    },
    {
      title: "Machine Learning Solutions",
      description: "Data-driven models using Python, Pandas, NumPy, Scikit-learn, and Matplotlib.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id="services" className="text-white py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold underline mb-8">
          Services
        </h2>
        <p className="mb-12 text-gray-400">
          Offering web development and full-stack solutions tailored to your needs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1c1a2b] rounded-lg text-center hover:shadow-lg hover:shadow-purple-500 transition duration-300 p-6"
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <FaAppStore className="text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto" />
              </motion.div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
