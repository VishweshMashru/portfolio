'use client';
import { motion } from "framer-motion";
import { FaHome, FaUserAlt, FaFolderOpen, FaEnvelope, FaLaptopCode } from "react-icons/fa";

export default function Navbar(){
        return (
            <nav className="bg-orange-200 border-gray-200 dark:border-gray-700">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
  <motion.div
    className="self-center text-4xl text-red-500 border-4 rounded-3xl border-orange-300 p-2"
    initial={{ opacity: 0, scale: 0.8 }} // Fade in with slight scale
    animate={{ opacity: 1, scale: 1 }} // Full opacity and normal size
    transition={{ duration: 0.5, ease: "easeOut" }} // Smooth easing
    whileHover={{
      scale: 1.2, // Slight bounce
      rotate: 5, // A small tilt
      color: "#FF6347", // Change icon color to tomato red
      transition: { type: "spring", stiffness: 300 }, // Springy feel
    }}
    whileTap={{ scale: 0.9 }} // Slight shrink on tap
  >
    <FaLaptopCode /> {/* Displaying the icon */}
  </motion.div>
</a>
<motion.div
          className="hidden w-full md:block md:w-auto"
          id="navbar-dropdown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-orange-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {/* Home Link */}
            <li>
              <motion.a
                href="#home"
                className="flex items-center space-x-2 py-2 px-3 text-red-500 rounded hover:bg-orange-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaHome className="text-xl" />
                <span>Home</span>
              </motion.a>
            </li>

            {/* About Me Link */}
            <li>
              <motion.a
                href="#about"
                className="flex items-center space-x-2 py-2 px-3 text-red-500 rounded hover:bg-orange-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaUserAlt className="text-xl" />
                <span>About Me</span>
              </motion.a>
            </li>

            {/* Projects Link */}
            <li>
              <motion.a
                href="#projects"
                className="flex items-center space-x-2 py-2 px-3 text-red-500 rounded hover:bg-orange-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaFolderOpen className="text-xl" />
                <span>Projects</span>
              </motion.a>
            </li>

            {/* Contact Link */}
            <li>
              <motion.a
                href="#contact"
                className="flex items-center space-x-2 py-2 px-3 text-red-500 rounded hover:bg-orange-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="text-xl" />
                <span>Contact</span>
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}