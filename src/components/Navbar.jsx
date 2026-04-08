import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {
  const variants = {
    open: {
      clipPath: 'circle(1200px at 43px 43px)',
      transition: {
        type: 'spring',
      },
    },
    closed: {
      clipPath: 'circle(25px at 43px 37px)',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
  }

  const [menu, setMenu] = useState(false)
  const items = [
    { id: 1, text: 'About', to: 'about' },
    { id: 2, text: 'Services', to: 'services' },
    { id: 3, text: 'Work', to: 'work' },
    { id: 4, text: 'Contact', to: 'contact' },
  ]

  return (
    <div>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-6"
      >
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
          <span className="text-white">SIVA</span>
          <span className="text-purple-500">CODING</span>
        </div>
        <ul className="hidden md:flex items-center space-x-6 list-none lg:text-l md:text-base text-white cursor-pointer">
          {items.map(({ id, text, to }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.1, color: '#a855f7' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative group"
            >
              <Link to={to} smooth={true} duration={500} offset={-70}>
                {text}
              </Link>
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-purple-500 w-0 group-hover:w-full"
                layoutId="underline"
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>
        <motion.a
          href="/resume.pdf"
          download="Sivarakshan_Software_Developer_CV.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full"
        >
          Download CV
        </motion.a>
      </motion.div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between">
        <motion.div animate={menu ? 'open' : 'closed'}>
          <motion.div
            variants={variants}
            onClick={() => setMenu((prev) => !prev)}
            className="bg-white w-2/3 h-screen text-black fixed z-10"
          >
            <div className="px-7 py-6">
              {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {menu && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col justify-center items-center"
              >
                <ul className="space-y-6 text-black text-lg">
                  {items.map(({ id, text, to }) => (
                    <motion.li
                      key={id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: id * 0.1 }}
                      className="hover:text-purple-500 duration-200 cursor-pointer"
                    >
                      <Link to={to} smooth={true} duration={500} offset={-70}>
                        {text}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href="/resume.pdf"
                  download="Sivarakshan_Software_Developer_CV.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full"
                >
                  Download CV
                </motion.a>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Logo for mobile */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold flex items-center gap-2 py-6 px-4"
        >
          <span className="text-white">SIVA</span>
          <span className="text-purple-500">CODING</span>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
