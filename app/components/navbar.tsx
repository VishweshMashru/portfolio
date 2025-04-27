'use client';
import { motion } from "framer-motion";
import { FaHome, FaUserAlt, FaFolderOpen, FaEnvelope, FaLaptopCode } from "react-icons/fa";

export default function Navbar(){
        return (
          <nav className="bg-[#2C2C2C]/80 border-b border-gray-700 shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <motion.div
                className="self-center text-4xl text-gray-400 border-4 rounded-3xl border-gray-600 p-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                  color: "#A0AEC0",
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLaptopCode />
              </motion.div>
            </a>
        
            <motion.div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              <ul className="flex flex-col font-medium p-4 mt-4 border rounded-lg bg-[#2C2C2C]/90 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                {["Home", "About Me", "Projects", "Contact"].map((item, index) => (
                  <li key={index}>
                    <motion.a
                      href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                      className="flex items-center space-x-2 py-2 px-3 text-gray-300 hover:text-white hover:bg-[#3D3D3D] rounded"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {index === 0 && <FaHome className="text-xl" />}
                      {index === 1 && <FaUserAlt className="text-xl" />}
                      {index === 2 && <FaFolderOpen className="text-xl" />}
                      {index === 3 && <FaEnvelope className="text-xl" />}
                      <span>{item}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </nav>
        
  );
}