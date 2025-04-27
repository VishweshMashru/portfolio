'use client';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-8 bg-[#1F1F1F] text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Interested in collaborating, working together, or just want to say hello? 
        Feel free to reach out — I&apos;d love to connect!
      </motion.p>

      <motion.a
        href="mailto:vishwesh@example.com"  // <-- Replace with your real email
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold hover:from-blue-500 hover:to-blue-700 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaEnvelope className="text-xl" />
        Say Hello
      </motion.a>
    </section>
  );
}
