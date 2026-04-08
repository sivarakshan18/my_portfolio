import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaLinux 
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiMongodb, SiMysql,SiSpringboot,SiJupyter } from "react-icons/si";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Linux", icon: <FaLinux className="text-yellow-400" /> },
];

  return (
    <div id="skills" className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-3xl text-white font-bold underline mb-8"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-gray-400 mb-12"
        >
          Technologies and tools I frequently use to build fast, scalable, and responsive applications.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-white">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
