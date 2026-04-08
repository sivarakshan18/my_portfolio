import React from "react";
import project3 from "../assets/project.jpg";
import project2 from "../assets/project2.jpg";
import project1 from "../assets/project3.jpg";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Skills from "./Skills";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Email Assistant",
      decription:
      "An AI-powered assistant that generates, summarizes, and responds to emails with context-aware intelligence. Enhances productivity by automating email drafting and reply suggestions using Gemini AI.",
      image: project1,
      link: "#",
    },
    {
      id: 2,
      title: "EV Demand Charge Prediction",
      decription:
        "An AI-powered system predicting Electric Vehicle (EV) adoption trends using ML and feature engineering.",
      image: project2,
      link: "#",
    },
   {
      id: 3,
      title: "Hospital Management System",
      decription:
        "A full-stack web application to manage hospital operations including patient registration, doctor appointments, and admin control. Built using Django, React, and JWT authentication.",
      image: project3,
      link: "#",
    },
  ];

  // Independent refs
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="work" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 100 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-3xl text-white underline font-bold text-center mb-8"
        >
          My Work
        </motion.h2>

        <motion.p
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mb-12 text-gray-400 text-center"
        >
          My work reflects practical learning through real projects and
          certifications, showcasing growth in creativity, problem-solving, and
          technical skills.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((pro, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

            return (
              <motion.div
                ref={ref}
                key={pro.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  delay: 0.1 + index * 0.1,
                  duration: 0.3,
                }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 rounded-lg shadow-xl hover:shadow-purple-600 transition-shadow duration-300 overflow-hidden"
              >
                <motion.img
                  src={pro.image}
                  alt=""
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">
                    {pro.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{pro.decription}</p>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#8B5CF6",
                      color: "#ffffff",
                    }}
                    className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full transition duration-200"
                  >
                    Details
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0, y: 100 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <Skills />
      </motion.div>
    </div>
  );
};

export default Work;
