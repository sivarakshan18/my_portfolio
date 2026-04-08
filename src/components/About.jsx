import React from "react";
import about from "../assets/about.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      id="about"
      className="text-white py-16"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Heading with slight rotate and fade-in */}
        <motion.h2
          ref={ref1}
          initial={{ opacity: 0, rotateX: -90 }}
          animate={inView1 ? { opacity: 1, rotateX: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 underline"
        >
          About Me
        </motion.h2>

        {/* Paragraph with slide from bottom */}
        <motion.p
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12 text-gray-400 text-center"
        >
          I’m a Computer Science student passionate about building efficient and user-friendly web applications.
        </motion.p>

        {/* Image and About Text */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Image with zoom effect */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView2 ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 md:mb-0 md:mr-8 flex justify-center"
          >
            <motion.img
              src={about}
              alt="About"
             className="w-[80%] sm:w-[80%] md:w-[60%] rounded-full aspect-square object-cover mx-auto"

              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Text beside image */}
          <motion.p
            ref={ref2}
            initial={{ opacity: 0, x: 100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl"
          >
            We are a team of passionate developers and designers dedicated to creating innovative, user-centric digital
            solutions. With a strong foundation in modern technologies and a focus on quality, we strive to bring ideas
            to life through clean code, thoughtful design, and seamless user experiences.
          </motion.p>
        </div>

        {/* Counter section with pulse animation */}
        <div className="flex flex-col sm:flex-row justify-around items-center mt-8 space-y-6 sm:space-y-0">
          {[
            { count: "7+", label: "Projects I have Made", delay: 0.2 },
            { count: "8+", label: "Certifications Earned", delay: 0.4 },
            { count: "10+", label: "Skills I’ve Learned So Far", delay: 0.6 },
          ].map((item, i) => (
            <motion.div
              ref={ref3}
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="text-center"
            >
              <motion.h3
                className="text-4xl md:text-8xl font-bold text-purple-500 mb-2"
                animate={inView3 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ delay: item.delay + 0.4, duration: 0.6, repeat: 2 }}
              >
                {item.count}
              </motion.h3>
              <motion.p
                className="text-sm sm:text-base text-gray-300"
                initial={{ opacity: 0 }}
                animate={inView3 ? { opacity: 1 } : {}}
                transition={{ delay: item.delay + 0.6, duration: 0.5 }}
              >
                {item.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;

