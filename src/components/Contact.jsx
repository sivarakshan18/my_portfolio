import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

// ─────────────────────────────────────────────────────────────
//  PASTE YOUR EMAILJS CREDENTIALS HERE
//  1. Go to https://www.emailjs.com  → Sign up (free tier = 200 emails/month)
//  2. Create an Email Service  → copy the Service ID
//  3. Create an Email Template → copy the Template ID
//     In your template, use these variables:
//       {{from_name}}  {{from_email}}  {{phone}}  {{budget}}  {{message}}
//  4. Go to Account → copy your Public Key
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_kbtylg';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_b2cyh4h';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY   = '8SN0EGtNEkuNVPjLU';   // e.g. 'AbCdEfGhIjKlMn'

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  // Separate useInView hooks — UNCHANGED
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: formAnimRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: footerRef, inView: footerInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <div id='contact'>
      {/* Header */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: -100 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className='text-4xl font-bold text-white'
        >
          Let's Discuss Your <span className='text-purple-500'>Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='text-slate-400 mt-4'
        >
          Let's make something new, different, and more meaningful — more visual or conceptual.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>

        {/* Contact Info */}
        <div className='space-y-6'>
          {[
            {
              icon: <FaPhone className='text-white w-6 h-6' />,
              title: "Call Me",
              value: "+91 93612 37734",
              delay: 0.2
            },
            {
              icon: <FaEnvelope className='text-white w-6 h-6' />,
              title: "Email",
              value: "Sivarakshan60@gmail.com",
              delay: 0.4
            },
            {
              icon: <FaMapMarkerAlt className='text-white w-6 h-6' />,
              title: "Address",
              value: "Tirunelveli, Tamil Nadu, India",
              delay: 0.6
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              ref={infoRef}
              initial={{ opacity: 0, x: -50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: item.delay, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className='flex items-center space-x-4'
            >
              <motion.div
                className='bg-purple-500 p-4 rounded-full'
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {item.icon}
              </motion.div>
              <div>
                <p className='textlg font-medium text-purple-500'>{item.title}</p>
                <p className='text-white'>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          ref={(el) => {
            formAnimRef(el);  // intersection observer ref
            formRef.current = el; // emailjs form ref
          }}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='space-y-4 text-white'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <motion.input
              type="text"
              name="from_name"
              placeholder='Full name'
              required
              whileFocus={{ scale: 1.02 }}
              className='border border-purple-500 bg-gray-900 p-4 rounded-md'
            />
            <motion.input
              type="email"
              name="from_email"
              placeholder='Your Email'
              required
              whileFocus={{ scale: 1.02 }}
              className='border border-purple-500 bg-gray-900 p-4 rounded-md'
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <motion.input
              type="text"
              name="phone"
              placeholder='Phone number'
              whileFocus={{ scale: 1.02 }}
              className='border border-purple-500 bg-gray-900 p-4 rounded-md'
            />
            <motion.input
              type="text"
              name="budget"
              placeholder='Budget'
              whileFocus={{ scale: 1.02 }}
              className='border border-purple-500 bg-gray-900 p-4 rounded-md'
            />
          </div>
          <motion.textarea
            name="message"
            placeholder='Message'
            required
            whileFocus={{ scale: 1.02 }}
            className='border border-purple-500 bg-gray-900 p-4 rounded-md w-full'
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            disabled={status === 'sending'}
            className={`px-6 py-3 rounded-md transition duration-200 ${
              status === 'sending'
                ? 'bg-purple-400 cursor-not-allowed opacity-70'
                : 'bg-purple-500 hover:bg-purple-600'
            } text-white`}
          >
            {status === 'sending' ? 'Sending...' : 'Submit Message'}
          </motion.button>

          {/* Status Toast */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className='text-green-400 font-medium mt-2'
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className='text-red-400 font-medium mt-2'
              >
                ❌ Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>

      {/* Footer */}
      <motion.div
        ref={footerRef}
        initial={{ opacity: 0 }}
        animate={footerInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
        className='mt-48 flex flex-col md:flex-row justify-between items-center p-5 text-white border-t-2 border-purple-500'
      >
        <p>© 2022. All Rights Reserved</p>
        <p>Siva Coding</p>
        <div className='flex justify-center space-x-4 mt-4 md:mt-0'>
          {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className='hover:text-purple-500 cursor-pointer'
            >
              <Icon className='w-6 h-6' />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
